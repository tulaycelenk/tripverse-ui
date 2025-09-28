import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { addTourToBasket } from '../redux/slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
const { Meta } = Card;

function Tour({tour}) {

const {id, name, description, isAdult, startDate, endDate, price, point} = tour;

const dispatch = useDispatch();
const { tourIds } = useSelector((store) => store.basket);

const addToBasket= ()=>{ 
      if (!tourIds.includes(tour.id)) {
        dispatch(addTourToBasket(tour.id))
      }
 }

  return (
    <Card
    style={{ width: 275 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <p onClick={addToBasket}>Sepete ekle</p>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={name}
      description={description}
    />
    <>
    {price} €

    </>
  </Card>
  )
}

export default Tour
