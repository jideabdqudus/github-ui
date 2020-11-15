import React from "react";
import { Layout, Menu, Row, Col, Tooltip } from "antd";
import {
  GithubOutlined,
  UserOutlined,
  InfoCircleOutlined,
  BellOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./Layout.css";
import GithubLogo from "../assets/GithubLogo.svg";

const { Header } = Layout;

const Navbar = () => {
  return (
    <div className="headerTab">
      <Row>
        <Col xs={1}>
          <GithubOutlined style={{ fontSize: "25px", padding: "5px" }} />
        </Col>
        <Col xs={6}>
          <input className="headerInput" placeholder="Search or Jump to" />
        </Col>
        <div className="headerCol">
          <b className="headerText">Pull Requests</b>
          <b className="headerText">Pull Requests</b>
          <b className="headerText">Pull Requests</b>
        </div>
      </Row>
    </div>
  );
};

export default Navbar;

//<Header>
//   <Menu theme="dark" mode="horizontal">
//     <Row>
//       <Col xs={1}>
//         <GithubOutlined />
//       </Col>
//       <Col xs={5}>
//         <Input
//           placeholder="Search or jump to"
//           prefix={<UserOutlined className="site-form-item-icon" />}
//           suffix={
//             <Tooltip title="Extra information">
//               <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
//             </Tooltip>
//           }
//         />
//       </Col>
//       <Col xs={16}>
//         <Row>
//           <Col xs={4}>
//             <h3>Pull Requests</h3>
//           </Col>
//           <Col xs={4}>
//             <h3>Issues</h3>
//           </Col>
//           <Col xs={4}>
//             <h3>Codespaces</h3>
//           </Col>
//           <Col xs={4}>
//             <h3>Marketplace</h3>
//           </Col>
//           <Col xs={4}>
//             <h3>Explore</h3>
//           </Col>
//         </Row>
//       </Col>
//       <Col>
//         <BellOutlined />
//       </Col>
//       <Col>
//         <PlusOutlined />
//       </Col>
//       <Col>
//         <UserOutlined />
//       </Col>
//     </Row>
//   </Menu>
// </Header>
