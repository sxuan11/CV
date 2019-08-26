import React, { Component } from 'react'
import Util from './../../util/index'

export class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            sysTime:''
        }
    }
    componentDidMount(){
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);
    }
    render() {
        return (
            <div>
                <div>当前时间:{this.state.sysTime}</div>
            </div>
        )
    }
}

export default Time
