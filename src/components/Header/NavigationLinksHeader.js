import { Box, Button, Link } from "@mui/material";

const NavigationLinksHeader = () => (
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '15px' }}>
      <Button
        color="inherit"
        sx={{
          textTransform: 'none',
          color: 'black',
          fontWeight: '400',
          fontSize: { xs: '12px', sm: '14px', md: '16px'},
          textDecoration: 'underline',
          textDecorationColor: '#b41a8d',
          maxWidth: '120px',
          whiteSpace: 'nowrap',
        }}
      >
        <Link
          href="https://www.canva.com/learn/unique-inspiring-about-page/"
          color="inherit"
          underline="none"
        >
          About Us
        </Link>
      </Button>
      <Button
        color="inherit"
        sx={{
          textTransform: 'none',
          color: 'black',
          fontWeight: '400',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          textDecoration: 'underline',
          textDecorationColor: '#b41a8d',
          maxWidth: '120px',
          whiteSpace: 'nowrap',
        }}
      >
         <Link
          href="https://www.giftcards.at/geschenkkarten/"
          color="inherit"
          underline="none"
        >
          Gift Card
        </Link>
      </Button>
      <Button
        color="inherit"
        sx={{
          textTransform: 'none',
          color: 'black',
          fontWeight: '400',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          textDecoration: 'underline',
          textDecorationColor: '#b41a8d',
          maxWidth: '120px',
          whiteSpace: 'nowrap',
        }}
      >
       <Link
          href="https://dribbble.com/tags/contact-us-page"
          color="inherit"
          underline="none"
        >
          Contact Us
        </Link>
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#b41a8d',
          color: 'white',
          textTransform: 'none',
          fontWeight: '400',
          padding: '10px 30px',
          borderRadius: '48px',
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          boxShadow: 'none',
          border: 'none',
          maxWidth: '120px',
          whiteSpace: 'nowrap',
        }}
      >
        <Link href="https://www.netflix.com/at-en/login" color="#ffff">Log In</Link>
      </Button>
    </Box>
  );
  export default NavigationLinksHeader;
  