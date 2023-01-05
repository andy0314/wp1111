import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { blue } from '@ant-design/colors'
import { useEffect, useState } from 'react'
import styled from 'styled-components';

import SearchPage from './containers/SearchPage';
import CourseTable from './containers/CourseTable';
import CourseList from './containers/CourseList';
import SideBar from './containers/SideBar';
import SearchBar from './containers/SearchBar';
import SignIn from './containers/SignIn'
import CourseInfo from './containers/CourseInfo'

import { useData } from './containers/hooks/useContext';

const { Header, Sider, Content } = Layout;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
`

const SideBarWrapper = styled(Sider)`
  height: 100vh;
`

function App() {
  const { sideBarCollapse, displayStatus, status, signIn, save, setSave, myCourse, setSortCourse } = useData();
  let location = useLocation()
  const [fromList, setFromList] = useState(false)
  useEffect(() => {
    if(location.pathname === '/courselist'){
      setFromList(true)
    }
    if(fromList && !save){
      setSortCourse(myCourse)
      setFromList(false)
      setSave(false)
    }
   
  }, [location])
  useEffect(() => {
    displayStatus(status)
  }, [status])

  return (
    <AppWrapper>
      <Layout>

          <SideBarWrapper collapsed={sideBarCollapse}>
            <SideBar />
          </SideBarWrapper>

        <Layout>
          <Header style={{height: '120px', background: blue[2], position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',}}>
            <SearchBar />
          </Header>

          <Content style={{height: 'calc(100% - 120px)', position: 'fixed', top: "120px", width:'100%', overflow: "scroll"}}>
            <Routes>
            <Route path='/' element={signIn ? (<SearchPage />) : (<SignIn />)} />
              <Route path='/coursedetail/:courseyear/:courseid' element={signIn ? (<CourseInfo />) : (<SignIn />)} />
              <Route path='/coursetable' element={signIn ? (<CourseTable />) : (<SignIn />)} />
              <Route path='/courselist' element={signIn ? (<CourseList />) : (<SignIn />)}/>
              <Route path='*' element={<h1>ERROR</h1>} />
            </Routes>
          </Content>
        </Layout>

      </Layout>
    </AppWrapper>
  );
}

export default App;
