import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Button, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, TableOutlined, OrderedListOutlined, CommentOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
import { useData } from './hooks/useContext';


function getItem(label, key, icon, children, type){
    return{
        label,
        key,
        icon,
        children,
        type
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: ${blue[0]};
    overflow: auto;
`

const ButtonWrapper = styled.div`
    height: 50px;
    width: 100%;
    background: ${blue[0]};
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    height: 100%;
    width: 100%;
    background: ${blue[0]};
`

const SideBar = () => {
    const navigate = useNavigate();

    const { sideBarCollapse, setSideBarCollapse, openedCourses, me } = useData();

    const items = [
        getItem('搜尋課程', '/', <SearchOutlined />),
        getItem('已選課表', '/coursetable', <TableOutlined />),
        getItem('選課志願序', '/courselist', <OrderedListOutlined />),
    ]

    const changeCollapse = () => {
        setSideBarCollapse(!sideBarCollapse);
    }

    return (
        <Wrapper>
            <ButtonWrapper>
                <StyledButton onClick={changeCollapse}>
                    {sideBarCollapse? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </StyledButton>
            </ButtonWrapper>
            <Menu
                onClick={(e) => navigate(e.key)}
                style={{height: "calc(100% - 100px)", width: "100%", background: blue[0]}}
                items={items}
                mode='inline'
            />
            <ButtonWrapper>
                {me === '' ? '' : `Hello ${me}`}
            </ButtonWrapper>
        </Wrapper>
    )
}

export default SideBar;