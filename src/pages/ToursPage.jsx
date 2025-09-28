import React from 'react'
import Tour from '../components/Tour'
import { useDispatch, useSelector } from 'react-redux'

function ToursPage() {
    const dispatch = useDispatch();
    const { tours } = useSelector((store) => store.tour);
    console.log("asdf")

    console.log(tours)

  return (
    <>
    {
      //when tours not null 
      tours && tours.map((tour) => (
        <Tour key= {tour.id} tour={tour}/>
      ))
    }
    </>

  )
}

export default ToursPage