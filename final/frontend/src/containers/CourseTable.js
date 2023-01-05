
import {  Card } from "antd";
import { useData } from './hooks/useContext'
import api from "../api"

// var table = [{num:"10001", time:[0, 2, 3, 4]}, {num:"10002", time:[2, 3, 4]}, {num:"10007", time:[16, 17, 18]} ]



const tableStyle = {
    width: '98%',
    height: '90%',
    padding: '15px',
    textAlign: 'center',
    overflow: 'scroll', 
    padding: '50px',
    position: 'fixed',
    top: '80px',
  };
const gridStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '12.5%',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
};
const spaceStyle = {
    minHeight: '60px',
}
const pStyle = {
    margin: '0.2em',
    padding: '5px',
}
const intvltime = ["", "7:10-8:00", "8:10-9:00", "9:10-10:00", "10:20-11:10", "11:20-12:10", "12:20-13:10", "13:20-14:10", "14:20-15:10",
"15:30-16:20", "16:30-17:20", "17:30-18:20", "18:25-19:15", "19:20-20:10", "20:15-21:05", "21:10-22:00"]
const weekDays = ["", "一", "二", "三", "四", "五", "六", "日"]
const intervals = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B", "C", "D"]

const hanbleTopass = (to) => {
    let topass = []
    weekDays.map((days, key)=> {
        topass[key] = []
        intervals.map((itvl, kkey) =>  topass[key].push([]))
       
    })
    if(to){
        to.map((crs, key) => {
            if(crs){
                crs.time_for_filter.map((koma, kkey) => {
                    let i = Math.floor(koma / 15)
                    let j = koma % 15
                    topass[i+1][j+1].push(crs)
                })            
            }
    
        })
    }

    return topass;
}
const CourseTable = () => {
    const {
        myCourse
    } = useData()


    const to = hanbleTopass(myCourse)
        return (
            <div className="tableContainer" style={tableStyle}>
            {intervals.map((intv, key) => {
                if(intv === -1){
                    return (
                        <Card bodyStyle={spaceStyle}>
                            {weekDays.map((day, ikey)=>{                                
                                return (
                                    <Card.Grid style={gridStyle}>{day}</Card.Grid>
                                )
                            })}
                        </Card>
                    )
                }
                else return (
                    <Card bodyStyle={spaceStyle}>
                        {weekDays.map((day, ikey)=>{
                            if(ikey === 0)
                                return (
                                    <Card.Grid style={gridStyle}>
                                        <p style={pStyle}>{intv}</p>
                                        <p style={pStyle}>{intvltime[key]}</p>
                                    </Card.Grid>
                                )
                            else if(to[ikey][key].length !== 0){
                                return (
                                    <Card.Grid style={gridStyle}>
                                        <p style={pStyle}>{to[ikey][key][0].course_name}</p>
                                        <p style={pStyle}>{to[ikey][key][0].teacher}</p><p style={pStyle}> {to[ikey][key][0].time_place}</p>  
                                    </Card.Grid>
                                )
                            }
                            else return (
                                <Card.Grid style={gridStyle}></Card.Grid>
                            )
                        })}
                    </Card>
                )

            })}
            </div>
            
        )

}

export default CourseTable;