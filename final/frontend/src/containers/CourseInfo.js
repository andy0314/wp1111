import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd'
import { blue } from '@ant-design/colors'
import { useData } from './hooks/useContext'
import api from "../api"
const { Text, Title } = Typography

const SgridStyle = {
     textAlign: 'center',
     alignContent:'center',
     width: '10%',
     fontSize: '20px',
     padding: '10px',
     backgroundColor: blue[0],
}
const LgridStyle = {
     textAlign: 'center',
     alignContent:'center',
     width: '90%',
     fontSize: '20px',
     paddingTop: '2px',
     paddingBottom: '2px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-around',
}
const textStyle = {
     fontSize: '24px',
}
const titleStyle = {
     marginBottom: '0',
     alignSelf: 'center',
}
const CourseInfo = () => {
     let {courseid, courseyear} = useParams()
     const { hold, setHold, outline, setOutline } = useData()
     const getCourse = async () =>{
          const { data: { messages, data }} = await api.get('/search/searchcourse', {
               params: {
                    semester: courseyear,
                    id: courseid,
               },
          })
          console.log(data.course);
          setHold(data.course);
          setOutline(data.data_crawler);
     }

     return ( 
          <div style={{margin: 'auto',width: '85%', position: 'relative', left: '-35px',}} >{!hold ? <button onClick={getCourse}> getCourse </button> : (
               <div style={{padding: '20px', display: 'flex', flexDirection: 'column', width: '100%',
               alignContent:'center',}}>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>課名</Text>
                         </Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.semester} {hold.course_name}</Title>
                         </Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>教師</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.teacher}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>流水號 <p></p> 課號 <p></p> 課程識別碼</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>
                              {hold.course_id}<p></p>{hold.course_code}<p></p>{hold.course_id_}
                              </Title>
                         </Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>授課對象</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.department && hold.department.filter(e => e.length > 1).join('、')}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>班次</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.class_id}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>時間地點</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.time_place}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}> 課程種類 <p></p> 學分 <p></p> 人數 <p></p> 加簽方式 </Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.course_type} <p></p> {hold.credit}學分 <p></p> {hold.max_student} <p></p> {hold.method === 0 ? '' : hold.method} </Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>備註</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.note}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>其他資訊</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>
                                   {hold.field === '' ? '' : `領域專長：${hold.field}`}{hold.field === '' ? <></> : <p></p>}
                                   {hold.half_year === true ? '半年' : '全年'}課程<p></p>
                                   修課限制：{hold.limit} 
                              </Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}> 課程大綱 </Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>
                                   {outline === null || outline.ACCT.join('') === '' ? '查無大綱資料' : ''}
                                   {outline === null || outline.ACCT[0] === ' ' ? <></> : <>課程概述：{outline.ACCT[0]}<p></p></>}
                                   {outline === null || outline.ACCT[1] === ' ' ? <></> : <>課程目標：{outline.ACCT[1]}<p></p></>} 
                                   {outline === null || outline.ACCT[2] === ' ' ? <></> : <>課程要求：{outline.ACCT[2]}<p></p></>} 
                                   {outline === null || outline.ACCT[3] === ' ' ? <></> : <>預期每週課後學習時數：{outline.ACCT[3]}<p></p></>} 
                                   {outline === null || outline.ACCT[4] === ' ' ? <></> : <>Office Hours：{outline.ACCT[4]}<p></p></>} 
                                   {outline === null || outline.ACCT[5] === ' ' ? <></> : <>參考書目：{outline.ACCT[5]}<p></p></>} 
                                   {outline === null || outline.ACCT[6] === ' ' || outline.ACCT[6] === '' ? <></> : <>指定閱讀：{outline.ACCT[6]}<p></p></>} 
                              </Title>
                         </Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}> 評量方式 </Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>
                                   {outline === null || outline.score.length === 0 ? '查無評量方式資料' : outline.score.map((e) => {
                                        return (
                                             <>{e.description} {e.percent}<p></p></>
                                        )
                                   })}
                              </Title>
                         </Card.Grid>
                    </Card>
               </div>
          )}

          
          
          </div>
     )
}
export default CourseInfo