import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import signInJaon from '../../assets/signin.json'
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { ContextAuth } from '../../Context/Context';
import { PulseLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';



const SignIn = () => {
    const [errorText, setErrorText] = useState(null)
    const [seen, setSeen] = useState(true)
    const provider = new GoogleAuthProvider();
    const {  emailPassSignIn, upProfile, googleSignIn, shortLoading, setLoading } = useContext(ContextAuth)
    const navigate = useNavigate()



    // Form submit🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱
    const formSubmit = e => {
        setErrorText(null)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


         emailPassSignIn(email, password)
            .then(res => {
                navigate('/')
            })
            .catch(error => {
                setLoading(false)
                setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
            })
    }


    // Google Handel 🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱
    const googleHandel = (xProvider) => {
        googleSignIn(xProvider)
            .then(() => {
                navigate('/')
            }).catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <div className='max-w-4xl mx-auto my-20 px-3 md:px-8 lg:px-0'>
            <Helmet>
                <title>Sign in - Sasha Blouse</title>
            </Helmet>
            <div className='black-shadow2 flex justify-center rounded-md'>


                <div className='flex-1  rounded-s-m hidden md:flex'>
                    <div className='p-5 md:flex md:items-center h-full'>
                        <Lottie animationData={signInJaon} loop={true} />
                    </div>
                </div>


                <div className='flex-1 black-bg rounded-md md:rounded-l-none rounded-r-md'>
                    <div className='p-8'>
                        <h2 className='text-white uppercase text-xl text-center mt-2 mb-6'>Sign Up</h2>
                        <form onSubmit={formSubmit}
                            className='lg:px-5'
                        >
     
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
                                {shortLoading ? <PulseLoader color="#231F20" size={10} /> : "SIGN UP"}
                            </button>
                        </form>

                        <div className='lg:px-5'>
                            <p className='my-5 ms-2 text-start text-white'>Don't have an account? <Link className='underline underline-offset-4' to='/Signup'>Sign up</Link>
                            </p>

                            <div className='mb-4 flex justify-center items-center'>
                                <div className='border w-full mx-5'></div>
                                <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                                <div className='border w-full mx-5'></div>
                            </div>
                            <button onClick={() => googleHandel(provider)} className='w-full bg-white py-2 rounded-lg black-text uppercase font-semibold active:scale-95 mb-8 flex justify-center items-center'>
                                SIGN UP WITH <span className='ms-2'><BsGoogle></BsGoogle></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;