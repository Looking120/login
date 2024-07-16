import React, { useState } from 'react';
import { Typography, TextField, IconButton, Button, Link, Box, Grid } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@mui/system';
import signImg from '../../assets/img/undraw_.svg';

// Animation pour l'image
const zoomAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

// Animation pour les transitions de formulaire
const slideRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

// Animation pour le zoom du bouton
const zoomButtonAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const LoginForm = ({ handleSwitch }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin = () => {
        // Handle Google login
    };

    const handleLinkedInLogin = () => {
        // Handle LinkedIn login
    };

    const handleSignIn = () => {
        setAnimate(true);
        // You might want to reset the animation state after animation ends
        setTimeout(() => setAnimate(false), 1000); // Animation duration
    };

    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ height: '100vh', margin: 0, padding: 2 }}>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={5} sx={{ display: 'flex', alignItems: 'stretch' }}>
                <Box
                    component="img"
                    src={signImg} // Remplacez par l'image appropriée
                    alt="Sign Up Image"
                    sx={{
                        width: '50%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: `${zoomAnimation} 6s ease-in-out infinite`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
                <Box sx={{ width: '1rem' }} /> {/* Box pour l'espacement */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="50%" // Ajustez la largeur pour équilibrer avec l'image
                    height="100%" // Assure que le formulaire occupe toute la hauteur
                    bgcolor="rgba(255, 255, 255, 0.9)"
                    borderRadius="10px"
                    p={4}
                    color="rgb(27, 26, 26)"
                    sx={{
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                        animation: `${slideRight} 1s ease-out`,
                        textAlign: 'center', // Centrer le texte du formulaire
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        margin="normal"
                        sx={{
                            '& .MuiInputLabel-root': {
                                textAlign: 'center', // Centrer le label
                            },
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '& fieldset': {
                                    borderColor: '#aaa',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#1976d2',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1976d2',
                                },
                            },
                            '& .MuiInputBase-input': {
                                backgroundColor: 'transparent',
                                height: '1.2rem',
                                transition: 'background-color 0.3s ease',
                                '&:focus': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                },
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
                            mt: '1rem'
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Mot de passe"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    edge="end"
                                    onClick={handleClickShowPassword}
                                    aria-label="toggle password visibility"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                        sx={{
                            '& .MuiInputLabel-root': {
                                textAlign: 'center', // Centrer le label
                            },
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                '& fieldset': {
                                    borderColor: '#aaa',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#1976d2',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1976d2',
                                },
                            },
                            '& .MuiInputBase-input': {
                                backgroundColor: 'transparent',
                                height: '1.2rem',
                                transition: 'background-color 0.3s ease',
                                '&:focus': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                },
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
                            mt: '1rem'
                        }}
                    />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        mt={3}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
                            onClick={handleGoogleLogin}
                            sx={{
                                borderColor: '#ea4335',
                                color: '#ea4335',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                '&:hover': {
                                    borderColor: '#ea4335',
                                    backgroundColor: '#f8dcd8',
                                    transform: 'scale(1.05)',
                                },
                                flexGrow: 1,
                                mr: 2,
                            }}
                        >
                            Google
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<LinkedInIcon sx={{ color: '#0077b5' }} />}
                            onClick={handleLinkedInLogin}
                            sx={{
                                borderColor: '#0077b5',
                                color: '#0077b5',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                                '&:hover': {
                                    borderColor: '#0077b5',
                                    backgroundColor: '#d1e5f0',
                                    transform: 'scale(1.05)',
                                },
                                flexGrow: 1,
                                ml: 2,
                            }}
                        >
                            LinkedIn
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                        mt={2}
                        href="#"
                        variant="body2"
                        color="#e20c89e8"
                        fontWeight="bold"
                        underline="none"
                    >
                        No account?
                        <Link
                            href="#"
                            variant="body2"
                            color="#e20c89e8"
                            fontWeight="bold"
                            underline="none"
                            onClick={handleSwitch}
                        >
                           Sign Up
                        </Link>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSignIn}
                        sx={{
                            mt: 1,
                            backgroundColor: '#e20c89',
                            '&:hover': {
                                backgroundColor: '#d30b77',
                            },
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            animation: animate ? `${zoomButtonAnimation} 1s` : 'none',
                        }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginForm;
