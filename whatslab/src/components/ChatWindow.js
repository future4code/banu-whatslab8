import React from "react";
import './ChatWindow.css';
import attachment from './imagens/attachment.png';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
                    <div className="chatWindow--name">João Hélio</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                    <img className="chatWindow--headerbuttons-images"  fontSize="small" src="https://icon-library.com/images/search-icon-jpg/search-icon-jpg-18.jpg" alt="searchIcon" />
                    </div>

                    <div>

                        <img className="chatWindow--headerbuttons-images" src={attachment} alt="attached--button"/>                    

                    </div>

                    <div>
                        <img className="chatWindow--headerbuttons-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSef43KPu2A1eeJNKCTtrCwgcBbrVc6Y6fofmGwQLibuA3rFILVjxfHYCB3wY1urkfOGt4&usqp=CAU" alt="MoreVertIcon" />  
                    </div>

                </div>

            </div>
            <div className="chatWindow--body">

            </div>
            <div className="chatWindow--footer">

            </div>
        </div>
    )
}