import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './navbar.css'
import { FiLogIn, FiUser } from 'react-icons/fi';

const Navbar = () => {
    const [navBg, setNavBg] = useState(false)
    let { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            setNavBg(false)

        }
        else {
            setNavBg(true)
        }
    }, [pathname])

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setNavBg(true)
        }
        else {
            if (pathname === '/') {
                return setNavBg(false)
            }
            setNavBg(true)
        }
    })

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
            }
        >
            HOME
        </NavLink></li>
        <li><NavLink
            to="/fooditems"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
            }
        >
            Food Items
        </NavLink></li>
        <li><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "mx-2 relative active-underline" : "mx-2 relative nav-underline"
            }
        >
            Blog
        </NavLink></li>
    </>
    const smNavLink = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/fooditems'>FOOD ITEMS</NavLink></li>
        <li><NavLink to='/blog'>BLOG</NavLink></li>
        <li><NavLink to='/'>HOME</NavLink></li>

    </>

    const logIngLink = <>
       
        <Link to='/signin' className="mr-4 relative inline-flex items-center justify-center uppercase   py-2 px-5 overflow-hidden font-semibold black-text transition duration-300 ease-out border-2 border-[#231F20] rounded shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full black-bg group-hover:translate-x-0 ease">
                <FiLogIn className='text-2xl '></FiLogIn>               
            </span>
            <span className="absolute flex items-center justify-center w-full h-full black-text transition-all duration-300 transform group-hover:translate-x-full ease">SIGN IN</span>
            <span className="relative invisible">SIGN IN00</span>
        </Link>
        <Link to='/signup' className="relative inline-flex items-center justify-center uppercase   py-2 px-5 overflow-hidden font-semibold black-text transition duration-300 ease-out border-2 border-[#231F20] rounded shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full black-bg group-hover:translate-x-0 ease">
                <FiLogIn className='text-2xl '></FiLogIn>               
            </span>
            <span className="absolute flex items-center justify-center w-full h-full black-text transition-all duration-300 transform group-hover:translate-x-full ease">SIGN UP</span>
            <span className="relative invisible">SIGN UP0</span>
        </Link>
    </>
    return (
        <nav className= {navBg ? "sticky top-0 z-10 bg-white shadow-lg" : "sticky top-0 z-10"}>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {smNavLink}
                        </ul>
                    </div>
                    <Link to='/'><div className='flex items-center'>
                        <img className='w-14' src="https://i.ibb.co/rMkd0wL/chef.png" alt="" />
                        <p className='agbalumo leading-5 text-xl black-text'>Sasha <br /> Blouse</p>

                    </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-base font-semibold black-text uppercase tracking-widest">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {logIngLink}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;