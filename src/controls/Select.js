import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: props.html
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    return (
      <select className="form-control" value={this.state.html} onChange={this.handleChange} onBlur={this.props.handleBlur} id="html">
        <option value="true">HTML Format</option>
        <option value="false">Plain Text</option>
      </select>
    )
  }
}

export default Select;
