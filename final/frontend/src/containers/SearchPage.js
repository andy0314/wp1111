import styled from "styled-components";
import { Typography, Table, Space, Button } from 'antd'
import { useFilter } from './hooks/useFilter'
import { useData } from './hooks/useContext'
import { useNavigate } from 'react-router-dom';
import api from "../api"
const { Text } = Typography
const Wrapper = styled.div`
    width: 95%;
    height: 90%;
    padding: 10px;
`
const OutWrapper = styled.div`
    width: 98%;
    margin: 0 auto;
`
const RowStyle = { 
    minWidth: '100%', 
    minHeight: '6em',
    // borderWidth: '2px',
    // borderStyle: 'solid',
    // borderRadius: '6px',
}

const SearchPage = () => {
    const { searchResult, searching } = useFilter()
    const { setHold, myCourse, setMyCourse, sortCourse, setSortCourse, me, displayStatus, setOutline } = useData()
    let navigate = useNavigate()
    const handleAdd = async (e) => {
      if(me === ''){
        displayStatus({
          type: 'error',
          msg: 'Please log in first'
        })
        return;
      }
      const found = myCourse.find(element => element._id === e._id)
      if(!found){
        const toadd = {
          _id: e._id,
          semester: e.semester,
          course_id: e.course_id,
          course_name: e.course_name,
          teacher: e.teacher,
          time_for_filter: e.time_for_filter,
          time_place: e.time_place,
        }
        const { data: { messages, data } } = await api.post('/course/addcourse',{
          name: me,
          courseid: e._id,
        });
  console.log("handleAdd/messages: ", messages)
        const nSortC = [...sortCourse, toadd]
        setMyCourse(nSortC);
        setSortCourse(nSortC);
      }

    }
    const handleJump = async (semester, id) => {
      const { data: { messages, data }} = await api.get('/search/searchcourse', {
        params: {
             semester: semester,
             id: id,
        },
      })
      setHold(data.course);
      setOutline(data.data_crawler);
      navigate('/coursedetail/' + semester + '/' + id)
    }
    const columns = [
      {
        title: '流水號',
        dataIndex: 'course_id',
        key: 'course_id',
        width: '10%',
        render: (text) => (text === '00000' ? <></> : <Text strong>{text}</Text>),
      },
      {
        title: '課程名稱',
        dataIndex: 'course_name',
        width: '30%',
        render: (_, record) => (
          <Space size="large">
            <Button type='link' onClick={() => handleJump(record.semester, record.course_id)}>{record.course_name}</Button>
          </Space>
        //(text) => <Text>{text}</Text>,
        )
      },
      {
        title: '教師',
        dataIndex: 'teacher',
        key: 'teacher',
        width: '10%',
        render: (text) => <Text>{text}</Text>,
      },
      {
        title: '時間與地點',
        dataIndex: 'time_place',
        key: 'time_place',
        width: '40%',
        render: (text) => <Text>{text}</Text>,
      },
      {
          title: 'Add',
          key: 'add',
          width: '10%',
          render: (_, record) => (
              <Space size="large">
                { (record.semester !== '111-2' || record.course_id === '00000') ? <></> : <Button onClick={() => handleAdd(record)}>add</Button>}
              </Space>
        )},
    ];

    return (
        <Wrapper>
            <Table columns={columns} loading={searching} dataSource={searchResult.data} />
        </Wrapper>
           
        // <OutWrapper>
        // <Wrapper>
        //     <Row style={RowStyle}>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //         <Col span={8} style={ColStyle} >10001</Col>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //         <Col span={9} style={ColStyle} >10001</Col>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //     </Row>
        // </Wrapper>
        // </OutWrapper>
    )
}

export default SearchPage;