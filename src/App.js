import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import {login, logout, selectUser } from './features/userSlice'
import { auth } from './Firebase/firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
   
      auth.onAuthStateChanged(authUser =>{
        if(authUser){
            //login
            dispatch(
              login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                email: authUser.email,
                displayName: authUser.displayName
            }))
        }else{
          // logout
          dispatch(logout())
        }
      })
    
   
  }, [])

  // console.log(user)

  return (
    <div className="App">
      {user? (
        <>
          <Sidebar/>
          <Chat />
        </>
      ):(
        <>
          <Login/>
        </>
      )}
    </div>
  );
}

export default App;
