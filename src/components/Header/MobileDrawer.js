import { Box, Button, Drawer, Link } from "@mui/material";

const MobileDrawer = ({ drawerOpen, toggleDrawer }) => (
  <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
    <Box sx={{ width: 250, padding: '20px' }}>
      <Button fullWidth color="inherit" onClick={toggleDrawer}>
        <Link
          href="https://www.canva.com/learn/unique-inspiring-about-page/"
          color="inherit"
          underline="none"
        >
          About Us
        </Link>
      </Button>

      <Button fullWidth color="inherit" onClick={toggleDrawer}>
        <Link
          href="https://www.giftcards.at/geschenkkarten/"
          color="inherit"
          underline="none"
        >
          Gift Card
        </Link>
      </Button>

      <Button fullWidth color="inherit" onClick={toggleDrawer}>
        <Link
          href="https://dribbble.com/tags/contact-us-page"
          color="inherit"
          underline="none"
        >
          Contact Us
        </Link>
      </Button>

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: '#b41a8d', color: 'white' }}
      >
        <Link href="https://www.netflix.com/at-en/login" color="#ffff">Log In</Link>
      </Button>
    </Box>
  </Drawer>
);

export default MobileDrawer;