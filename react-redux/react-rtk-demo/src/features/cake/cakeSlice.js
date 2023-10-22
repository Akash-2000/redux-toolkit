import {createSlice} from '@reduxjs/toolkit'

import axios from 'axios'


const initialState = {
    numofCakes:10
}


const cakeSlice =createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered: (state,action) =>{
            state.numofCakes =state.numofCakes-1 
        },
        restock:(state,action)=>{
            state.numofCakes = state.numofCakes+ action.payload

        }
    }

})


export default cakeSlice.reducer
export const {ordered,restock} =  cakeSlice.actions
