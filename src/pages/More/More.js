import React from 'react'
import Nav from '../../comps/Nav/Nav';
import banzhuan from '../../img/banzhuan.jpg';
import {Image,Typography} from 'antd';
function More() {
    const {Title} = Typography;
    return (
        <div>
            <Title level={2}>under construction</Title>
            <Image width={400} src={banzhuan}/>
        </div>
    )
}

export default More
