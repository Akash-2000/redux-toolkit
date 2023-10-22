const createSlice = require('@reduxjs/toolkit').createSlice



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


module.exports = cakeSlice.reducer
module.exports.cakeActions =cakeSlice.actions
