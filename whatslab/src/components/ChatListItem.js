import React from "react";
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div 
        className={`chatListItem ${active?'active':''}`}
        onClick={onClick}>

            <img className="chatListItem--avatar" src={data.image} alt="imagem-avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>                
                </div>
                <div className="chatListItem--Line">
                    <div className="chatListItem--lastMsg">
                        <p>ola, como esta? Estou com vontade de comer pizza, are you down? </p>
                    </div>
                </div>            
            </div>
        </div>
    )
}