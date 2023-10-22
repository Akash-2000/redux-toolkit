import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import  userReducer  from '../features/user/userSlice'





// const cofigureStore = require('@reduxjs/toolkit').configureStore
// const cakeReducer = require('../features/cake/cakeSlice')
// const icecreamReducer = require('../features/icecream/icecreamSlice')
// const reduxLogger = require('redux-logger')
// const userReducer = require('../features/user/userSlice')

const store = configureStore({
    reducer :{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
   // middleware:(getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger)
      

})

export default store