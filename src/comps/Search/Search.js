import 'antd/dist/antd.css';
import leg from '../../img/fish.png';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';
import { Input, Space, Row, Col, Typography, Checkbox,Descriptions,Badge ,Image,Button
,Cascader,Alert} from 'antd';
import { Table } from "ant-table-extensions";
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import { colors } from '@material-ui/core';
import notFind from '../../img/cannotfind.png';
import { CenterFocusStrong } from '@material-ui/icons';
import { loadProgressBar } from  'axios-progress-bar';


function SearchComp() {
    
    const { Title } = Typography;
    const { Search } = Input;
    const [checkBoxFlag, setCheckBoxFlag] = useState("C");
    const [searchValue, setSearchValue] = useState("");
    const [part, setPart]= useState([]);
    const [rev, setRev]  =useState("");
    const [error, setError]=useState("OK");
    const [errorCode, setErrorCode]=useState("");
    const [revList, setRevList]  = useState([]);


    const onChange = checkedValues => {
        console.log('checked = ', checkedValues);
        if(checkedValues[0]=="Closed"){
            setCheckBoxFlag("X");
            console.log('checked = Closed');
        }else if(checkedValues[0]=="Suspend"){
            console.log('checked = Suspend');
            setCheckBoxFlag("S");
        }else{
            console.log('checked = current');
            setCheckBoxFlag("C");
        }
      }

    const onSearch = value => {
        setSearchValue(value);
        console.log("Sending....flag is:"+checkBoxFlag);
        const partJSON = {
            partno: value,
            status: checkBoxFlag,
            rev: rev
        }
        
        SendPartRequest(partJSON);
    };
    const SendPartRequest = async (partJSON) => {
        console.log(partJSON);
        var res = await axios({
            method: 'POST',
            url: 'http://192.168.0.35:8011/nav/search',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            data: JSON.stringify(partJSON)
        }).then(Response => { {return Response}});
        console.log(res);
        setPart(res.data.data);
        setError(res.data.msg);
        console.log(res.data.msg);
        if(res.data.msg=="Part is not unique. Please specify Revision"){
            setRevList(res.data.data);
        }
        
        
    }

    const currentStatus = () => {
        switch(part.status) {
            
          case "C":   return <Badge status="processing" text="Current in use" />;
          case "X":   return <Badge status="error" text="Closed" />;
          case "S":   return <Badge status="warning" text= "Suspend"/>;
          default:    return <Badge status="default" text="Default" />;
        }
      };

    const isReturned = () => {
        return part != null;
    }



    const columns = [{
     
        title: 'BOMPartNo',
        dataIndex: 'bommfgpartno',
      }
      ,{title :'BOMPartName',
        dataIndex:'instructions'},
        {title :'mfgPartNo',
        dataIndex:'mfgpartno'},  
        {title :'mfgPartName',
        dataIndex:'bommfgname'},
        {
        title: 'Rev',
        dataIndex: 'rev',
      },{
        title: 'BOMRev',
        dataIndex: 'bomrev',
      },{
        title: 'Quantity',
        dataIndex: 'qty',
      }];

      const revColumns = [
          {title: 'Revision',
          dataIndex: 'rev',
          render: text => <a href="#">{text}</a>,},
          {title: 'Rev Created Date',
          dataIndex: 'revcreated',
         }]
      
      const isUnique=()=>{
          
        return error == "Part is not unique. Please specify Revision";
      }
      useEffect(() => {
        
  
     }, []);
     

    return (
        <Fragment>
            <Row>
                <Col flex={2}>
                   
                    <Title level={2} type="secondary">Part Search </Title>
                </Col>
                <Col flex={3}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />     
                </Col>
                <Checkbox.Group  onChange={onChange} style={{ width: '100%' }} defaultValue={['Current']}>
                    <Col span={10}>
                        <Checkbox value="Current">Current</Checkbox>
                        <Checkbox value="Suspend">Superseded</Checkbox>
                        <Checkbox value="Closed">Closed</Checkbox>
                    </Col>
                    <br/>
                    <Col span={3} ><Input placeholder="Revision" onChange={e => setRev(e.target.value)}/></Col>
                    <br/>
                    {isUnique()?(<Col span={10}>
                        <Alert message={error} type="error" showIcon/>
                        <Table
                        columns={revColumns}
                        dataSource={revList}

                        />
                        </Col>):(<></>)}
                    <br/>
                </Checkbox.Group>
             {/*    <div>
                    {<li>{part.rev}</li>}
                </div> */}
            </Row>
            <br /><br /><br /><br />
        {isReturned() ? (<Descriptions title="Part Result " layout="vertical" bordered >
                <Descriptions.Item label="Part Number" >{part.partno}</Descriptions.Item>
                <Descriptions.Item label="Description">{part.description}</Descriptions.Item>
                <Descriptions.Item label="Revision">{part.rev}</Descriptions.Item>
            {/*     <Descriptions.Item label="Usage Time" span={2}>
                2019-04-24 18:00:00
                </Descriptions.Item> */}
                <Descriptions.Item label="Status" span={2}>
                {currentStatus()}                   
                </Descriptions.Item> 
                <Descriptions.Item label="mfgName" >{part.mfgName}</Descriptions.Item>
            
{/*             <Descriptions.Item label="BOMPPartNo">{}</Descriptions.Item>
                <Descriptions.Item label="Description" span={2}>{}</Descriptions.Item>
                <Descriptions.Item label="Quantity">{}</Descriptions.Item>
               
                <Descriptions.Item label="VendorPartNo">{}</Descriptions.Item> */}

                <Descriptions.Item label="Bill of Materials" span={3} >
                <Table
                columns={columns}
                dataSource={part.jsonbom}
                exportable
                exportableProps={{ showColumnPicker: true }}
                searchableProps={{ fuzzySearch: true }}
                

                />

                </Descriptions.Item> 
            </Descriptions>
        ):(<><Title level={3}>Sorry, Can't find your part . . .    </Title>
        <Image width={200} src={notFind}/></>
            )}
          
        </Fragment>


    )
}

export default SearchComp
