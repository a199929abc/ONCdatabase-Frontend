
import Nav from '../../comps/Nav/Nav';
import banzhuan from '../../img/banzhuan.jpg';
import {Image,Typography,Divider,List,Menu,Layout, Button} from 'antd';
import ReactPlayer from 'react-player'
import { Breadcrumb } from 'antd';
import React, { useState,useEffect } from "react";
import { ScreenShareTwoTone } from '@material-ui/icons';


function VideoComp() {
    const [curURL, setCurURL]  =useState("https://mvbkz.s3.us-west-1.amazonaws.com/csdn/day1/35.+Search+Insert+Position.mp4");
    const [curTitle,setTitle]  = useState("162. Find Peak Element（基础）");
    const [curDate, setDate] = useState(1);
    const { SubMenu } = Menu;
    const {Title} = Typography;
    const { Header, Content,Footer,Sider } = Layout;
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    const [playbackRate, setPlaybackRate] = React.useState(1)

    // submenu keys of first level
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
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


    
    
      
    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    
    
    
    return (
            <div>
                <Layout >
                 <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" 
                    openKeys={openKeys} 
                    onOpenChange={onOpenChange} 
                    style={{ width: 200 ,height:'100%' }}>
                    <SubMenu key="sub1"  title="Navigation One">
                        <Menu.Item key="1" onClick={e => setCurURL("https://mvbkz.s3.us-west-1.amazonaws.com/csdn/day1/349.+Intersection+of+Two+Arrays%EF%BC%88%E5%9F%BA%E7%A1%80%EF%BC%89.mp4",
                        setTitle("167. Two Sum II - Input array is sorted（基础）")
                        )}>Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2"  title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                    </Menu> 
                    </Sider>
                          
                  
                <Content  style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                                    }}>
                <Title level={3} style={{padding:"10px"}}>{curTitle}</Title>
                <ReactPlayer
                            url={curURL}
                            controls = 'true'
                            playing = 'true'
                            playbackRate={playbackRate}
                            config={{
                               
                            }}
                        />

                            <Button onClick={() => setPlaybackRate(0.5)} 
                            type="primary" shape="round"  size="small">x0.5</Button>
                            <Button onClick={() => setPlaybackRate(1)} 
                            type="primary" shape="round"  size="small">x1</Button>
                            <Button onClick={() => setPlaybackRate(2)} 
                            type="primary" shape="round"  size="small">x2</Button>
                
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
