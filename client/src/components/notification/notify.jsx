import React, { memo, useState } from "react";
import styles from "./notify.module.css";

import { sampleNotifications } from "../../sampleData/sampleData";

const Notifications = () => {
  // const { isLoading, data, error, isError } = useGetNotificationsQuery();
  // const [acceptRequest] = useAsyncMutation(useAcceptFriendRequestMutation);

  const friendRequestHandler = async ({ _id, accept }) => {
   
  };

  let [isNotification, setIsNotification] = useState(true);

  let isLoading = false;

  // let isNotification = true;


  const closeHandler = () => {
    setIsNotification((prev) => !prev);
  }

  

  return (
    <div className={`${styles.dialog} ${isNotification ? styles.show : ""}`}>
      <div className={styles.container}>
        <div className={styles.titleBar}>
          <h2>Notifications</h2>
          <button className={styles.closeBtn} onClick={closeHandler}>X</button>
        </div>

        {isLoading ? (
          <div className={styles.skeleton}></div>
        ) : (
          <>
            {sampleNotifications.length > 0 ? (
              sampleNotifications.map(({ sender, _id }) => (
                <NotificationItem
                  sender={sender}
                  _id={_id}
                  handler={friendRequestHandler}
                  key={_id}
                />
              ))
            ) : (
              <p className={styles.noNotification}>0 notifications</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name } = sender;
  return (
    <div className={styles.item}>
      <div className={styles.avatar}></div>
      <p className={styles.message}>{`${name} sent you a friend request.`}</p>
      <div className={styles.actions}>
        <button className={styles.acceptBtn} onClick={() => handler({ _id, accept: true })}>Accept</button>
        <button className={styles.rejectBtn} onClick={() => handler({ _id, accept: false })}>Reject</button>
      </div>
    </div>
  );
});

export default Notifications;
