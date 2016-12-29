import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, DropdownItem } from '../dist/index.min';

class Page extends React.Component {
  render() {
    let _title = (
      <span>Dropdown <span className="caret"></span></span>
    );

    return (
      <div className="dropdown-eg-container">
        <h1>Get-Set-Go Dropdown Component</h1>

        <p className="dropdown-eg-group">
          <h4>Dropdown Styles</h4>

          <Dropdown title={_title}>
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bStyle="primary">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bStyle="success">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bStyle="info">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bStyle="warning">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bStyle="danger">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>
        </p>

        <p className="dropdown-eg-group">
          <h4>Dropdown Sizes</h4>

          <Dropdown title={_title} bSize="lg">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bSize="sm">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} bSize="xs">
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>
        </p>

        <p className="dropdown-eg-group">
          <h4>Dropdown Variations</h4>

          <Dropdown title={_title} isDropup>
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} isRight>
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>

          <Dropdown title={_title} isDropup isRight>
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Node.js</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Python</DropdownItem>
            <DropdownItem>Golang</DropdownItem>
            <DropdownItem isDivider></DropdownItem>
            <DropdownItem>Amazon Web Services</DropdownItem>
          </Dropdown>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
