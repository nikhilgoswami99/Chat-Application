import React from "react";
import styles from "./avatarCard.module.css";
// import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <div className={styles.stack}>
      <div className={styles.avatarGroup}>
        <div className={styles.avatarBox}>
          {avatar.slice(0, max).map((i, index) => (
            <img
              key={index}
              src={i}
              alt={`Avatar ${index}`}
              className={styles.avatar}
              style={{
                left: window.innerWidth < 600 ? `${0.5 + index}rem` : `${index}rem`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
