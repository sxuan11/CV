import { Timeline } from 'antd';
import React from 'react'


class PendingTimeLine extends React.Component {
  state = {
    reverse: true,
  };

  render() {
    return (
      <div >
        <Timeline pending="记录中..." reverse={this.state.reverse} style={{margin:'0 auto'}}>
          <Timeline.Item></Timeline.Item>
          <Timeline.Item></Timeline.Item>
          <Timeline.Item></Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default PendingTimeLine;