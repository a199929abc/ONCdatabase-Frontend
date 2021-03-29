import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../comps/Nav/Nav';
import banzhuan from '../../img/banzhuan.jpg';
import {Image} from 'antd';
function Main() {
    return (
        <div>
       main page
       <Image width={200} src={banzhuan}/>
         
        </div>
    )
}

export default Main
