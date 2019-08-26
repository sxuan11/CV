import React, { Component } from 'react'
import { Layout, Menu,BackTop,Avatar,  } from 'antd';
import {
    BrowserRouter as 
    Router,
    Link
} from 'react-router-dom';

import Time from './../components/Time/Time'
import Location from './../components/Location/Location'

import './index.css'
export class index extends Component {

    constructor(props){
        super(props)
        
        this.state={
            pathNameSelect: window.location.pathname === '/' ? '/cv' : window.location.pathname
        }
    }

    render() {
        const { Header, Content, Footer } = Layout;
        console.log(this.state.pathNameSelect);
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
                        defaultSelectedKeys={[this.state.pathNameSelect]}   
                    >
                            <Menu.Item key='/cv'>
                                <Link to='cv'>简历</Link>
                            </Menu.Item>
                            <Menu.Item key='/home'>
                                <Link to='home'>介绍</Link>
                            </Menu.Item>
                            <Menu.Item key='/text'>
                                <Link to='text'>文章</Link>
                            </Menu.Item>
                            <Menu.Item key='/tools'>
                                <Link to='tools'>小功能</Link>
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
                            }}>
                                <Time/>
                                <Location/>
                            </div>
                        </div>
                    </Header>    
                    <Content style={{ 
                        padding: '0 15px',
                        margin: '82px 0',
                        }}>
                    <div style={{ background: '#fff', minHeight: 280, }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ 
                        textAlign: 'center',
                        position:'relative',
                        }}>Ant Design ©2019 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}

export default index
