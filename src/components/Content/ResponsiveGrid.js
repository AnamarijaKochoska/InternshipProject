import React from 'react';
import { Box } from '@mui/material';
import Card from './Card';

const ResponsiveGrid = ({ searchTerm }) => {
  const cardData = [
    {
      id: 1,
      name: 'Chanel',
      role: 'Chanel is a French luxury fashion house...',
      image: 'https://images.seeklogo.com/logo-png/28/1/chanel-logo-png_seeklogo-284915.png',
      url: 'https://www.chanel.com/',
    },
    {
      id: 2,
      name: 'Christian Dior',
      role: 'Dior is a French multinational luxury goods company...',
      image: 'https://i.pinimg.com/736x/7d/ca/1f/7dca1f0a4ae6d692592b382c3e307dc4.jpg',
      url: 'https://www.dior.com/',
    },
    {
      id: 3,
      name: 'Louis Vuitton',
      role: 'Louis Vuitton is one of the world’s leading international fashion houses...',
      image: 'https://turbologo.com/articles/wp-content/uploads/2020/01/louis-vuitton-primary-logo.png',
      url: 'https://en.louisvuitton.com/eng-nl/homepage?dispatchCountry=AT',
    },
  ];

  const filteredData = cardData.filter(({ name, role }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ backgroundColor: '#efdaf0', padding: '40px', borderRadius: '10px' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: '20px',
          justifyContent: 'center',
          marginLeft: { md: '80px' },
          marginRight: { xs: '50px' },
        }}
      >
        {filteredData.map(({ id, name, role, image, url }) => (
          <Card key={id} name={name} role={role} image={image} url={url} />
        ))}
      </Box>
    </Box>
  );
};

export default ResponsiveGrid;