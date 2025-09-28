import React, { useEffect } from 'react'
import Tour from '../components/Tour'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Segmented } from 'antd';
import { Col, Row } from 'antd';
import { getAllTours } from '../redux/slices/tourSlice';

function ToursPage() {
    const dispatch = useDispatch();
    const { tours } = useSelector((store) => store.tour);

    console.log(tours)
    const [value, setValue] = React.useState('horizontal');

    useEffect(()=>{
      dispatch(getAllTours())
    }, [])

  return (

    <>
    {/* <Flex horizontal={value === 'horizontal'} wrap gap="medium"> */}
    <Row gutter={[24,24]}>
      
    {
      //when tours not null 
      tours && tours.map((tour) => (
        <Col span={6}><Tour key= {tour.id} tour={tour}/></Col>
        
      ))
    }
  
    {/* </Flex> */}
     </Row>
    </>

  )
}

export default ToursPage