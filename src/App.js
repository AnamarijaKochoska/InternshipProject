import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResponsiveGrid from './components/Content/ResponsiveGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    if (query.length >= 3 || query === '') {
      setSearchTerm(query);
    }
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onSearch={handleSearch} />

      <main style={{ flexGrow: 1, padding: '40px', backgroundColor: '#f4f4f4' }}>
        <Box
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '0.9rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
            }}
          >
            Welcome to Our Fashion Website!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },
              marginTop: '10px',
            }}
          >
            Explore our collection and find your favorite brands.
          </Typography>
        </Box>

        <ResponsiveGrid searchTerm={searchTerm} />
      </main>

      <Footer />
    </div>
  );
}

export default App;