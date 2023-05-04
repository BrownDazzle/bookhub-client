import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';

import { Button } from '.';
//import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/data/avatar.jpg';
import { logOut } from '../actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { createChat, getAdmin } from '../api/ChatRequests';

const UserProfile = ({ setOpenProfile }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  //const { currentColor } = useStateContext();

  const userId = { senderId: user?._id }
  const currentColor = "#f19cef"

  useEffect(() => {
    const sendChat = async () => {
      try {

        const { data } = await createChat(userId);

      } catch (error) {
        console.log(error);
      }
    };
    sendChat();
  }, [user?._id]);

  const handleLogOut = () => {
    dispatch(logOut())
    setOpenProfile(false)
  }


  const userProfileData = [
    {
      icon: <BsCurrencyDollar />,
      title: 'My Profile',
      desc: 'Account Settings',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      link: "/profile"
    },
    {
      icon: <BsShield />,
      title: 'My Inbox',
      desc: 'Messages & Emails',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      link: "/inbox"
    },
    {
      icon: <FiCreditCard />,
      title: 'My Orders',
      desc: 'To-do and Daily Tasks',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      link: "/orders"
    },
  ];

  return (
    <div className="nav-item fixed right-1 top-16 bg-[#f02d34] text-white  dark:bg-[#42464D] p-8 rounded-lg w-96 z-[250] ">
      <div className="flex justify-end items-center">
        <button
          type="button"
          onClick={() => setOpenProfile(false)}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className={` text-2xl p-3 text-white hover:drop-shadow-xl hover:bg-light-white`}
        >
          {<MdOutlineCancel className='text-white ' />}
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24 object-cover"
          src={user?.avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-white-200"> {user?.firstname} {user?.lastname} </p>
          <p className="text-white-500 text-sm dark:text-white-400">  Student   </p>
          <p className="text-white-500 text-sm font-semibold dark:text-white-400"> {user?.email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <a href={item.link} key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-white cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-white"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-white-200 ">{item.title}</p>
              <p className="text-white-500 text-sm dark:text-white-400"> {item.desc} </p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => handleLogOut()}
          style={{ backgroundColor: currentColor, color: "white", borderRadius: "10px" }}
          className={`p-3 w-full hover:drop-shadow-xl hover:bg-white-400`}
        >
          Logout
        </button>
      </div>
    </div>

  );
};

export default UserProfile;
