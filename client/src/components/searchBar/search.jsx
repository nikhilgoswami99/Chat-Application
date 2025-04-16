import React, { useState } from "react";
import styles from "./search.module.css";
import UserItem from "../userItem/userItem";
import { sampleUsers } from "../../sampleData/sampleData";

import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [sendFriendRequest, isLoadingSendFriendRequest] = useState(false);

  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = () => {};

  return (
    <div className={styles.dialog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Find People</h2>

        <div className={styles.searchBox}>
          <span className={styles.icon}>
            <FaSearch />
          </span>
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>

        <ul className={styles.userList}>
          {users.map((user) => {
            return (
              <UserItem
                key={user._id}
                user={user}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              ></UserItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
