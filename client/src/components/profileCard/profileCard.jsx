import React from "react";
import styles from "./profileCard.module.css";
import moment from "moment";
// import { transformImage } from "../../lib/features";
import {
  FaUser as FaceIcon,
  FaAt as UserNameIcon,
  FaCalendarAlt as CalendarIcon,
} from "react-icons/fa"; 

const Profile = ({ user }) => {
  return (
    <div className={styles.stack}>
      <img
        src={user?.avatar?.url || "https://www.w3schools.com/howto/img_avatar.png"}
        alt="User Avatar"
        className={styles.avatar}
      />

      <ProfileCard heading="Bio" text={user?.bio || "My name is Nikhil Goswami"} />
      <ProfileCard
        heading="Username"
        text={user?.username || "nikhil.goswami.1999@gmail.com"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading="Name" text={user?.name || "Nikhil Goswami"} Icon={<FaceIcon />} />
      <ProfileCard
        heading="Joined"
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </div>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <div className={styles.card}>
    {Icon && <span className={styles.icon}>{Icon}</span>}

    <div className={styles.textBox}>
      <p className={styles.text}>{text}</p>
      <small className={styles.heading}>{heading}</small>
    </div>
  </div>
);

export default Profile;
