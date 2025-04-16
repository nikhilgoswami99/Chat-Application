import React from "react";
import styles from "./chatItem.module.css";
import AvatarCard from "../avatarCard/avatarCard";

import { Link } from "react-router-dom";
import { memo } from "react";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`chat/${_id}`} className={styles.link} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
          padding: "1rem",
        }}
      >
        <AvatarCard avatar={avatar}></AvatarCard>
        <div className={styles.textBox}>
          <p className={styles.name}>{name}</p>
          {newMessageAlert && (
            <p className={styles.newMessage}>
              {newMessageAlert.count} New Messages
            </p>
          )}
        </div>
        {isOnline && <span className={styles.onlineDot}></span>}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
