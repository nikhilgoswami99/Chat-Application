import React from "react";
import styles from "./App.module.css";
import { Outlet, useParams } from "react-router-dom";
import Header from "./components/header/header";
import ChatList from "./components/chatList/chatList";
import { samepleChats } from "./sampleData/sampleData";
import Profile from "./components/profileCard/profileCard";

const AppLayout = () => {
  const params = useParams();

  const chatId = params.chatId;

  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("delete chat", _id, groupChat);
    
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <aside className={styles.sidebar}>
          <ChatList
            chats={samepleChats}
            chatId={chatId}
            newMessagesAlert={[{ chatId: chatId, count: 4 }]}
            onlineUsers={["1", "2"]}
            handleDeleteChat={handleDeleteChat}
          />
        </aside>
        <main className={styles.outlet}>
          <Outlet />
        </main>
        <aside className={styles.profile}>
          <Profile></Profile>
        </aside>
      </section>
    </>
  );
};

export default AppLayout;
