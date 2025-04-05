import React from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import ChatList from "./components/chatList/chatList";

const AppLayout = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <aside className={styles.sidebar}>
          <ChatList />
        </aside>
        <main className={styles.outlet}>
          <Outlet />
        </main>
        <aside className={styles.profile}>Profile Section</aside>
      </section>
    </>
  );
};

export default AppLayout;
