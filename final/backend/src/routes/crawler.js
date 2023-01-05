import { Router } from "express";

const router = Router();

router.get('/coursedetail', async(req, res) =>{
    const semester = req.query.semester;
    const courseId = req.query.courseId;

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

    await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=${semester}&cstype=4&csname=${courseId}&alltime=yes&allproced=yes&allsel=yes&page_cnt=15&Submit22=%E6%9F%A5%E8%A9%A2`);

    let body = await page.content();
    let $ = await cheerio.load(body);

    let data = await $("table").find('tbody > tr[align="center"] > td > a').toArray().map(ele => $(ele).attr('href'));
    console.log(data);
    data = data.filter(href => href !== undefined && href.includes("course_id"));
    if(data.length === 0){
        res.status(200).json({ messages: "detail not found", data: null });
    }
    const link = "https://nol.ntu.edu.tw/nol/coursesearch/" + data[0];
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

    

    res.status(200).json({ messages: "message from router", data:{ ACCT: output, score: output2 } })
})

export default router;