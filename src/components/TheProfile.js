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
import StartNG from "../assets/61734947.jpg";
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
          <Button
            block
            className="btn1"
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <Row style={{ marginBottom: "20px" }}>
        <TeamOutlined style={{marginTop:"5px"}}/>
        <span>
          <b>12</b> followers . <b>42</b> following
        </span>
        <StarOutlined style={{ marginTop: "5px", marginLeft: "9px" }} />
        <b>10</b>
      </Row>
      <PushpinOutlined /> Lagos, Nigeria
      <br />
      <LinkOutlined /> www.abdulqudus.com
      <Divider />
      <h4 style={{ fontSize: "16px" }}>Highlights</h4>
      <HeatMapOutlined style={{ marginRight: "5px" }} /> Arctic Code Vault
      Contributor
      <Divider />
      <h4 style={{ fontSize: "16px" }}>Organizations</h4>
      <img
        src={StartNG}
        alt="Org"
        height="30"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default TheProfile;
