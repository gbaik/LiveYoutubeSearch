import React from 'react';

const Chat = ({ message }) => (
  <div>
    { message.textMessageDetails.messageText }
  </div>
);

export default Chat;