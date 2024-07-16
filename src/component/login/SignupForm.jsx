import React, { useState } from 'react';
import { Typography, TextField, IconButton, Button, Link, Box, Grid } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { keyframes } from '@mui/system';
import loginImg from '../../assets/img/reminder.svg';
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


const SignupForm = ({ handleSwitch }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ height: '100vh', margin: 0, padding: 2 }}>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={5} sx={{ display: 'flex', alignItems: 'stretch' }}>
                <Box
                    component="img"
                    src={loginImg} 
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
                <Box sx={{ width: '1rem' }} /> 
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
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                        animation: `${slideRight} 1s ease-out`,
                        textAlign: 'center', // Centrer le texte du formulaire
                    }}
                >
                    <Typography variant="h5" component="h1" gutterBottom>
                       Sign Up
                    </Typography>
                    <TextField
                        fullWidth
                        label="User Name"
                        variant="outlined"
                        type="name"
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
                                height: '0.8rem',
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
                        }}
                    />
                  
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
                                height: '0.8rem',
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
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
                                height: '0.7em',
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Confirmer le mot de passe"
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
                                height: '0.7rem',
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '8px',
                            },
                            width: '100%',
                        }}
                    />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                        mt={2}
                    >
                        <Link
                            href="#"
                            variant="body2"
                            color="#e20c89e8"
                            fontWeight="bold"
                            underline="none"
                            onClick={handleSwitch}
                        >
                            Déjà un compte?
                        </Link>
                        <Link
                            href="#"
                            variant="body2"
                            color="#e20c89e8"
                            fontWeight="bold"
                            underline="none"
                            onClick={handleSwitch}
                        >
                            Connexion
                        </Link>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            backgroundColor: '#e20c89',
                            '&:hover': {
                                backgroundColor: '#d30b77',
                            },
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        S'inscrire
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignupForm;
