import React, { useState, useEffect} from "react";
import './App.css';

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
 

export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Pedro', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Caio', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Marcelo', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'João', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);

  const [activeChat,setActiveChat] = useState({});

  return (
    <div className="app-window">
        <div className="sidebar">
        
        <header>
          <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
          <div className="header--btn">
            <img className="icones-nao-importados" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGjcKJAJObn4qt57WUyuD2WcbUgKbnkyYZrK6paDSGd0I9jpjcNCAGmEipWPZleWrjGA&usqp=CAU" alt="DonutLarger" />
          </div>
          
          <div className="header--btn">
            <img className="icones-nao-importados" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-typing-icon-png-image_854949.jpg" alt="ChatIcon" />
          </div>
          
          <div className="header--btn">
          <img className="icones-nao-importados" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSef43KPu2A1eeJNKCTtrCwgcBbrVc6Y6fofmGwQLibuA3rFILVjxfHYCB3wY1urkfOGt4&usqp=CAU" alt="MoreVertIcon" />          
          </div>
         
        </header>

        <div className="search">
          <div className="search--input">

            <img className="icones-nao-importados" fontSize="small" src="https://icon-library.com/images/search-icon-jpg/search-icon-jpg-18.jpg" alt="searchIcon" />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

          <div className='chatlist'>
              {chatlist.map((item, key) =>(
                <ChatListItem
                  key={key}
                  data={item}
                  active={activeChat.chatId === chatlist[key].chatId}
                  onClick={()=>setActiveChat(chatlist[key])}
                />
              ))}
          </div>

        </div>
        <div className="contentarea">
          {activeChat.chatId !== undefined &&
          <ChatWindow />
          }
          {activeChat.chatId === undefined &&      

           <ChatIntro />
          }
        </div>        
    </div>
  );
}