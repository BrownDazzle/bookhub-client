import React, { useEffect, useState } from "react";
import styles from "../style";
import ProfileSideBar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent";

const ProfilePage = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className={`${styles.section} nike-container flex py-10 `}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%] md:mt-[28%]">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
};

export default ProfilePage;
