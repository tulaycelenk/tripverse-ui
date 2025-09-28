import React from 'react'

import {Layout, Menu, theme } from 'antd';
const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
         Tripverse ©{new Date().getFullYear()} Created by Tülay Çelenk
    </AntFooter>
  )
}

export default Footer