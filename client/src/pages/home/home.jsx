import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Select a friend to chat</p>
    </div>
  );
};

export default Home;
