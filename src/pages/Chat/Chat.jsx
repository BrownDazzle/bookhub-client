import React, { useRef, useState, useEffect } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../../components/Coversation/Conversation";
import "./Chat.css";
import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { FlexContent } from "../../components";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from '../../data/data.js';

const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const user = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        console.log("CHA", data)
        const chat = data[0]
        setCurrentChat(chat)
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user?._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user?._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user?._id);
    const online = onlineUsers.find((user) => user?.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="relative flex flex-row gap-1 pt-20 justify-center">
      {/* Left Side */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 bg-white h-auto rounded-[1rem] overflow-scroll-hidden p-1">
          <FlexContent endpoint={sneaker} />
        </div>
      </div>

      {/* Right Side */}

      <div className="flex flex-col gap-1">
        <ChatBox
          chat={currentChat}
          currentUser={user?._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
