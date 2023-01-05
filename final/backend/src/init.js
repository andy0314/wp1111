import Course from './models/course';
import Courses from "../course.json";

const dataInit = async() => {
    await Course.deleteMany({})
    await Course.insertMany(Courses)
    console.log(`insert ${Courses.length} courses`)
}

const dataInitWithCrawler = async() => {
    const semester = ['111-2', '111-1'];
    
    const puppeteer = require('puppeteer');
    const cheerio = require('cheerio');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await Course.deleteMany({});
    for(var sem = 0; sem < semester.length; sem++){
        console.log(`loading ${semester[sem]}'s courses`)
        await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?alltime=yes&allproced=yes&cstype=1&csname=&current_sem=${semester[sem]}&op=stu&page_cnt=150&startrec=0`)
        
        let _body = await page.content();
        let _$ = await cheerio.load(_body);
        const getNumber = _$("td").find('font[color="#CC0033"] > b').toArray().map(ele => _$(ele).text());
        const num = Number(getNumber[0]);

        let start = 0;
        let loaded = 0;

        console.log("start loading courses")
        
        while(start < num){
            await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?alltime=yes&allproced=yes&cstype=1&csname=&current_sem=${semester[sem]}&op=stu&page_cnt=150&startrec=${start}`);
            start += 150;
            let body = await page.content();
            let $ = await cheerio.load(body);

            let x = 0;
            
            const data = $("table").find('tbody > tr[align="center"]').toArray().map(ele => $(ele).find('td').toArray().map(ele2 => $(ele2).text()));
            for(var i = 1; i < data.length; i++){
                if(data[i][0].length !== 5){
                    const name = data[i][4].slice(1);
                    const exist = await Course.findOne({semester: semester[sem], course_name: name});
                    if(!exist){                    
                        let newCourse = new Course;
                        x = x + 1;
                        newCourse.semester = semester[sem];
                        newCourse.course_id = '00000';
                        newCourse.department = [data[i][1]];
                        newCourse.course_code = data[i][2];
                        newCourse.class_id = data[i][3];
                        newCourse.course_name = data[i][4].slice(1);
                        newCourse.field = data[i][5];
                        newCourse.credit = Number(data[i][6].slice(0, 1));
                        newCourse.course_id_ = data[i][7];
                        newCourse.half_year = (data[i][8] === '半年');
                        newCourse.course_type = data[i][9];
                        newCourse.teacher = '';
                        newCourse.method = '0';
                        newCourse.time_place = '';
                        newCourse.max_student = '';
                        newCourse.limit = '';
                        newCourse.note = '';
                        await newCourse.save();
                        loaded++;
                    }
                    else{
                        if(data[i][1] !== String.fromCharCode(160)){
                            await Course.updateOne({semester: semester[sem], course_name: name}, {
                                $push: {department: data[i][1]}
                            });
                        }
                    }
                }
                else{
                    const id = data[i][0];
                    const exist = await Course.findOne({semester: semester[sem], course_id: id});
                    if(!exist){
                        let newCourse = new Course;
                        newCourse.semester = semester[sem];
                        newCourse._id = semester[sem]+"-"+id+"-";
                        newCourse.course_id = data[i][0];
                        newCourse.department = [data[i][1]];
                        newCourse.course_code = data[i][2];
                        newCourse.class_id = data[i][3];
                        newCourse.course_name = data[i][4].slice(1);
                        newCourse.field = data[i][5];
                        newCourse.credit = Number(data[i][6].slice(0, 1));
                        newCourse.course_id_ = data[i][7];
                        newCourse.half_year = (data[i][8] === '半年');
                        newCourse.course_type = data[i][9];
                        newCourse.teacher = data[i][10]
                        newCourse.method = data[i][11];
                        newCourse.time_place = data[i][12];
                        newCourse.max_student = data[i][13];
                        newCourse.limit = data[i][14];
                        newCourse.note = data[i][15];
                        
                        const time1 = data[i][12].split(' ').map((e) => {
                            const day = e[0];
                            const back = e.slice(1).split('(');
                            const time = back[0].split(',');
                            return { day, time } 
                        })
                        let time_array = [];
                        let day = ['一', '二', '三', '四', '五', '六'];
                        let cstime = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'B', 'C', 'D'];
                        for(var d = 0; d < time1.length; d++){
                            let day_filter_var = 0
                            for(var it = 0; it < 6; it++){
                                if(time1[d].day === day[it]){
                                    day_filter_var = 15*it;
                                    break;
                                }
                            }
                            for(var it = 0; it < 15; it++){
                                if( time1[d].time.indexOf(cstime[it]) >= 0){
                                    time_array.push(day_filter_var + it);
                                }
                            }
                        }
                        newCourse.time_for_filter = time_array;
                        await newCourse.save();
                        loaded++;
                    }
                    else{
                        await Course.updateOne({semester: semester[sem], course_id: id}, {
                            $push: {department: data[i][1]}
                        });
                    }
                }
            }
            console.log(`course loading progress to ${start}, total is ${num}`)
        }

        console.log(`loaded ${loaded} courses`);
        console.log(`loading general courses`);

        const field_name = ["", "文學與藝術", "歷史思維", "世界文明", "哲學與道德思考", "公民意識與社會分析", "量化分析與數學素養", "物質科學", "生命科學"]

        for(var i = 1; i <= 8; i++){
            await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=${semester[sem]}&cstype=8&csname=A${i}&alltime=yes&allproced=yes&allsel=yes&page_cnt=150&Submit22=%E6%9F%A5%E8%A9%A2`);
            let body = await page.content();
            let $ = await cheerio.load(body);
            const data = $("table").find('tbody > tr[align="center"]').toArray().map(ele => $(ele).find('td').toArray().map(ele2 => $(ele2).text()));
            for(var x = 1; x < data.length; x++){
                if(data[x][15].includes(field_name[i]) || data[x][15].includes("通識")){
                    await Course.findOneAndUpdate({semester: semester[sem], course_id: data[x][0]}, {
                        $push: {general: i}
                    })
                }
            }
            for(var y = i + 1; y <= 8; y++){
                await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=111-2&cstype=8&csname=A${i}${y}&alltime=yes&allproced=yes&allsel=yes&page_cnt=150&Submit22=%E6%9F%A5%E8%A9%A2`);
                let body2 = await page.content();
                let $$ = await cheerio.load(body2);
                const data2 = $$("table").find('tbody > tr[align="center"]').toArray().map(ele => $$(ele).find('td').toArray().map(ele2 => $(ele2).text()));
                for(var x = 1; x < data2.length; x++){
                    if(data2[x][15].includes(field_name[i]) || data2[x][15].includes("通識")){
                        await Course.findOneAndUpdate({semester: semester[sem], course_id: data2[x][0]}, {
                            $push: {general: y}
                        })
                    }
                }
            }
            console.log(`A${i} loaded complete`)
        }
    }    
    await browser.close();
}

export { dataInit, dataInitWithCrawler };