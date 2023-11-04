import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

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
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/'>HOME</NavLink></li>

    </>
    return (
        <nav className='bg-gray-300 '>
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;