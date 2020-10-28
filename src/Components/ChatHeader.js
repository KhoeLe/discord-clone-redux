import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import './chatHeader.css'
import { useSelector } from 'react-redux';
import { selectChatName } from '../features/chatSlice';

function ChatHeader() {
    
    const chatName = useSelector(selectChatName)

    return (
        <div  className='chatHeader'>
            <div className="chatHeaderLeft">
                <h4>
                    <span className='chatHeaderLeft__hash'>#</span>{chatName}
                </h4>
            </div>
            <div className="chatHeaderRight">
                <NotificationsIcon/>
                <LocationOnIcon/>
                <PeopleAltIcon/>
                <div className="chatHeader__search">
                    <input type="text" placeholder='Search for chat'/>
                    <SearchIcon/>
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader  
