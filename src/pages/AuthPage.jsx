import React, { useState } from 'react';
import LoginForm from '../component/login/LoginForm';
import SignupForm from '../component/login/SignupForm';



const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${backgroundAnimation} 10s ease infinite` 
        }}>
            {isLogin ? (
                <LoginForm handleSwitch={handleSwitch} />
            ) : (
                <SignupForm handleSwitch={handleSwitch} />
            )}
        </div>
    );
};

export default AuthPage;
