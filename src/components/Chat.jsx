import React from "react";
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";

const Chat = ({messages,username}) => {
  const keys = Object.keys(messages);
  var messageElements = []
  keys.forEach((messageKey) => {
    const avatar = messages[messageKey]["username"][0].toUpperCase()
    if(messages[messageKey]["username"] === username){
      messageElements.push(<SenderMessage avatar={<Avatar>{avatar}</Avatar>}>
        {messages[messageKey]["message"]}
      </SenderMessage>)
    }else{
      messageElements.push(<ReceiverMessage avatar={<Avatar>{avatar}</Avatar>}>
        {messages[messageKey]["message"]}
      </ReceiverMessage>)
    }
  })
  return(
    
  <div>
    <ChatBox>
      
      {messageElements}
    </ChatBox>
  </div>)
};

export default Chat;
