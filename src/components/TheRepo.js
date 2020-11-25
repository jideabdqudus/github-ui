import { Badge, Divider, Button, Row, Col } from "antd";
import React from "react";
import {
  StarOutlined,
  ForkOutlined,
  FlagOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Spinner from "../layout/Spinner";
const TheRepo = ({ repos, loading }) => {
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {repos.map((repository) => (
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
                    {repository.name}
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
                <span>HTML</span>
              </span>
              <span style={{ marginRight: "10px" }}>
                <StarOutlined /> {repository.stargazers_count}
              </span>
              <span style={{ marginRight: "20px" }}>
                <ForkOutlined />
                {repository.watchers}
              </span>
              <span style={{ marginRight: "20px" }}>
                <FlagOutlined />
                {repository.license.name}
              </span>
              <span>Updated on {repository.updated_at}</span>
              <Divider />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TheRepo;
