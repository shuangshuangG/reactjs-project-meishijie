import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class SearchBars extends Component {
  state = {
    value: '美食',
  };
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
      <div style={{backgroundColor: '#f5f5f5', width: '100%'}}>
        <SearchBar
          placeholder="搜索你感兴趣的"
          ref={ref => this.manualFocusInst = ref}
          style={{width: '100%',background: '#f5f5f5'}}
        />
      </div>
    );
  }
}