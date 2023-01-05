import { Router } from "express"
import Course from "../models/course"

const router = Router();

router.post('/searchcourses', async(req, res) => {
    const { filter } = req.body;
    const { searchType, searchKey, timeFilter, generalFilter, departFilter, selectedSemester, cstypeFilter } = filter;
    console.log(filter);
    let result;

    if(searchKey === undefined || searchKey === ''){
        result = await Course.find({semester: selectedSemester}).sort({course_id: 1});
    }
    else if( searchType === 'teachername'){
        result = await Course.find({semester: selectedSemester, teacher: searchKey}).sort({course_id: 1});
    }
    else if( searchType === 'coursename'){
        result = await Course.find({semester: selectedSemester, course_name: {$regex: searchKey}}).sort({course_id: 1});
    }
    else if( searchType === 'courseid'){
        result = await Course.find({semester: selectedSemester, course_id: searchKey}).sort({course_id: 1});
    }
    else{
        res.status(403).json({messages: "Error", data: []});
        return;
    }

    if(result.length === 0){
        res.status(200).json({messages: "Not found1", data: []});
        return;
    }

    if(timeFilter !== 'none'){
        const tmFilter = timeFilter.map(e => Number(e));
        result = result.filter((course) => {
            for(var i = 0; i < course.time_for_filter.length; i++){
                if(tmFilter.indexOf(course.time_for_filter[i]) >= 0){
                    return true;
                }
            }
            return false
        })
    }

    if(generalFilter !== 'none'){
        const gnFilter = generalFilter.map(e => Number(e));
        result = result.filter((course) => {
            for(var i = 0; i < course.general.length; i++){
                if(gnFilter.indexOf(course.general[i]) >= 0){
                    return true;
                }
            }
            return false
        })
    }

    if(departFilter !== undefined && departFilter !== 'All'){
        if(departFilter === "臺師大" || departFilter === "臺科大"){
            const tmp = departFilter + "校際課程"
            result = result.filter((course) => {
                if( course.note !== null && course.note.includes(tmp) ){
                    return true;
                }
                return false;
            });
        }
        else{
            result = result.filter((course) => {
                for(var i = 0; i <= course.department.length; i++){
                    if(course.department[i] === departFilter){
                        return true;
                    }
                }
                return false;
            })
        }
    }

    if(result.length === 0){
        res.status(200).json({messages: "Not found2", data: []});
        return;
    }
    res.status(200).json({messages: "Found", data: result});
    return;
})

router.get('/searchcourse', async(req, res) => {
    const { semester, id } = req.query;
    console.log(semester, id);
    const course = await Course.findOne({semester: semester, course_id: id});
    if(!course){
        res.status(404).json({messages: "Not found", data: null});
        return;
    }

    const cheerio = require('cheerio');
    let browser;
    if(!process.env.NODE_ENV){
        const puppeteer = require('puppeteer');
        browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
    }
      else {
        const puppeteer = require('puppeteer-core')
        browser = await puppeteer.launch({
            executablePath: "/usr/bin/google-chrome",
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
      }
    const page = await browser.newPage();

    await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=${semester}&cstype=4&csname=${id}&alltime=yes&allproced=yes&allsel=yes&page_cnt=15&Submit22=%E6%9F%A5%E8%A9%A2`);

    let body = await page.content();
    let $ = await cheerio.load(body);

    let data = await $("table").find('tbody > tr[align="center"] > td > a').toArray().map(ele => $(ele).attr('href'));
    console.log(data);
    data = data.filter(href => href !== undefined && href.includes("course_id"));
    if(data.length === 0){
        res.status(200).json({ messages: "detail not found", data: null });
    }
    const link = "https://nol.ntu.edu.tw/nol/coursesearch/" + data[0];
    console.log(link);
    await page.goto(link);

    let detailBody = await page.content();
    let $$ = await cheerio.load(detailBody);

    const ACCT = ["課程概述", "課程目標", "課程要求", "預期每週課後學習時數", "Office Hours", "參考書目", "指定閱讀"]
    const output = ["", "", "", "", "", "", ""]
    const infor = await $$("body").find('table > tbody > tr > td > table > tbody > tr > td').toArray().map(ele => $$(ele).text());
    for(var i = 0; i <= 6; i++){
        for(var j = 0; j < infor.length; j++){
            if(infor[j].includes(ACCT[i])){
                output[i] = infor[j+1];
            }
        }
    }

    const output2 = [];
    const score = await $$("body").find('table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td').toArray().map(ele => $$(ele).text());
    for(var i = 4; i <= score.length; i = i+4){
        output2.push(
            {
                description: score[i+1],
                percent: score[i+2]
            }
        )
    }
    
    await browser.close();

    console.log('course', course);
    console.log(output);
    console.log(output2);

    res.status(200).json({messages:"Found", data: {course: course, data_crawler:{ ACCT: output, score: output2 }}});
})

export default router;