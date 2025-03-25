import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialMediaIcons = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <IconButton sx={{ color: '#ffffff', margin: '0 10px', fontSize: '40px' }} href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
    <InstagramIcon />
  </IconButton>
  <IconButton sx={{ color: '#ffffff', margin: '0 10px', fontSize: '40px' }} href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
    <LinkedInIcon />
  </IconButton>
  <IconButton sx={{ color: '#ffffff', margin: '0 10px', fontSize: '40px' }} href="mailto:anamarija_kocoska@live.com" aria-label="Email">
    <EmailIcon />
  </IconButton>
</Box>
);

export default SocialMediaIcons;