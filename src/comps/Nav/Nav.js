import { Input, Space,Row, Col,Typography,Layout, Menu,Breadcrumb,Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
   LaptopOutlined, NotificationOutlined
  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import leg from '../../img/fish.png';
import React, {useState,useEffect, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import More from '../../pages/More/More';
import Main from '../../pages/Main/Main';
import SearchComp from '../Search/Search';
import VideoComp from '../Video/Video';
import {BrowserRouter as Router,Switch, Route ,Link,NavLink} from 'react-router-dom';
import VideoManageComp from '../Video/VideoManage';

function Nav() {
    const { Search2 } = Input;
    const { Title } = Typography;
    const { Header, Sider, Content,Footer } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed]= useState(false);

 

    
    return (
     
    <Fragment>
         <Router>
        <Layout>
            <Header className="header" >
            <Avatar style={{ float: 'right', margin:20 }} src={leg} />
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
     
                <Menu.Item key="1"><Link to="/nav" >Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/nav/search">Part Search</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/nav/video">Video</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/nav/videomanager">Video Manager</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/nav/more">More</Link></Menu.Item>
                
        
            </Menu>
            </Header>

            <Layout>

           {/*          
                           <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Sub">
                        <Menu.Item key="1">Developing</Menu.Item>
                        <Menu.Item key="2">Developing</Menu.Item>
                        <Menu.Item key="3">Developing</Menu.Item>
                        <Menu.Item key="4">Developing</Menu.Item>
                    </SubMenu>
           <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu> */}
{/*                     <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu> 
                                    </Menu>
            </Sider>*/}

            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '10px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Search</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                                <Switch>
                               {/*  <Route path="/nav/main"   component={Main}/> */}
                                <Route path="/nav/more"   component={More}/>
                                <Route path="/nav/search" component={SearchComp}/>
                                <Route path="/nav/video" component={VideoComp}/>
                                <Route path="/nav/videomanager" component={VideoManageComp}/>
                                </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Design ©2021 Created by Kaiheng Zhang</Footer>

            </Layout>



            </Layout>
        </Layout>
        </Router>
    </Fragment>   
     
     
     
     
              
  
      
    
       
    );
}


export default Nav