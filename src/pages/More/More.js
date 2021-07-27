import React from 'react'
import Nav from '../../comps/Nav/Nav';
import banzhuan from '../../img/banzhuan.jpg';
import {Image,Typography} from 'antd';
import DPlayer from 'react-dplayer';
function More() {
    const {Title} = Typography;
    

    return (
        
        <div>
            <div style={{ width: '70%' }}>

            <DPlayer 
             
             options={{
                 video:{url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'}
                 
             }}
             />
            </div>
             
            <Title level={2}>under construction</Title>
            <Image width={400} src={banzhuan}/>
            <dp/>
            
        </div>
    )
}

export default More
