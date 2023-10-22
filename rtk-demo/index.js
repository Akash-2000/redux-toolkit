const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUSers = require('./features/user/userSlice').fetchUSers



console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('updated State',store.getState())

})

store.dispatch(fetchUSers())


// console.log(icecreamActions)
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restock(3))
// store.dispatch(icecreamActions.ordered(2))
// store.dispatch(icecreamActions.ordered(2))
// store.dispatch(icecreamActions.ordered(2))


// store.dispatch(icecreamActions.restocked(5))
unsubscribe()



