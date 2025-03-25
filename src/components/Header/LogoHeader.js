import { Box } from "@mui/material";
import { useState } from "react";

const LogoHeader = ({ logo }) => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
        <img 
          src={logo} 
          alt="Logo" 
          onClick={handleClick}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100px',
            maxHeight: '100px',
            transition: 'transform 0.3s ease',
            transform: clicked ? 'scale(1.4)' : 'scale(1)',
          }} 
        />
      </Box>
    );
  };

  export default LogoHeader;