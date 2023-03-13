import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount, increment } from 'redux/pipline'

export default function data() {
  // this fetches data from the redux store
  const {  count } = useSelector(state => state.counter)
  // this sends data to the store
  const dispatch = useDispatch()
  const iny = () => {
    dispatch(incrementByAmount(10))
  }
  const increase = () => {
    dispatch(increment())
    console.log("a");
  }

  return (
    <div>
      <p>{count}</p>
      <p onClick={increase} >+</p>
      <p onClick={iny}>add by 10</p>

    </div>
  )
}
