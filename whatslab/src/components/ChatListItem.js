import React from "react";
import './ChatListItem.css';
export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="imagem-avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">João Hélio</div>
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