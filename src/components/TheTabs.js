import React from "react";
import { Tabs } from "antd";
import TheRepos from "./TheRepos";

const { TabPane } = Tabs;

const TheTabs = () => {
  return (
    <Tabs defaultActiveKey="2" centered>
      <TabPane tab="Overview" disabled></TabPane>
      <TabPane tab={`Repositories`} key="2">
        <TheRepos />
      </TabPane>
      <TabPane tab="Projects" disabled></TabPane>
      <TabPane tab="Packages" disabled></TabPane>
    </Tabs>
  );
};

export default TheTabs;
