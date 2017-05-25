import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.paras
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    return (
      <input
        className="form-control"
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.props.handleBlur}
        id="paras"
      />
    )
  }
}

export default Input;
