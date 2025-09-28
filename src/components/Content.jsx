import React from 'react'
import { Layout, Menu, theme } from 'antd';
import ToursPage from '../pages/ToursPage';
import { Route, Routes } from 'react-router-dom';
import BasketPage from '../pages/BasketPage';

const { Content: AntContent } = Layout;

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
                <Routes>
                    <Route path='/' element={ <ToursPage />} />
                    <Route path='/basket' element={<BasketPage/>} />
                    
                    {/* <Route path='/product-details/:id' element={<ProductDetails />} /> */}
                </Routes>
               
            </div>

        </AntContent>
    )
}

export default Content