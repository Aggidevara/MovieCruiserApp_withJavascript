import React from 'react';

export default function Chathistory(props){
    return (
        <ul className="message-list">                 
          {
             props.chathistory.map(message => (
           
             <li key={message.id}>
               <div>
                 {message.senderId}
               </div>
               <div>
                 {message.text}
               </div>
             </li>
              )
         )
         }
       </ul>
      )
}
