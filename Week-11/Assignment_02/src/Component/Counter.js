import React from 'react'
import {increaseValue, resetValue} from "../redux/Action-creator"
import {useSelector, useDispatch} from 'react-redux'

function Counter() {
  const counter = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"25px"


    }}>
        <h1>Counter</h1>
        <button style={{
            backgroundColor:"blue",
            color:"white",
            padding:"10px 30px"
        }}onClick={() => dispatch(increaseValue())}>Increment</button>
        <p>{counter}</p>
        <button style={{
            backgroundColor:"blue",
            color:"white",
            padding:"10px 30px"
        }}onClick={() => dispatch(resetValue())}>Reset</button>
      
    </div>
  )
}

export default Counter
