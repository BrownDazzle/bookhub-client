import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';
import Search from './Search.jsx';
import { people01, people03 } from '../assets/assets/index.js';
import { Notification, UserProfile } from './';
import { createChat, getAdmin } from '../api/ChatRequests.js';



const Navbar = () => {

    const user = useSelector((state) => state.authReducer.authData);

    const [navState, setNavState] = useState(false);
    const [openSearchToggle, setOpenSearchToggle] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)

    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onSearchToggle = () => {
        setOpenSearchToggle(true)
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <>
            <header className={'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center bg-[#f02d34] z-[200]'
            }
            >
                <nav className='flex items-center justify-between nike-container'>
                    <a href='/' className='flex items-center'>
                        <p className='w-10 font-extrabold text-2xl text-slate-100 '>bookhub</p>
                    </a>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'>
                            <MagnifyingGlassIcon onClick={onSearchToggle} className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                            </button>
                        </li>
                        {!user ? <li className='grid items-center ml-4 '>
                            <a href='/auth'
                                className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                            >
                                Login
                            </a> </li> : (
                            <>
                                <li className='grid items-center'>
                                    <button type='button' onClick={() => setOpenNotification(!openNotification)} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                        <RiNotification3Line className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-red-900 text-slate-100 shadow-slate-900' : 'bg-red-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                                    </button>
                                </li>
                                <div
                                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                                    onClick={() => setOpenProfile(true)}
                                >
                                    <img
                                        className="rounded-full w-12 h-12 object-cover"
                                        src={user.avatar}
                                        alt="user-profile"
                                    />
                                    <p>
                                        <span className="text-white text-14">Hi,</span>{' '}
                                        <span className="text-white font-bold ml-1 text-14">
                                            {user.firstname}
                                        </span>
                                    </p>
                                    <MdKeyboardArrowDown className="text-white text-14" />
                                </div>
                            </>
                        )
                        }

                    </ul>
                </nav>
            </header>
            {openSearchToggle ? <Search setOpenSearchToggle={setOpenSearchToggle} /> : null}
            {openProfile ? <UserProfile setOpenProfile={setOpenProfile} /> : null}
            {openNotification ? <Notification setOpenNotification={setOpenNotification} /> : null}

        </>
    )
}

export default Navbar