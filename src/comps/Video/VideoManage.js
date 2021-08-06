import 'antd/dist/antd.css';
import leg from '../../img/fish.png';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';
import { Input, Space, Row, Col, Typography, Checkbox,Descriptions,Badge,Tooltip ,Image,Button
,Cascader,Alert} from 'antd';
import { Table } from "ant-table-extensions";
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import { colors } from '@material-ui/core';
import notFind from '../../img/cannotfind.png';
import { CenterFocusStrong } from '@material-ui/icons';
import { loadProgressBar } from  'axios-progress-bar';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

function VideoManageComp() {
    const { Title } = Typography;
    const { Search } = Input;

    

    return (
        <Fragment>
        <Row>
            <Col flex={2}>
               
                <Title level={2} type="secondary">Inserting Video </Title>
            </Col>
            <Col flex={3}>
                <Search
                    placeholder="Enter video url"
                    allowClear
                    enterButton="Insert"
                    size="large"
                    style={{ width: 500 }} 
                   
                />  
               <br />
               <br />
               <Input
      placeholder="Video name"
     
      suffix={
        <Tooltip title="Name of the video, can be any character">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      style={{ width: 200 }} 

    />

    <Input
      placeholder="Tag"
     
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      style={{ width: 200 }} 

    />
                   <br />
               <br />
    
               <Input
      placeholder="Day"
     
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      style={{ width: 200 }} 

    />
            </Col>          
        



        </Row>
</Fragment>
    )

}

export default VideoManageComp
