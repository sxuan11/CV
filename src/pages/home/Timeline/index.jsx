import { Timeline } from 'antd';
import React from 'react'



class PendingTimeLine extends React.Component {
  state = {
    reverse: true,
  };

  render() {
    return (
      <div style={{}}>
        <Timeline pending="记录中..." reverse={this.state.reverse} mode='alternate' 
          style={{padding:'30px 0 0 0'}}>
            <Timeline.Item><a href="https://www.baidu.com">一个项目</a></Timeline.Item>
            <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
            <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default PendingTimeLine;