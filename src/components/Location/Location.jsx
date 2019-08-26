import React, { Component } from 'react'
import Axios from '../../api/api'

export class Location extends Component {

    constructor(props){
        super(props)
        this.state={
            province:'',
            city:'',
            district:'',
        }
      }
    componentDidMount(){  
        this.get_ip()
    }

    

    get_ip(){
      Axios.jsonp({
          url:'https://apis.map.qq.com/ws/location/v1/ip?ip%27%27&output=jsonp&key=GWHBZ-IWZHI-OXNG4-5EVS3-6MJU6-YYB7E'
      }).then((res)=>{
          if(res.status===0){
              let data = res;
              this.setState({
                  province:data.result.ad_info.province,
                  city:data.result.ad_info.city,
                  district:data.result.ad_info.district,
              })
          }
      }) 
    }

    render() {
        return (
            <div>
                <p>当前城市:{this.state.province}{this.state.city}{this.state.district}</p>
            </div>
        )
    }
}

export default Location
