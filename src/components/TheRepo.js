import { Badge, Divider, Button, Row, Col } from "antd";
import React from "react";
import { StarOutlined, ForkOutlined } from "@ant-design/icons";

const TheRepo = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div>
          <Row>
            <Col xs={22}>
              {" "}
              <h3
                style={{
                  fontSize: "21px",
                  color: "#0366d6",
                  fontWeight: "500",
                }}
              >
                {repo.name}
              </h3>
            </Col>
            <Col xs={2}>
              <Button className="btn1">
                <StarOutlined /> Star
              </Button>
            </Col>
          </Row>
          <span style={{ marginRight: "10px" }}>
            <Badge color="red" style={{ fontSize: "19px" }} />
            <span>{repo.languages_url}</span>
          </span>
          <span style={{ marginRight: "10px" }}>
            <StarOutlined /> 20
          </span>
          <span style={{ marginRight: "20px" }}>
            <ForkOutlined />9
          </span>
          <span>Updated on 1 0ct</span>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default TheRepo;
