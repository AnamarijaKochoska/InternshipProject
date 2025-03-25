import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton } from '@mui/material';
import logo from '../../assets/girllogo.webp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoSectionHeader from './LogoHeader';
import NavigationLinksHeader from './NavigationLinksHeader';
import MobileDrawer from './MobileDrawer';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', padding: '0px', width: '100%', overflowX: 'hidden' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <LogoSectionHeader logo={logo} />

        <NavigationLinksHeader />

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginRight: '40px' }}>
          <Typography sx={{ color: 'black', fontSize: '2rem', marginRight: '5px' }}>|</Typography>
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              borderBottom: '2px solid #b41a8d',
              width: {
                xs: '70px',
                sm: '120px',
                md: '200px',
              },
              marginRight: '5px',
              padding: '5px',
              fontSize: '16px',
            }}
          />
          <SearchIcon sx={{ color: '#b41a8d', cursor: 'pointer' }} />
          <Typography sx={{ color: 'black', fontSize: '2rem', marginLeft: '5px' }}>|</Typography>
        </Box>

        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' }, color: 'black', marginRight: '20px', marginLeft: '-20px' }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <MobileDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;