
import Nav from '../../comps/Nav/Nav';
import banzhuan from '../../img/banzhuan.jpg';
import {Image,Typography,Divider,List,Menu,Layout} from 'antd';
import DPlayer from 'react-dplayer';
import { Breadcrumb } from 'antd';
import React, { useState } from "react";


function VideoComp() {

    const { SubMenu } = Menu;
    const {Title} = Typography;
    const { Header, Sider, Content,Footer } = Layout;
    //Title List
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    const mystyle = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
        width:"65%"
      };

    

    return (

            <div>
                
                <Layout>
                    <Sider  width={200} className="site-layout-background" style={{float: 'right'}}>
                <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0}}>
                        <SubMenu key="sub1" title="Sub">
                            <Menu.Item key="1">Developing</Menu.Item>
                            <Menu.Item key="2">Developing</Menu.Item>
                            <Menu.Item key="3">Developing</Menu.Item>
                            <Menu.Item key="4">Developing</Menu.Item>
                        </SubMenu>
                  </Menu>              
                    </Sider>
               
                <Content>
                <Title level={2} style={{padding:"50px"}}>Video Title </Title>
                <div style={mystyle}>
                    <DPlayer 
                    options={{
                        video:{url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'}  
                    }}
                    />
                 </div>
                </Content>
                </Layout>

    
            {/*<List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item =>
                 <List.Item style={{background:color,color:textColor}} actions={onclick=(() => 
                 {setColor("grey");setTextColor('black')})}>
                     {item}
                     
                </List.Item>}
                 />*/}
           
               
                </div>
                

                    
            
            
        

            
        
    )
}

export default VideoComp
