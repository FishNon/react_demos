import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { Select } from 'antd';
const { Option, OptGroup } = Select;


class SpecialDropDown extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = function (value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <Select defaultValue="1" style={{ width: 200 }} onChange={this.handleChange}>
        <OptGroup label="2018年">
          <Option key="1">V1.0</Option>
          <Option key="2">V2.0</Option>
          <Option key="3">V3.0</Option>
        </OptGroup>
        <OptGroup label="2019年">
          <Option key="4">V1.0</Option>
          <Option key="5">V2.0</Option>
          <Option key="6">V3.0</Option>
          <Option key="7">V4.0</Option>
          <Option key="8">V5.0</Option>
        </OptGroup>
        <OptGroup label="2020年">
          <Option key="9">V1.0</Option>
          <Option key="10">V2.0</Option>
        </OptGroup>
      </Select>
    )

  }
}

export default SpecialDropDown;