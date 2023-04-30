import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";

const Conversations = () => {
  const [conversations, setConversations] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getConversations = () => {
      const unsub = onSnapshot(
        doc(db, "userConversations", currentUser.uid),
        (doc) => {
          setConversations(doc.data() || []);
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getConversations();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  // first element is chatId and second is object
  console.log(Object.entries(conversations));
  return (
    <div className="conversations">
      {Object.entries(conversations)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo?.photoURL || chat[1].userInfo?.img}
              alt=""
            />
            <div className="userChatInfo">
              <span>{chat[1].userInfo?.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Conversations;
