import React, { Component } from 'react'
import { Layout, Menu,BackTop,Avatar,  } from 'antd';
import {
    BrowserRouter as 
    Router,
    Link
} from 'react-router-dom';

import Util from './../util/index'
import {get_ip} from './../api/api'


import './index.css'
export class index extends Component {

    
    constructor(props){
        super(props)
        this.state={
            location:'广东省广州市'
        }
      }


      componentWillMount(){
          this.setState({
              userName:''
          })
          setInterval(()=>{
              let sysTime = Util.formateDate(new Date().getTime());
              this.setState({
                  sysTime
              })
          },1000);
          get_ip()
      }
    
    render() {
        const { Header, Content, Footer } = Layout;
        
        
        return (
            <Router>
                 <BackTop />

                 <Layout className="layout">
                    <Header style={{marginBottom:'94px'}}>
                    {/* <div className="logo" /> */}
                    <Menu
                        className='menu'
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}  
                        
                    >
                            <Menu.Item key='1'>
                                <Link to='cv'>简历</Link>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <Link to='home'>介绍</Link>
                            </Menu.Item>
                            <Menu.Item key='3'>
                                <Link to='text'>文章</Link>
                            </Menu.Item>
                    </Menu>
                        <div>
                            <Avatar size={84} icon="user" style={{ 
                                position:'absolute',
                                left:'50%',marginLeft:'-42px',
                                marginTop:'42px'
                                }} alt='sxuan' />
                            <div 
                            style={{ 
                                position:'absolute',
                                right:'5%'
                            }}><sapn>当前时间:{this.state.sysTime}</sapn>
                            <p>当前城市:{this.state.location}</p></div>
                        </div>
                    </Header>
                    
                    <Content style={{ 
                        padding: '0 15px',
                        margin: '82px 0',
                        }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280, }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ 
                        textAlign: 'center',
                        position:'relative',
                        }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}

export default index
