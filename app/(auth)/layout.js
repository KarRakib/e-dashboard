import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            {children}
        </div>
    );
}

export default AuthLayout;
