import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addMessage, getMessages } from "../../api/MessageRequests";
import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import { useSelector } from "react-redux";

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }
  // fetching data for header
  useEffect(() => {
    const userId = "642d3050ddf4ec5a90cf5fb1"
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        console.log("CHATUser", data)
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])



  // Send Message
  const handleSend = async (e) => {
    e.preventDefault()
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat?._id,
    }
    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId })
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    }
    catch
    {
      console.log("error")
    }
  }

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }

  }, [receivedMessage])



  const scroll = useRef();
  const imageRef = useRef();
  return (
    <>
      <div className="flex rounded-[1rem] bg-white flex-col">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="flex flex-col p-[1rem]">
              <div className="follower">
                <div>
                  <img
                    src={user?.profilePicture}
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {user?.firstname} {user?.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="flex flex-col gap-[0.5rem] p-[1.5rem] md:overflow-hidden overflow-auto md:hover:overflow-auto" >
              {messages.map((message) => (
                <>
                  <div ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="flex justify-between bg-white h-[3.5rem] w-full items-center gap-[1rem] p-[1.4rem] self-end rounded-[1rem]">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="flex items-center justify-center px-[12px] rounded-[15px] border-none text-[1rem] uppercase bg-[#ff0de4] text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out" onClick={handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
