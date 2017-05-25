import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
      <div className="output">
        {this.props.text}
      </div>
    )
  }
}

export default Output;
