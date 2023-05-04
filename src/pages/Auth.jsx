import React, { useState } from "react";
import Logo from "../assets/instagram.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from "../actions/AuthActions";
import { HiOutlineUserAdd } from 'react-icons/hi';
import bgImg from "../assets/flyers/flyer3.png"

const Auth = () => {
    const initialState = {
        profilePic: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: "",
    };
    const [loading, setLoading] = useState(false)
    //const loading = useSelector((state) => state.authReducer.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);

    const [data, setData] = useState(initialState);

    const [confirmPass, setConfirmPass] = useState(true);
    const [avatar, setAvatar] = useState(null);

    // const dispatch = useDispatch()
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (e) {
            // save this data1111 and send to server
            const dataVideo = reader.result; // reader.result // ----------------- data1111
            setData({ ...data, profilePic: dataVideo });
        };
        reader.readAsBinaryString(file);
        setAvatar(file);
    };

    // Reset Form
    const resetForm = () => {
        setData(initialState);
        setConfirmPass(confirmPass);
    };

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Form Submission
    const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data, navigate))
                : setConfirmPass(false);
            console.log(data)
        } else {
            dispatch(logIn(data, navigate));
        }
    };

    const backgroundImage = `url(${bgImg})`;
    const style = { backgroundImage };

    return (
        <div className="flex items-center justify-center md:flex-col h-[100vh] gap-4 relative bg-cover bg-center" style={style}>
            {/* left side */}

            <div className="gap-2">
                <img src={Logo} alt="" className="w-4 h-4" />

                <div className="">
                    <h1 className="text-xl text-[#f02d34] font-semibold">bookhub</h1>
                    <h6 className="text-md text-white">Explore the world through knowledge</h6>
                </div>
            </div>

            {/* right form side */}

            <div className="flex justify-center md:w-full">
                <form className="flex items-center justify-center flex-col gap-2 rounded-xl p-1" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold">{isSignUp ? "Register" : "Login"}</h3>
                    {isSignUp && (<div className="mt-2 flex items-center">
                        <span className="inline-block h-16 w-16 rounded-full overflow-hidden">
                            {avatar ? (
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="avatar"
                                    className="h-full w-full object-cover rounded-full"
                                />
                            ) : (
                                <HiOutlineUserAdd className="h-16 w-16 rounded-full" />
                            )}
                        </span>
                        <label
                            htmlFor="file-input"
                            className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <span>Upload profile photo</span>
                            <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept="images/*"
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div>)}
                    {isSignUp && (
                        <div className="flex w-full items-center justify-center md:flex-col gap-2">
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                                name="firstname"
                                value={data.firstname}
                                onChange={handleChange}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                                name="lastname"
                                value={data.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            required
                            type="text"
                            placeholder="Email"
                            className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-center md:flex-col gap-2">
                        <input
                            required
                            type="password"
                            className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        {isSignUp && (
                            <input
                                required
                                type="password"
                                className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                                name="confirmpass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                        )}
                    </div>

                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span>
                    <div>
                        <span
                            style={{
                                fontSize: "14px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                color: "white"
                            }}
                            onClick={() => {
                                resetForm();
                                setIsSignUp((prev) => !prev);
                            }}
                        >
                            {isSignUp
                                ? "Already have an account Login"
                                : "Don't have an account Sign up"}
                        </span>
                        <button
                            className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-[#f02d34] transition-all duration-700 ease-in-out w-15 h-2 p-3 mt-2 flex-end"
                            type="Submit"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
