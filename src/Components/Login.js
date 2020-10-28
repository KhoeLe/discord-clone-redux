import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../Firebase/firebase'
import './login.css'

function Login() {

    const handleLogin = () =>{
        auth.signInWithPopup(provider).catch((error) => error.message)
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="/"/>
            </div>
            <Button onClick={handleLogin}>
                  SIGN IN  
            </Button>
        </div>
    )
}

export default Login
