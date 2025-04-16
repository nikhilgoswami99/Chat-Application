import React, { useState } from "react";
import styles from "./newGroup.module.css";
import { sampleUsers } from "../../sampleData/sampleData";

import UserItem from "../userItem/userItem";

const NewGroup = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };
  const submitHandler = () => {};
  const closeHandler = () => {};

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogBox}>
        <h2 className={styles.title}>New Group</h2>

        <input type="text" placeholder="Group Name" className={styles.input} />

        <p className={styles.label}>Members</p>

        <div className={styles.membersList}>
          {sampleUsers.map((user) => {
            return (
              <UserItem
                key={user._id}
                user={user}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(user._id)}
              />
            );
          })}
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={closeHandler}>
            Cancel
          </button>
          <button className={styles.createButton} onClick={submitHandler}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGroup;
