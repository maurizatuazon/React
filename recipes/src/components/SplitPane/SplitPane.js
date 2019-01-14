import React, { Component } from 'react';
import './SplitPane.css';

class SplitPane extends Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {this.props.left}
        </div>
        <div className="SplitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

export default SplitPane;