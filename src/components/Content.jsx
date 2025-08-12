import React from 'react'
import {Layout, Menu, theme } from 'antd';

const { Content: AntContent} = Layout;

function Content() {
 const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
    return (
        <AntContent style={{ padding: '0 48px' }}>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                Content
            </div>

        </AntContent>
    )
}

export default Content