
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  Divider, 
  Button,
  Stack,
  Skeleton
} from '@mui/material';
import { Bookmark as BookmarkIcon, Add as PlusIcon } from '@mui/icons-material';
import { User } from '../types';

interface LeftSidebarProps {
  user: User;
  onFeatureClick: () => void;
  isLoading: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ user, onFeatureClick, isLoading }) => {
  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <Box sx={{ height: 56, bgcolor: '#a0b4b7' }} />
          <CardContent sx={{ pt: 0, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4, mb: 2 }}>
              <Skeleton variant="circular" width={64} height={64} />
            </Box>
            <Skeleton variant="text" width="60%" sx={{ mx: 'auto' }} />
            <Skeleton variant="text" width="80%" sx={{ mx: 'auto' }} />
          </CardContent>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Box>
        </Card>
      </Stack>
    );
  }

  return (
    <Stack spacing={2}>
      {/* Profile Summary Card */}
      <Card variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ height: 56, bgcolor: '#a0b4b7' }} />
        <CardContent sx={{ pt: 0, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4, mb: 2 }}>
            <Avatar 
              src={user.avatar} 
              sx={{ width: 64, height: 64, border: '2px solid white', cursor: 'pointer' }}
              onClick={onFeatureClick}
            />
          </Box>
          <Typography 
            variant="h6" 
            onClick={onFeatureClick}
            sx={{ fontSize: '1rem', fontWeight: 600, '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
          >
            {user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
            {user.headline}
          </Typography>
        </CardContent>
        
        <Divider />
        
        <Box sx={{ py: 1.5 }}>
          <Box 
            onClick={onFeatureClick}
            sx={{ 
              px: 2, 
              py: 0.5, 
              display: 'flex', 
              justifyContent: 'space-between', 
              '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' }
            }}
          >
            <Typography variant="caption" color="text.secondary" fontWeight="500">Profile viewers</Typography>
            <Typography variant="caption" color="primary.main" fontWeight="600">{user.profileViews}</Typography>
          </Box>
          <Box 
            onClick={onFeatureClick}
            sx={{ 
              px: 2, 
              py: 0.5, 
              display: 'flex', 
              justifyContent: 'space-between', 
              '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' }
            }}
          >
            <Typography variant="caption" color="text.secondary" fontWeight="500">Post impressions</Typography>
            <Typography variant="caption" color="primary.main" fontWeight="600">{user.connections}</Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ p: 2, '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' } }} onClick={onFeatureClick}>
          <Typography variant="caption" color="text.secondary">Access exclusive tools & insights</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            <Box sx={{ width: 12, height: 12, bgcolor: '#c37d16', borderRadius: 0.5, mr: 1 }} />
            <Typography variant="caption" fontWeight="600" sx={{ textDecoration: 'underline' }}>Try Premium for $0</Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' } }} onClick={onFeatureClick}>
          <BookmarkIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
          <Typography variant="caption" fontWeight="600">My items</Typography>
        </Box>
      </Card>

      {/* Community Card */}
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Typography 
              variant="caption" 
              color="primary" 
              fontWeight="600" 
              onClick={onFeatureClick}
              sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
            >
              Groups
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography 
                variant="caption" 
                color="primary" 
                fontWeight="600" 
                onClick={onFeatureClick}
                sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
              >
                Events
              </Typography>
              <PlusIcon sx={{ fontSize: 18, color: 'text.secondary', cursor: 'pointer' }} onClick={onFeatureClick} />
            </Box>
            <Typography 
              variant="caption" 
              color="primary" 
              fontWeight="600" 
              onClick={onFeatureClick}
              sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}
            >
              Followed Hashtags
            </Typography>
          </Stack>
        </CardContent>
        <Divider />
        <Button 
          fullWidth 
          color="inherit" 
          onClick={onFeatureClick}
          sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600, py: 1.5 }}
        >
          Discover more
        </Button>
      </Card>
    </Stack>
  );
};

export default LeftSidebar;
