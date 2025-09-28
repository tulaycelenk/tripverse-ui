import React from 'react'

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Tour from './Tour';
const { Header} = Layout;
const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const items2 = [{key:1 ,label:"Most Rated"}, {key:2 ,label:"About Us"}]

function Navbar() {
 const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items2}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      
      
    </Layout>
  )
}

export default Navbar