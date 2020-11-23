import { Divider, Input, Row, Col, Button } from "antd";
import React from "react";
import TheRepo from "./TheRepo";
import "./Components.css";
import { BookOutlined } from "@ant-design/icons";

import TheProfile from "./TheProfile";

const TheRepos = ({data, repos}) => {
  return (
    <div className="container">
      <Row>
        <Col xs={6}>
          <TheProfile data={data} />
        </Col>
        <Col xs={1}></Col>
        <Col xs={17}>
          <Row>
            <Col xs={14}>
              {" "}
              <Input
                placeholder="Find a repository.."
                style={{ borderRadius: "5px", marginRight: "0px" }}
              />
            </Col>
            <Col xs={1}></Col>
            <Col xs={2}>
              <Button className="btn1">Type: All</Button>
            </Col>
            <Col xs={1}></Col>
            <Col xs={2}>
              <Button className="btn1">Language: All</Button>
            </Col>
            <Col xs={1}></Col>
            <Col xs={1}></Col>
            <Col xs={2}>
              <Button className="btn2">
                <BookOutlined />
                New
              </Button>
            </Col>
          </Row>
          <Divider />

          <TheRepo repos={repos} />
        </Col>
      </Row>
    </div>
  );
};

export default TheRepos;
