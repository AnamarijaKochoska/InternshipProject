import { Box, Grid } from '@mui/material';
import { LogoFooter } from './LogoFooter';
import logo from '../../assets/girllogo.webp';
import NavigationLinks from './NavigationLinksFooter';
import ContactInfo from './ContactInfo';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#003366', color: '#FFFFFF', padding: '40px 0' }}>
      <Grid 
        container 
        spacing={4} 
        justifyContent="space-between" 
        sx={{ flexWrap: 'wrap' }}
      >
        <Grid 
          item 
          xs={12} 
          sm={4} 
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <NavigationLinks />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={4} 
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <LogoFooter
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: '80px', sm: '80px', md: '120px' },
              height: { xs: '80px', sm: '80px', md: '120px' },
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ContactInfo />
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;