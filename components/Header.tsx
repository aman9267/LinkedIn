
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  InputBase, 
  IconButton, 
  Typography, 
  Avatar, 
  Menu, 
  MenuItem, 
  Divider,
  Container,
  Stack
} from '@mui/material';
import { 
  Home as HomeIcon, 
  People as PeopleIcon, 
  Work as WorkIcon, 
  Chat as ChatIcon, 
  Notifications as NotificationsIcon, 
  Search as SearchIcon, 
  Menu as MenuIcon,
  LinkedIn as LinkedInIcon,
  ArrowDropDown as ArrowDropDownIcon
} from '@mui/icons-material';
import { User } from '../types';

interface HeaderProps {
  currentUser: User;
  onSearchChange: (query: string) => void;
  onFeatureClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onSearchChange, onFeatureClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleClose();
    onFeatureClick();
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 52 }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <LinkedInIcon sx={{ color: '#0a66c2', fontSize: 40, mr: 1, cursor: 'pointer' }} onClick={onFeatureClick} />
            <Box 
              sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                alignItems: 'center', 
                bgcolor: '#edf3f8', 
                px: 2, 
                py: 0.5, 
                borderRadius: 1,
                width: 280
              }}
            >
              <SearchIcon sx={{ color: 'text.secondary', fontSize: 18, mr: 1 }} />
              <InputBase 
                placeholder="Search" 
                fullWidth 
                sx={{ fontSize: '0.875rem' }} 
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Box>
          </Box>

          <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
            <NavItem icon={<HomeIcon />} label="Home" active onClick={onFeatureClick} />
            <NavItem icon={<PeopleIcon />} label="Network" onClick={onFeatureClick} />
            <NavItem icon={<WorkIcon />} label="Jobs" onClick={onFeatureClick} />
            <NavItem icon={<ChatIcon />} label="Messaging" onClick={onFeatureClick} />
            <NavItem icon={<NotificationsIcon />} label="Notifications" onClick={onFeatureClick} />

            <Divider orientation="vertical" flexItem sx={{ my: 1, display: { xs: 'none', md: 'block' } }} />

            <Box 
              onClick={handleClick}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                cursor: 'pointer',
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' }
              }}
            >
              <Avatar src={currentUser.avatar} sx={{ width: 24, height: 24 }} />
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                <Typography variant="caption">Me</Typography>
                <ArrowDropDownIcon fontSize="small" />
              </Box>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              PaperProps={{
                elevation: 3,
                sx: { mt: 1, minWidth: 200 }
              }}
            >
              <MenuItem onClick={handleMenuItemClick} sx={{ py: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={currentUser.avatar} />
                  <Box>
                    <Typography variant="body1" fontWeight="600">{currentUser.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{currentUser.headline}</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <Box sx={{ px: 2, pb: 1 }}>
                <Typography 
                  variant="button" 
                  onClick={handleMenuItemClick}
                  sx={{ display: 'block', border: '1px solid #0a66c2', color: '#0a66c2', textAlign: 'center', borderRadius: 4, py: 0.5, fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  View Profile
                </Typography>
              </Box>
              <Divider />
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Settings & Privacy</Typography></MenuItem>
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Help</Typography></MenuItem>
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Language</Typography></MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Manage Posts & Activity</Typography></MenuItem>
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Job Posting Account</Typography></MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuItemClick}><Typography variant="body2">Sign Out</Typography></MenuItem>
            </Menu>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton size="small" onClick={onFeatureClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <Box 
    onClick={onClick}
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      cursor: 'pointer',
      color: active ? 'text.primary' : 'text.secondary',
      borderBottom: active ? '2px solid black' : 'none',
      pb: active ? 0.5 : 0,
      '&:hover': { color: 'text.primary' }
    }}
  >
    {icon}
    <Typography variant="caption" sx={{ display: { xs: 'none', lg: 'block' } }}>{label}</Typography>
  </Box>
);

export default Header;
