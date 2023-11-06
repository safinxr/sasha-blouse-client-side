import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import signUpJaon from '../../assets/signup.json'
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { ContextAuth } from '../../Context/Context';

const SignIn = () => {
    return (
        <div className='mx-w'>
            <div className=''>
                <div>
                    <h2>Sign Up</h2>
                </div>
                <div>
                    <img src="https://nextstar-convention.web.app/assets/singin-9baebc21.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;