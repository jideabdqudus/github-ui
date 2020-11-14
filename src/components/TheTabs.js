import React from 'react'
import { Tabs } from 'antd';
import TheRepos from './TheRepos';

const { TabPane } = Tabs;

const TheTabs = () => {
    return (
        <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      <TheRepos/>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
    )
}

export default TheTabs
