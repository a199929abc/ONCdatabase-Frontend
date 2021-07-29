
import Nav from '../../comps/Nav/Nav';
import axios from 'axios';

import banzhuan from '../../img/banzhuan.jpg';
import {Image,Typography,Divider,List,Menu,Layout, Button,Radio,Cascader} from 'antd';
import ReactPlayer from 'react-player'
import { Breadcrumb } from 'antd';
import React, { useState,useEffect } from "react";
import { ScreenShareTwoTone } from '@material-ui/icons';


function VideoComp() {
    const [curURL, setCurURL]  =useState("https://mvbkz.s3.us-west-1.amazonaws.com/csdn/day1/35.+Search+Insert+Position.mp4");
    const [curTitle,setTitle]  = useState("");
    const [video, setVideo]= useState([]);
    const [curDay,setCurDay] = useState(1);
    const { SubMenu } = Menu;
    const {Title} = Typography;
    const { Header, Content,Footer,Sider } = Layout;
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    const [playbackRate, setPlaybackRate] = React.useState(1);
    const [speed, setSpeed]= useState("default");

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
    const handleSpeedChange = e =>{
        setSpeed(e.target.value);
    }

    const VideoRequest = async (videoJSON) => {
        console.log(videoJSON);
        var res = await axios({
            method: 'POST',
            url: 'http://142.104.17.117:8011/nav/video',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            data: JSON.stringify(videoJSON)
        }).then(Response => { {return Response}});
        console.log(res);    
        setVideo(res.data.data); 
    }
    const sendVideoRequest = value => {
       
        const videoJSON = {
           day: parseInt(curDay),
        }
        VideoRequest(videoJSON);
        
    }
    const recursion  = dataSource => {
        return (
          dataSource.map((menu, index) => {
            if (menu.children) {
              return (
                <SubMenu key={menu.key} title={menu.title}>
                  {recursion(menu.children)}
                </SubMenu>
              )
            } else {
              return (<Menu.Item key={video[index].videoId}  onClick={e =>{
               setCurURL(menu.url);setTitle(menu.title);}}  >{menu.title} </Menu.Item>)
            }
          })
        )
      }
      //onClick={e => setCurURL(video[index].url),
        //setTitle(video[index].title)} 
        const options = [
            {
              value: 1,label: 1,},{value: 2, label: 2,},{value: 3,label: 3,},{value: 4,label: 4,},{value: 5,label: 5,},{value: 6,label: 6,},
            {value: 7,label: 7,},{value: 8,label: 8,},{value: 9,label: 9,},{value: 10,label: 10,},]; 
        const changeSelectDay = value => {
            setCurDay(value);
        }
    
    return (
            <div>
                <Layout >
                 <Sider width={270} className="site-layout-background">
                    <Menu mode="inline" 
                    openKeys={openKeys} 
                    onOpenChange={onOpenChange} 
                    style={{ width: 270 ,height:'100%' }}>
                    <SubMenu  key="sub1"  title={"  Day : "+curDay}>

                        {recursion(video)}
                        
                    </SubMenu>
                    
                    </Menu> 
                    </Sider>
                          
                  
                <Content  style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                                    }}>
                <Cascader size="large" options={options} placeholder="Select Date" onChange={changeSelectDay} />
                {' '}{' '}{' '}{' '}{' '}
                <Button onClick={sendVideoRequest} size={'large'}>Loading Video</Button>
                <Title level={3} style={{padding:"10px"}}>{curTitle}</Title>
                <ReactPlayer
                            url={curURL}
                            controls = 'true'
                            playing = 'true'
                            playbackRate={playbackRate}
                            config={{
                               
                            }}
                        />
                    
                    <Radio.Group value={speed} onChange={handleSpeedChange}>
                            <Radio.Button  onClick={() => setPlaybackRate(0.5)} value="large"> x0.5 </Radio.Button>
                            <Radio.Button  onClick={() => setPlaybackRate(1)}  value="default"> x1 </Radio.Button>
                            <Radio.Button  onClick={() => setPlaybackRate(2)}  value="small"> x2 </Radio.Button>
                    </Radio.Group>
                
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
