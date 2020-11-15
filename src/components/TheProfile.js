import React from "react";
import Avatar from "../assets/Avatar.png";
import "./Components.css";
import {
  TeamOutlined,
  StarOutlined,
  PushpinOutlined,
  LinkOutlined,
  HeatMapOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Divider, Row, Col, Button } from "antd";
const TheProfile = () => {
  return (
    <div>
      <div style={{ paddingRight: "20px" }}>
        {" "}
        <img src={Avatar} alt="Avatar" className="avatar" />
        <div>
          <h1 className="firstName">Jide Abdul-Qudus.</h1>
          <h2 className="userName">jideabdqudus</h2>
          <div>
            <h4 className="bio">
              Software Developer (MERN). I build web apps with API-centric
              backends. Tech Junkie with penchant for design.
            </h4>
          </div>
          <Button block className="btn1">Edit Profile</Button>
        </div>
      </div>
      <Row>
        <TeamOutlined />
        12 followers . 42 following
        <StarOutlined />
        10
      </Row>
      <PushpinOutlined /> Lagos, Nigeria
      <LinkOutlined /> www.abdulqudus.com
      <Divider />
      <h4>Highlights</h4>
      <HeatMapOutlined /> Arctic Code Vault Contributor
      <Divider />
      <h4>Organizations</h4>
      <FacebookOutlined />
    </div>
  );
};

export default TheProfile;
