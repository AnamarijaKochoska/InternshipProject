import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactInfo = () => (
  <Box 
            sx={{
              backgroundColor: 'white',
              border: '6px solid #b41a8d',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              maxWidth: { xs: '230px', sm: '300px', md: '300px' },
              marginRight: {sm: '4px', md:'50px'},
              margin: '0 auto',
              marginTop: '40px',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black' }}>Anamarija Kochoska</Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black' }}>Sensengasse 2b, Vienna</Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black' }}>+43 66499403742</Typography>
            <Typography variant="body1" sx={{ color: 'black' }}>anamarija_kocoska@live.com</Typography>
          </Box>
);

export default ContactInfo;