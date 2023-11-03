import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/slices/UserSlice';

function User() {
  const { allUsers } = useSelector((state) => state.user);  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
        {allUsers.map(user=>(
            <div>{user.name}</div>
        ))}
    </div>
  )
}

export default User;