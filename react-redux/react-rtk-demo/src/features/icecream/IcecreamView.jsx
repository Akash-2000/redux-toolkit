import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { ordered,restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const state = useSelector((state)=>state.icecream)
    const dispatch = useDispatch()
   
   
    return (
        <div>
            <h2>Num of Icecreams - {state.numoficeCreams}</h2>
            <button onClick={()=>dispatch(ordered(2))}>order Icecream</button>
            <button onClick={()=>dispatch(restocked(3))}>Restock Icecream</button>
        </div>
    )
}
