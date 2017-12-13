import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import { Row, Col } from 'antd';

import SearchTree from './Tree'
import {renderTable} from './Table'

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={8}>
            <div className="gutter-box panel">
              <SearchTree />
            </div>
          </Col>
          <Col span={16}>
            <div className="gutter-box panel">
              {renderTable()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;