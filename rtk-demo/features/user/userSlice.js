const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk


const axios = require('axios')


const initialState = {
    loading:'',
    user:[],
    failed:""
}

//generate pending,sucess,rejectd
const fetchUSers =  createAsyncThunk('user/fetchUSers',() => {
    return   axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>    response.data.map((user)=>user.id))
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


module.exports = userSlice.reducer
module.exports.fetchUSers = fetchUSers