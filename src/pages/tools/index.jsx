import React, { Component } from 'react'
import './index.css'
import { Map , Marker } from 'react-amap';
import {Button} from 'antd'

const ZoomCtrl = (props) => {
    const map = props.__map__;
    if (!map) {
      console.log('组件必须作为 Map 的子组件使用');
      return;
    }
    
    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();
  
    return (<div>
      <Button onClick={zoomIn}>+</Button>
      <Button onClick={zoomOut}>-</Button>
    </div>);
  };



export class index extends Component {
    
    constructor() {
        super();

        this.state = {
            is3D:'2D'
          }


        this.amapEvents = {
          created: (mapInstance) => {
            console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
            console.log(mapInstance.map);
          }
        };
        this.markerEvents = {
          created: (markerInstance) => {
            console.log('高德地图 Marker 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
            console.log(markerInstance.getPosition());
          }
        }
        this.markerPosition = { longitude: 120, latitude: 30 };

        this.change3D = this.change3D.bind(this)
      }



      change3D() {
          if(this.state.is3D === '2D'){
            this.setState({
                is3D:'3D'
            })
          }else{
            this.setState({
                is3D:'2D'
            })
          }
       

       
      }


    render() {
        
        
        return (
            <div id="amap" style={{minHeight:'800px'}}> 
                <Map 
                amapkey='978e163322f2d7283afb90b22d747de7' 
                events={this.amapEvents} 
                zoom={11} 
                rotateEnable={true}
                >
                    <ZoomCtrl/>
                    <Marker position={this.markerPosition} events={this.markerEvents} />
                </Map>
            </div>
        )
    }
}

export default index
