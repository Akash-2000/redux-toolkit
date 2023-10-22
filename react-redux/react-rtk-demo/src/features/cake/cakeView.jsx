import React from 'react'
import { ordered, restock } from './cakeSlice'
import { useSelector,useDispatch } from 'react-redux'
export const CakeView = () => {
    const state = useSelector((state)=>state.cake)
    console.log(state)
    const dispatch = useDispatch()
  return (
    <div className=''>
        <h2>Num of cakes - {state.numofCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restock(4))}>Restock cake</button>
    </div>
  )
}
