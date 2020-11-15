import { Badge, Divider, Button } from "antd";
import React from "react";
import { StarOutlined, ForkOutlined } from "@ant-design/icons";

const TheRepo = () => {
  return (
    <div>
      <h3>abdulqudus.com</h3>
      <Badge />
      HTML
      <StarOutlined />
      20
      <ForkOutlined />9 Updated on 1 0ct
      <Button>
        <StarOutlined /> Star
      </Button>
      <Divider />
    </div>
  );
};

export default TheRepo;
