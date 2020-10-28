import React from 'react'
import { useDispatch } from 'react-redux'
import { setChat } from '../features/chatSlice'
import './sidebarChannels.css'


function SidebarChannels({chatName, uid}) {
    
    const dispatch = useDispatch()

    return (
        <div className='sidebarChannels' onClick={() =>{
            dispatch(
                setChat({
                    chatId: uid,
                    chatName: chatName
                }))
        }}>
            <h4>
                <span className='sidebarChannels__hash'>#</span>{chatName}
            </h4>
        </div>
    )
}


export default SidebarChannels
