import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom'; // agar react-router use kar rahe ho

// ✅ Pages array as objects with name + url
const pages = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'Courses', url: '/courses' },
  { name: 'Why Us', url: '/why-us' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar>

          {/* ✅ LOGO */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Box component={'img'}
              src="../../../public/Images/final-01.png"
              alt="logo"
              sx={{
                width: {
                  xs: 110, sm: 120, md: 140
                }
              }}
            />
          </Box>

          {/* ✅ MOBILE MENU ICON */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* ✅ MOBILE MENU */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link to={page.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </MenuItem>
            ))}
            <Divider />
            <MenuItem>
              <ListItemIcon><LiveTvIcon /></ListItemIcon>
              <Link to="/webinar" style={{ textDecoration: 'none', color: 'inherit' }}>
                Webinar Class
              </Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <Link to="/enroll" style={{ textDecoration: 'none', color: 'inherit' }}>
                Enroll Now
              </Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><LoginIcon /></ListItemIcon>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                Login
              </Link>
            </MenuItem>
          </Menu>

          {/* ✅ DESKTOP MENU */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 3 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.url}
                sx={{ color: 'black', textTransform: 'none', mx: 1 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* ✅ DESKTOP BUTTONS */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 1 }}>
            <Button variant="contained" startIcon={<LiveTvIcon />} component={Link} to="/webinar" sx={btnStyle}>
              Webinar Class
            </Button>
            <Button variant="contained" startIcon={<SchoolIcon />} component={Link} to="/EnrollNow" sx={btnStyle}>
              Enroll Now
            </Button>
            <Button variant="contained" startIcon={<LoginIcon />} component={Link} to="/login" sx={btnStyle}>
              Login
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

const btnStyle = {
  backgroundColor: '#2492ff',
  textTransform: 'none',
  '&:hover': { backgroundColor: '#1b78d6' },
};

export default Navbar;
