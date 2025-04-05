import React from "react";
import styles from "./chatList.module.css";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  const dummyChats = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  return (
    <div className={styles.chatListContainer}>
      {dummyChats.map((chat) => (
        <div key={chat.id} className={styles.chatItem}>
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
