import React, { useState, lazy, Suspense } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";
import {
  FaSearch,
  FaPlus,
  FaUsers,
  FaBell,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const SearchDialog = lazy(() => import("../searchBar/search"));
const NotifcationDialog = lazy(() => import("../notification/notify"));
const NewGroupDialog = lazy(() => import("../newGroup/newGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotified, setIsNotified] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    console.log("Mobile");
    setIsMobile((prev) => !prev);
  };

  const openSearchBar = () => {
    console.log("Search Bar");
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    console.log("New Group");
    setIsNewGroup((prev) => !prev);
  };

  const openNotifications = () => {
    console.log("Notification");
    setIsNotified((prev) => !prev);
  };

  const navigateToGroup = () => {
    console.log("Navigate to Group");
    return navigate("/groups");
  };

  const logoutHandler = () => {
    console.log("Logged Out");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1 className={styles.logo}>Chat</h1>
          <button onClick={handleMobile} className={styles.menuBtn}>
            <FaBars />
          </button>
        </div>

        <div className={styles.right}>
          <IconBtn onClick={openSearchBar} title="Search" icon={<FaSearch />} />
          <IconBtn onClick={openNewGroup} title="New Group" icon={<FaPlus />} />
          <IconBtn
            onClick={navigateToGroup}
            title="Manage Groups"
            icon={<FaUsers />}
          />
          <IconBtn
            onClick={openNotifications}
            title="Notifications"
            icon={<FaBell />}
            badge="3"
          />
          <IconBtn
            onClick={logoutHandler}
            title="Logout"
            icon={<FaSignOutAlt />}
          />
        </div>
      </header>

      {isSearch && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotified && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <NotifcationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, badge }) => {
  return (
    <div className={styles.iconWrapper} onClick={onClick} title={title}>
      {badge ? (
        <div className={styles.badgeContainer}>
          {icon}
          <span className={styles.badge}>{badge}</span>
        </div>
      ) : (
        icon
      )}
    </div>
  );
};

export default Header;
