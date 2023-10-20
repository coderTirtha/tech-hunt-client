import { useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] = useState(true);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
    </>
    return (
        <div className='relative'>
            <div className='navbar justify-between z-0'>
                <div className='navbar-start'>
                    <img src={logo} alt="" className='w-[60px]' />
                    <h1 className='text-3xl font-bold'>Tech Hunt</h1>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end hidden md:flex gap-4'>
                    <div className='tooltip tooltip-bottom' data-tip="See Cart">
                        <label tabIndex={0} className="cursor-pointer">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-red-500 text-white">8</span>
                            </div>
                        </label>
                    </div>
                    <button className='btn'>Login</button>
                    <button className='btn btn-outline text-blue'>Register</button>
                </div>
                <div className='md:hidden'>
                    <button className='btn' onClick={() => setOpen(true)}><AiOutlineMenu /></button>
                </div>
            </div>
            <div className={`${open ? "w-[100vw]" : "w-0"} duration-300 md:hidden h-screen top-0 absolute bg-[#28282869] z-1000`}>
                <div className={`${open ? 'w-72' : 'w-0'} h-screen bg-blue`}>
                    <button className={`bg-gray-300 p-4 rounded-md ${!open && 'scale-0'} duration-300 m-2`} onClick={() => setOpen(false)}><RxCross1 /></button>
                    <div className={`${!open && 'scale-0'} duration-200 p-2 flex flex-col justify-between h-[80vh]`}>
                        <ul className="menu menu-vertical">
                            {links}
                        </ul>
                        <div className='flex flex-col gap-2'>
                            <button className='btn btn-outline'>
                                <label tabIndex={0} className="">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item bg-red-500 text-white">8</span>
                                    </div>
                                </label>
                                See Cart
                            </button>
                            <div className='flex justify-between gap-2'>
                                <button className='btn flex-1'>Login</button>
                                <button className='btn btn-outline flex-1'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;