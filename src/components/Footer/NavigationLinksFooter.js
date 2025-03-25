import React from 'react';
import { Box, Link } from '@mui/material';

const NavigationLinks = () => {
  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', 
      gap: '18px',
      textAlign: 'center',
      flexWrap: 'wrap',
      marginTop: { xs: '0', sm: '230px', md: '250px' },
    }}
  >
              <Link href="https://www.canva.com/learn/unique-inspiring-about-page/" color="#FFFFFF" sx={{ textDecoration: 'underline', fontWeight: '400' }}>
                About Us
              </Link>
              <Link href="https://www.giftcards.at/geschenkkarten/" color="#FFFFFF" sx={{ textDecoration: 'underline', fontWeight: '400' }}>
                Gift Card
              </Link>
              <Link href="https://dribbble.com/tags/contact-us-page" color="#FFFFFF" sx={{ textDecoration: 'underline', fontWeight: '400' }}>
                Contact Us
              </Link>
            </Box>
  );
};

export default NavigationLinks;