import React from 'react';
import { Box } from '@mui/material';

function ImageSection() {
    return (
        <Box
            component="img"
            src="reminder.svg"
            alt="Sign Up Image"
            sx={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'cover',
                transition: 'transform 5s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        />
    );
}

export default ImageSection;
