import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUSers } from './userSlice'


export const UserView = () => {

    const user = useSelector((state)=>state.user)
    console.log(user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUSers())

    },[])
  return (
    <div>
        <h2>List of USers</h2>
        <h2>{user.loading}</h2>
        <h2>{user.failed}</h2>
        {user.loading && <div>Loading...</div>}
        {user.failed && <div>{user.failed}</div>}
        {user.user.length > 0 ? (
            <ul>
                {
                    user.user.map((e) => (
                      <li key={e.id}>{e.name}</li>  
                    ))
                }
            </ul>
        ):null}
    </div>
  )
}
