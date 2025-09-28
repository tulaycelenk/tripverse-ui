import React from 'react';
import { Avatar, Col, List, Row } from 'antd';
import { useSelector } from 'react-redux';
import BasketTotal from '../components/BasketTotal';

function BasketPage() {

    const { tours } = useSelector((store) => store.tour);
    const { tourIds } = useSelector((store) => store.basket);

    const searchBasketItems = () => {

        const x = tours.filter((tour) => tourIds.includes(tour.id))
            .map((tour) => {
                return { title: tour.name, price: tour.price}
            }
            )
        return x
    }

    const findTotalPrice = () => { 
        const items = searchBasketItems()
        let value =0 
        items.forEach(
            (tour)=>{
                value = value + (tour.price)
                return value
            }
        )
        return value
    }

    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={18}>

                    <List
                        grid={{ gutter: 16, column: 1 }}
                        itemLayout="horizontal"
                        dataSource={searchBasketItems()}
                        renderItem={(item, index) => (
                            <List.Item >
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    price={<p>{item.price}</p>}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={6}>
                   <BasketTotal total= {findTotalPrice()}/>
                </Col>
            </Row>

        </>
    )
}
export default BasketPage;