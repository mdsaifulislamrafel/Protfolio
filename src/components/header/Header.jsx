import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { FaBlog } from 'react-icons/fa';

const pages = [
    { label: 'Home', path: 'home', icon: <HomeOutlinedIcon />, offset: -50 },
    { label: 'About', path: 'about', icon: <AccountBoxOutlinedIcon />, offset: -105 },
    { label: 'Skills', path: 'skills', icon: <DescriptionOutlinedIcon />, offset: -105 },
    { label: 'Services', path: 'services', icon: <BusinessCenterOutlinedIcon />, offset: -80 },
    { label: 'Portfolio', path: 'portfolio', icon: <BrokenImageOutlinedIcon />, offset: -80 },
    { label: 'Blog', path: 'blog', icon: <FaBlog />, offset: -90 },
    { label: 'Contact', path: 'contact', icon: <NearMeOutlinedIcon />, offset: -90 },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('home');

    const handleOpenNavMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (path) => {
        setActiveItem(path);
        setIsMenuOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', sm: 'flex' } }}>
                <AppBar sx={{
                    position: 'fixed',
                    boxShadow: 'none',
                    background: 'rgba(255, 255, 255, 0.48)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)'
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="p"
                                noWrap
                                component={Link}
                                to="/"
                                sx={{
                                    ml: 5,
                                    display: { xs: 'flex', md: 'flex' },
                                    flexGrow: 1,
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    fontSize: '1.5rem',
                                    letterSpacing: '.2rem',
                                    color: '#551a8b',
                                    textDecoration: 'none',
                                }}
                            >
                                DevRafel
                            </Typography>

                            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                {pages.map((page, index) => (
                                    <Link
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={page.offset}
                                        duration={500}
                                        onSetActive={() => handleMenuItemClick(page.path)}
                                        key={index}
                                    >
                                        <Button
                                            sx={{
                                                my: 1,
                                                fontFamily: 'Poppins',
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                color: activeItem === page.path ? '#551a8b' : 'black'
                                            }}
                                        >
                                            {page.label}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', sm: 'none' } }}>
                <AppBar
                    position="fixed"
                    color="primary"
                    sx={{
                        top: 'auto',
                        bottom: isMenuOpen ? 0 : -110,
                        transition: 'bottom 0.3s',
                        background: '#f3f2f7',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                letterSpacing: '.2rem',
                                color: '#551a8b',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#551a8b"
                        >
                            <FingerprintIcon />
                        </IconButton>
                    </Toolbar>
                    <Box sx={{ mb: '10px', ml: '30px' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {pages.map((page, index) => (
                                <Grid item xs={4} key={index}>
                                    <Link
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={page.offset}
                                        duration={500}
                                        onSetActive={() => handleMenuItemClick(page.path)}
                                    >
                                        <Button
                                            sx={{
                                                my: 1,
                                                fontFamily: 'Poppins',
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                color: activeItem === page.path ? '#551a8b' : 'black'
                                            }}
                                        >
                                            {page.icon} {page.label}
                                        </Button>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </AppBar>
            </Box>
        </React.Fragment>
    );
}

export default Header;
