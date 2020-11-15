import { Divider, Input, Row, Col, Button } from "antd";
import React from "react";
import TheRepo from "./TheRepo";
import "./Components.css";

import TheProfile from "./TheProfile";

const TheRepos = () => {
  return (
    <div className="container">
      <Row>
        <Col xs={6}>
          <TheProfile/>
        </Col>

        <Col xs={18}>
          <Row>
            <Col xs={18}>
              {" "}
              <Input placeholder="Find a repository" />
            </Col>
            <Col xs={2}>
              <Button>Type: All</Button>
            </Col>
            <Col xs={2}>
              <Button>Language: All</Button>
            </Col>
            <Col xs={2}>
              <Button>New</Button>
            </Col>
          </Row>
          <Divider />
          <h3>124 results from public repositories</h3>
          <TheRepo />
        </Col>
      </Row>
    </div>
  );
};

export default TheRepos;
