import React from "react";
import { Tabs } from "antd";
import TheRepos from "./TheRepos";

const { TabPane } = Tabs;

const TheTabs = ({data, repos, loading}) => {
  return (
    <Tabs defaultActiveKey="2" centered>
      <TabPane tab="Overview" disabled key="1"></TabPane>
      <TabPane tab={`Repositories`} key="2">
        <TheRepos data={data} repos={repos} loading={loading} />
      </TabPane>
      <TabPane tab="Projects" disabled key="3"></TabPane>
      <TabPane tab="Packages" disabled key="4"></TabPane>
    </Tabs>
  );
};

export default TheTabs;
