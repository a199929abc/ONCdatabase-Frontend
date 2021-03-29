import 'antd/dist/antd.css';
import leg from '../../img/fish.png';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';
import { Input, Space, Row, Col, Typography, Checkbox,Descriptions,Badge ,Image} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import { colors } from '@material-ui/core';
import notFind from '../../img/cannotfind.png';
import { CenterFocusStrong } from '@material-ui/icons';


function SearchComp() {
    
    const { Title } = Typography;
    const { Search } = Input;
    const [checkBoxFlag, setCheckBoxFlag] = useState("C");
    const [searchValue, setSearchValue] = useState("");
    const [part, setPart]= useState([]);
    


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
            status: checkBoxFlag
        }
        SendPartRequest(partJSON);
    };
    const SendPartRequest = async (partJSON) => {
        console.log(partJSON);
        var res = await axios({
            method: 'POST',
            url: 'http://142.104.17.106:8011/nav/search',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            data: JSON.stringify(partJSON)
        }).then(Response => { {return Response.data.data}});
        console.log(res);
        setPart(res);
        
    }

    const currentStatus = () => {
        console.log(part.status);
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
                    <Col span={24}>
                        <Checkbox value="Current">Current</Checkbox>
                        <Checkbox value="Suspend">Suspend</Checkbox>
                        <Checkbox value="Closed">Closed</Checkbox>
                    </Col>
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
                {part.jsonbom&&part.jsonbom.map(item => 
                    (<li >{item.rev}</li>)
                )}
                
                <br />
                Quantity : 
                <br />
                nfgName :
                <br />
                VendorPartNo :
                <br />
                
                </Descriptions.Item> 
            </Descriptions>
        ):(<><Title level={3}>Sorry, Can't find your part . . .    </Title>
        <Image width={200} src={notFind}/></>
            )}
          
        </Fragment>


    )
}

export default SearchComp
