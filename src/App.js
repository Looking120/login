import React from 'react';
import { motion } from 'framer-motion';
import AuthPage from './pages/AuthPage';

const App = () => {
    return (
        <div style={{ minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,30,1), rgba(0,0,60,1), rgba(50,0,0,1))',
                    backgroundSize: '400% 400%',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <AuthPage />
            </div>
        </div>
    );
}

export default App;
