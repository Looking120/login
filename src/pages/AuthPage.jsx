import React, { useState } from 'react';
import { keyframes } from '@mui/system';
import LoginForm from '../component/login/LoginForm';
import SignupForm from '../component/login/SignupForm';

// Définir l'animation de changement de couleur
const backgroundAnimation = keyframes`
    0% {
        background-color: black;
    }
    33% {
        background-color: #00008B; /* Bleu foncé */
    }
    66% {
        background-color: red;
    }
    100% {
        background-color: black;
    }
`;

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
            animation: `${backgroundAnimation} 10s ease infinite` // Appliquer l'animation
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
