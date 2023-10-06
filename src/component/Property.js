import React from 'react'
import CardItem from './CardItem'
import {  useSelector, useDispatch } from 'react-redux'
import { setEstateDataReducer } from '../Redux/estateSlice'
const Property = () => {
    const Estate = useSelector((state) => state.estate.Estate)
    console.log("Estate: ",Estate)

    const dispatch = useDispatch();
    dispatch(setEstateDataReducer(null))

  return (
    <div className='flex justify-center items-center'>
        <CardItem 
        estate={Estate}/>
    </div>
  )
}

export default Property