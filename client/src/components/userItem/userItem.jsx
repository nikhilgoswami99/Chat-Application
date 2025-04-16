import React, { memo } from "react";
import styles from "./UserItem.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;

  return (
    <li className={styles.listItem}>
      <div className={styles.row} style={styling}>
        <img src={avatar} alt={name} className={styles.avatar} />

        <p className={styles.name}>{name}</p>

        <button
          className={`${styles.iconButton} ${isAdded ? styles.remove : styles.add}`}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
    </li>
  );
};

export default memo(UserItem);
