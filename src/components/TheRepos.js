import { Divider, Input, Row, Col, Button } from "antd";
import React from "react";
import TheRepo from "./TheRepo";
import Avatar from "../assets/Avatar.png";
import "./Components.css";

const TheRepos = () => {
  return (
    <div className="container">
      <Row>
        <Col xs={6}>
          <div style={{ paddingRight: "20px" }}>
            {" "}
            <img src={Avatar} alt="Avatar" className="avatar" />
            <div>
              <h1>Jide Abdul-Qudus</h1>
              <h2>jideabdqudus</h2>
              <div>
                <h4>
                  Software Developer (MERN). I build web apps with API-centric
                  backends. Tech Junkie with penchant for design.
                </h4>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={18}>
          <Input placeholder="Find a repository" />
          <Divider />
          <h3>124 results from public repositories</h3>
          <TheRepo />
        </Col>
      </Row>
    </div>
  );
};

export default TheRepos;
