import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatHeader from './ChatHeader'
import './chat.css'
import { CardGiftcard, EmojiEmotions } from '@material-ui/icons';
import GifIcon from '@material-ui/icons/Gif';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../features/chatSlice';
import db from '../Firebase/firebase';
import firebase from 'firebase'
import { selectUser } from '../features/userSlice';

function Chat() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const chatId  = useSelector(selectChatId)
    const chatName = useSelector(selectChatName)
    const user = useSelector(selectUser)

    useEffect(() => {
        if(chatId){
            db
                .collection('Chats')
                .doc(chatId)
                .collection('message')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot)=>
                    setMessages(
                     snapshot.docs.map((doc) => doc.data())
                ))

        } 
    }, [chatId])

    


    const handleSendMessage = (e) =>{
            e.preventDefault();
            db
                .collection('Chats')
                .doc(chatId)
                .collection('message')
                .add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    photo: user.photo,
                    message:input,
                    email: user.email,
                    user:user
                })
            setInput('')
    }
    // console.log(input)

    console.log(messages,"Hmmmm")
    
    return (
        <div className='chat'>
            <ChatHeader />
            <div className="chat__message">
                {messages.map((message) =>(
                    <Message key={message.uid} uid={message.uid} message={message.message} photo={message.photo} timestamp={message.timestamp} user={message.user}/>
                ))}
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder={`Message ${chatName}`} onChange={(e) =>setInput(e.target.value)} value={input} />
                    <button className='chat__inputButton' onClick={handleSendMessage}>
                        Send Messgae
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcard fontSize='large'/>
                    <GifIcon fontSize='large'/>
                    <EmojiEmotions fontSize='large'/>
                </div>
            </div>
        </div>
    )
}


export default Chat
