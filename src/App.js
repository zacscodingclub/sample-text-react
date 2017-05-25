import React, { Component } from 'react';
import Output from './Output';
import Input from './controls/Input';
import Select from './controls/Select';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paras: 4,
      html: true,
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get(`http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`)
         .then(response => {
           this.setState({
             text: response.data.text
           });
         })
         .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleBlur() {
    this.getSampleText()
  }

  render() {
    return (
      <div className="App container">
        <h1>Sample Text Generator using ReactJS</h1>
        <form className="form-inline">
          <div className="form-group">
            <Input paras={this.state.paras} handleChange={this.handleChange} handleBlur={this.handleBlur} />
            <Select html={this.state.html} handleChange={this.handleChange} handleBlur={this.handleBlur} />
          </div>
        </form>
        <div className="well">
          <Output text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
