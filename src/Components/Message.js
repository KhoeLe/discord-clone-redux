import { Avatar } from '@material-ui/core'
import React from 'react'
import './message.css'

function Message({message,photo,timestamp, user}) {

        

    return (
        <div className='message'>
            <Avatar src={photo}/>
            <div className="message__info">
                <h4>
                    {user.displayName} <span className='message__timstamp'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </div>   
        </div>
    )
}

export default Message
