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
          <img src={video} alt="" />
          <img src={face} alt="" />
          <img src={tweet} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Conversation;