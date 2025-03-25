import React from 'react';
import { Box, Typography } from '@mui/material';

const Card = ({ name, role, image, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: { xs: '200px', sm: '250px', md: '250px' },
        backgroundColor: '#fff',
        margin: '10px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '120px', sm: '150px' },
          height: { xs: '120px', sm: '150px' },
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 10px',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: '#666' }}>
        {role}
      </Typography>
    </Box>
  );
};

export default Card;