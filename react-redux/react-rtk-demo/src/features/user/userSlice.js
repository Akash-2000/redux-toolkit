import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




const initialState = {
    loading:'',
    user:[],
    failed:""
}

//generate pending,sucess,rejectd
export const fetchUSers =  createAsyncThunk('user/fetchUSers',() => {
    return   axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>    response.data)
})


const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchUSers.pending,state=>{
            state.loading = true
        }),
        builder.addCase(fetchUSers.fulfilled,(state,action) =>{
            state.loading = false,
            state.user = action.payload,
            state.failed=''
        }),
        builder.addCase(fetchUSers.rejected,(state,action)=>{
            state.loading = false,
            state.user = [],
            state.failed = action.error.message
        })
    }
   
})


export default userSlice.reducer
