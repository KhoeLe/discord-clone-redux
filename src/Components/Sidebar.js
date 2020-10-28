import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SidebarChannels from "./SidebarChannels";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import "./sidebar.css";
import db, { auth } from "../Firebase/firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";


function Sidebar() {

  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  useEffect(() => {
      db
        .collection('Chats')
        .onSnapshot((snapshot) =>{
            setChannels(
              snapshot.docs.map((doc) =>({
                uid: doc.id,
                data: doc.data()
              }))
            )
        })
  }, [])

  
  const handleAddChatName = () =>{
    const chatName = prompt('Please enter Chat Name')
    if(chatName){
        db
          .collection('Chats')
          .add({
            chatName: chatName
          })
    } 
  }

  // console.log(channels)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
          <h2>Louis Le Dev</h2>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChatName} className="sidebar__addChannels" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({uid, data:{chatName}}) => (
            <SidebarChannels key={uid} uid={uid} chatName={chatName}   />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Steam</p>
        </div>
        <div className="sidebar__voiceIcons">
            <IconButton>
                <InfoIcon />
            </IconButton>
            
            <IconButton>
                <PhoneIcon />
            </IconButton>
        </div>
      </div>

      <div className="sidebar__profiles">
        <Avatar onClick={() =>  auth.signOut()} src={user.photo}/>
        <div className="sidebar__profilesInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0,5)}.#!</p>
        </div>
        <div className="sidebar__profilesIcons">
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <HeadsetIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
