import React, { useState } from 'react';
import Lottie from "lottie-react";
import signUpJaon from '../../assets/signup.json'
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [errorText, setErrorText] = useState(null)
    const [seen, setSeen] = useState(true)
    // Form submit🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱
    const formSubmit = e => {
        setErrorText(null)
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);


        // if (password.length < 6) {
        //     return setErrorText('password is less than 6 characters')
        // }
        // if (!/[A-Z]/.test(password)) {
        //     return setErrorText("password don't have a capital letter")
        // }

        // if (!/[^A-Za-z0-9]/.test(password)) {
        //     return setErrorText("password don't have a special character")
        // }
        // emailPassSignUp(email, password)
        //     .then(res => {
        //         upProfile(name)
        //             .then(() => {
        //                alert('yo done')

        //                 setTimeout(function () {
        //                     navigate('/')
        //                 }, 1500);
        //             }).catch((error) => {
        //                 console.log(error.message);
        //                 setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
        //             });




        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //         setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
        //     })


    }

    return (
        <div className='max-w-4xl mx-auto my-20 px-3 md:px-8 lg:px-0'>
            <div className='black-shadow2 flex justify-center rounded-md'>


                <div className='flex-1  rounded-s-m hidden md:flex'>
                    <div className='p-10 md:flex md:items-center h-full'>
                        <Lottie animationData={signUpJaon} loop={true} />
                    </div>
                </div>


                <div className='flex-1 black-bg rounded-md md:rounded-l-none rounded-r-md'>
                    <div className='p-8'>
                        <h2 className='text-white uppercase text-xl text-center mt-2 mb-6'>Sign Up</h2>
                        <form onSubmit={formSubmit}
                            className='lg:px-5'
                        >
                            <div className='bg-white mb-8 flex items-center py-1.5 px-2 rounded'>
                                <BiSolidUser className='text-xl mr-2'></BiSolidUser>
                                <input
                                    className='w-full bg-transparent focus:outline-none text-lg '
                                    type="name"
                                    name="name"
                                    placeholder='Name'
                                    required />
                            </div>
                            <div className='bg-white mb-8 flex items-center py-1.5 px-2 rounded'>
                                <MdEmail className='text-xl mr-2'></MdEmail>
                                <input
                                    className='w-full bg-transparent focus:outline-none text-lg '
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    required />
                            </div>
                            <div className='bg-white mb-8 flex items-center py-1.5 px-2 rounded'>
                                <RiLockPasswordFill className='text-xl mr-2'></RiLockPasswordFill>
                                <input
                                    className='w-full bg-transparent focus:outline-none text-lg '
                                    type={seen ? "password" : "text"}
                                    name="password"
                                    placeholder='Password'
                                    required />
                                <label className="swap">

                                    <input onChange={() => setSeen(!seen)} type="checkbox" />

                                    <FaEyeSlash className="swap-on fill-current text-lg"></FaEyeSlash>

                                    <IoEyeSharp className="swap-off fill-current text-lg"></IoEyeSharp>

                                </label>
                            </div>


                            {
                                errorText && <>
                                    <p className='mb-2 mt-[-4px] ms-2 text-red-500 text-sm'>{errorText}</p>
                                </>
                            }

                            <button type="submit" className='w-full bg-white py-2 rounded-lg black-text uppercase font-semibold active:scale-95'>
                                SIGN UP
                            </button>
                        </form>

                        <div className='lg:px-5'>
                            <p className='my-5 ms-2 text-start text-white'>Already have an account? <Link className='underline underline-offset-4' to='/Signin'>Sign in</Link>
                            </p>

                            <div className='mb-4 flex justify-center items-center'>
                                <div className='border w-full mx-5'></div>
                                <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                                <div className='border w-full mx-5'></div>
                            </div>
                            <button type="submit" className='w-full bg-white py-2 rounded-lg black-text uppercase font-semibold active:scale-95 mb-8 flex justify-center items-center'>
                                SIGN UP WITH <span className='ms-2'><BsGoogle></BsGoogle></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;