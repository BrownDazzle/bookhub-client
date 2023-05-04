import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/data/dummy';
//import { useStateContext } from '../contexts/ContextProvider';
const NotificationC = ({ message, type }) => {
  const notificationClass =
    type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
          'bg-blue-500 text-white';

  return (
    <div className={`p-4 ${notificationClass}`}>
      {message}
    </div>
  );
};


const Notification = ({ setOpenNotification }) => {
  //const { currentColor } = useStateContext();
  const currentColor = "#f18f900"
  const [notification, setNotification] = useState(null);

  const handleButtonClick = () => {
    setNotification({ message: 'Notification message', type: 'success' });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="nav-item fixed right-5 md:right-40 top-16 bg-[#f02d34] text-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-[250]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-red text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        <button
          type="button"
          onClick={() => setOpenNotification(false)}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className={` text-2xl p-3 hover:drop-shadow-xl hover:bg-light-white`}
        >
          {<MdOutlineCancel />}
        </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-white-200">{item.message}</p>
              <p className="text-white-500 text-sm dark:text-white-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
