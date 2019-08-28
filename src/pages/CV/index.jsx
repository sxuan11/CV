import React, { Component } from 'react'
import { Row, Col ,Card} from 'antd';
import Download from './../../components/Download/index'

import './index.css'

export class index extends Component {
    render() {
        return (
            <div style={{padding: 24}}>
                <div>
                <Card 
                id='connect'
                title="联系方式" 
                bordered={false} 
                hoverable={true} 
                style={{  }}>
                    <Row type="flex" justify="space-around" className="bg" >
                        <Col xs={24} sm={24} md={6} lg={6} className="bj">● 手机:+86 17688465500</Col>
                        <Col xs={24} sm={24} md={12} lg={12} className="bj">● E-mail:
                        <a href="mailto:609311490@qq.com?">609311490@qq.com</a>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} className="bj">● 网站:<a target='blank' href='http://sxuan.club'>http://sxuan.club</a></Col>
                    </Row>
                </Card>
                <Card 
                title="个人信息" 
                id='message'
                bordered={false} 
                hoverable={true} 
                style={{ marginTop:'5px' }}>
                    <Row type="flex" justify="space-around" className="bg" >
                        <Col xs={24} sm={24} md={6} lg={6} className="bj">● 章盛轩&nbsp;|&nbsp;&nbsp;男&nbsp;&nbsp;|&nbsp;1997</Col>
                        <Col xs={24} sm={24} md={12} lg={12} className="bj">● 本科 | 华南理工大学广州学院(2019毕业) | 网络工程</Col>
                        <Col xs={24} sm={24} md={6} lg={6} className="bj">● 前端开发 | 一年以内经验</Col>
                        <Col xs={24} sm={24} md={6} lg={6} className="bj">● 期望职位:web前端</Col>
                        <Col xs={24} sm={24} md={18} lg={18} className="bj">● 期望城市:广州</Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● GitHub:<a target='blank' href='https://github.com/sxuan11'>https://github.com/sxuan11</a></Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 个人博客:<a target='blank' href='https://segmentfault.com/u/sxuan10'>https://segmentfault.com/u/sxuan10</a></Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">
                            <span >● 个人微信小程序: &nbsp;&nbsp;
                                <a  href="#void:" className='a1'>
                                    sxuan10                                
                                </a> 
                            </span>
                        </Col>
                    </Row>
                </Card>
                <Card 
                title="掌握技能" 
                bordered={false} 
                hoverable={true} 
                style={{ marginTop:'5px' }}>
                    <Row type="flex" justify="space-around" className="bg">
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 基础知识：Html/Css/JavaScript/Ajax/ES6/less
                            <p>
                            &nbsp;&nbsp;-熟悉js的基础知识，<br/>
                            &nbsp;&nbsp;-对ES6的解构赋值,Promise,Class,模块化有一定的了解
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 前端框架：React/Vue/微信小程序
                            <p>
                            &nbsp;&nbsp;-React 对组件，state，对生命周期有一定了解，了解组件之间的通信<br/>
                            &nbsp;&nbsp;-了解redux，react-router，react-cli
                            </p>
                            <p>
                            &nbsp;&nbsp;-Vue 对Vue内置指令，state，对Vue的生命周期钩子函数有了解<br/>
                            &nbsp;&nbsp;-了解Vuex，Vue-router，Vue-cli
                            </p>
                            <p>
                            &nbsp;&nbsp;-微信小程序:小程序计算器功能<br/>
                            &nbsp;&nbsp;-小程序地图功能(尚未完善)
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● UI框架：Ant Design/Ant Design Pro/element-ui
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 后端：NodeJS/express
                            <p>
                            &nbsp;&nbsp;-NodeJS的简易使用，express的了解
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 数据库：Mysql
                            <p>
                            &nbsp;&nbsp;-了解mysql的基本操作，增删改查<br/>
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 版本控制工具：Svn/Git</Col>
                        <Col xs={24} sm={24} md={24} lg={24} className="bj">● 其他技能：Linux相关操作/NGINX的配置/路由器交换机的配置/简单shell脚本的编写</Col>
                    </Row>
                </Card>
                <Card 
                title="项目经验" 
                bordered={false} 
                hoverable={true} 
                style={{ marginTop:'5px' }}>
                    <Row type="flex" justify="space-around" className="bg">     
                        <Col className="bj" xs={24} sm={24} md={24} lg={24}>
                            <div>● 
                                <span>简易商城页面</span>&nbsp;&nbsp;
                                <a target='blank' href="http://47.102.100.226">预览页面(手机端)</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a target='blank' href="https://github.com/sxuan11/vuepdd/tree/master/PDD">GitHub源码</a>
                            </div>
                        </Col>
                        <Col className="bj" span={24}>● 使用到的技术栈：Vue+Vuex+Vue Router+Express+ES6+Webpack+Mysql+Ajax(Axios)</Col>
                        <Col className="bj" span={24}>● 这个是个人完成的一个小demo</Col>
                        <Col className="bj" span={24}>● 前端页面：vue+vue-router(路由)+vuex(状态管理)+vue-lazyload(图片懒加载)+mint-ui(界面构建)</Col>
                        <hr/>
                        <Col className="bj" span={24}>
                        <div>● 
                                <span>网页版简历</span>&nbsp;&nbsp;
                                <a target='blank' href="https://github.com/sxuan11/CV">GitHub源码</a>
                            </div>
                        </Col>
                        <Col className="bj" span={24}>● 使用到的技术栈：React + React-router-dom + Ant-Design + jsonp</Col>
                        
                        
                    </Row>
                </Card>
                <Card 
                title="工作经历" 
                bordered={false} 
                hoverable={true} 
                style={{ marginTop:'5px' }}>
                    <Row type="flex" justify="space-around" className="bg">      
                        <Col className="bj" span={24}>● 游雁网络科技有限公司(2018/12--至今)&nbsp;&nbsp;|&nbsp;&nbsp;运维工程师
                            <p className="bj">
                            &nbsp;&nbsp;-主要负责公司的游戏的服务器管理维护及常见故障处理，MySQL的操作，简单的shell编程<br/>
                            &nbsp;&nbsp;-游戏服务器的初始化，Nginx的配置，使用zabbix监控对服务器进行监控
                            </p>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div>
                    <Download/>
                </div>
            </div>
        )
    }
}

export default index
