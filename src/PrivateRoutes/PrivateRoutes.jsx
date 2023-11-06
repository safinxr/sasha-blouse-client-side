import React from 'react';
import { useContext } from 'react';
import { ContextAuth } from '../Context/Context'
import { PulseLoader } from 'react-spinners';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, shortLoading } = useContext(ContextAuth)
    if (shortLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to='/signin'></Navigate>
    }
};

export default PrivateRoutes;