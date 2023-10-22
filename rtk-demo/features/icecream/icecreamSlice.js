//How to create a Slice in reduxjs toolkit
/**
step 1: import createSlice method from the redux js toolkit
step 2: use the createSlice to create the name 
step 3: use the createSlice to create the initialState 
step 4: use the createSlice to create the reducer(which creates the action creators,actions insidethe reducer)
step 5: use the createSlice to create the initialState 
step 6: use the export default method to export the reducer
step 7: use the export  method to export the  actions





 */












const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numoficeCreams:10
}

const icecreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers:{
       ordered:(state,action)=>{
        state.numoficeCreams=state.numoficeCreams - action.payload
       },
       restocked:(state,action)=>{
        state.numoficeCreams=state.numoficeCreams+action.payload
       } 
    },
    extraReducers:{
        ['cake/ordered']:(state,action) =>{
            state.numoficeCreams--
        }
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions