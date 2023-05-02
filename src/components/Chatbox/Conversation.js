import React, { useContext } from "react";
import video from "../../images/video.png"
import face from "../../images/face.png"
import tweet from "../../images/tweet.png"
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";


const Conversation = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
          {data.user?.displayName}</span>
        <div className="chatIcons">
          <a href="https://www.monkey.app/#/home"><img src={video} alt="" /></a>
          <a href="https://www.facebook.com/login/"><img src={face} alt="" /></a>
          <a href="https://twitter.com/"><img src={tweet} alt="" /></a>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Conversation;