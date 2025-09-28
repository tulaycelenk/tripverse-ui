import React, { useEffect } from 'react'
import { Layout, Menu, } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Header } = Layout;

function Navbar() {
  const { tourIds } = useSelector((store) => store.basket);
  const basketItemCount = tourIds.length
  const items2 = [{ key: 1, label: <span onClick={() => navigate("/")}> Home </span>}, { key: 2, label: "About Us" }, { key: 3, label: <><ShoppingOutlined onClick={() => navigate("/basket")} />{basketItemCount}</> }]
  const navigate = useNavigate();

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