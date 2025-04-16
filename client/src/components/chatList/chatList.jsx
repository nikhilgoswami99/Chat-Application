import React from "react";
import styles from "./chatList.module.css";
import ChatItem from "../chatItem/chatItem";

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
  return (
    <div className={styles.chatListContainer}>
      {chats?.map((chat, index) => {
        const { avatar, _id, name, groupChat, members } = chat;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) =>
          onlineUsers.includes(member)
        );

        return (
          <ChatItem
          index={index}
          newMessageAlert={newMessageAlert}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          _id={_id}
          key={_id}
          groupChat={groupChat}
          sameSender={chatId === _id}
          handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
