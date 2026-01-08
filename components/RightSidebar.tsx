
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar, 
  Button, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Stack,
  Link,
  Skeleton
} from '@mui/material';
import { Add as PlusIcon, Info as InfoIcon } from '@mui/icons-material';
import { Suggestion } from '../types';

interface RightSidebarProps {
  onFeatureClick: () => void;
  isLoading: boolean;
}

const suggestions: Suggestion[] = [
  {
    id: 's1',
    name: 'Zayed Ali',
    headline: 'Founder @New King Tech',
    avatar: 'https://picsum.photos/seed/emma/100/100'
  },
  {
    id: 's2',
    name: 'Dinesh Kumar',
    headline: 'Senior Backed Developer',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    id: 's3',
    name: 'Rekha Gupta',
    headline: 'Service • Professional Training',
    avatar: 'https://picsum.photos/seed/news/100/100'
  }
];

const RightSidebar: React.FC<RightSidebarProps> = ({ onFeatureClick, isLoading }) => {
  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Skeleton variant="text" width="60%" />
            <Stack spacing={2} mt={2}>
              {[1, 2].map((i) => (
                <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box flex={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="80%" />
                  </Box>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    );
  }

  return (
    <Stack spacing={2}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle2" fontWeight="600">Add to your feed</Typography>
            <InfoIcon sx={{ fontSize: 16, color: 'text.secondary', cursor: 'pointer' }} onClick={onFeatureClick} />
          </Box>
          <List disablePadding>
            {suggestions.map((s) => (
              <ListItem key={s.id} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                <ListItemAvatar sx={{ minWidth: 56 }}>
                  <Avatar src={s.avatar} sx={{ width: 48, height: 48, cursor: 'pointer' }} onClick={onFeatureClick} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body2" 
                      fontWeight="600" 
                      onClick={onFeatureClick}
                      sx={{ '&:hover': { color: 'primary.main', cursor: 'pointer' } }}
                    >
                      {s.name}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        {s.headline}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        size="small" 
                        startIcon={<PlusIcon />} 
                        onClick={onFeatureClick}
                        sx={{ 
                          borderRadius: 5, 
                          textTransform: 'none', 
                          fontWeight: 600, 
                          color: 'text.secondary', 
                          borderColor: 'text.secondary',
                          px: 2,
                          '&:hover': { borderColor: 'text.primary', bgcolor: 'action.hover' }
                        }}
                      >
                        Follow
                      </Button>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
          
          <Button 
            fullWidth 
            color="inherit" 
            onClick={onFeatureClick}
            sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600, mt: 1, justifyContent: 'flex-start' }}
          >
            View all recommendations
          </Button>
        </CardContent>
      </Card>

      {/* Footer sticky area */}
      <Box sx={{ textAlign: 'center' }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={1.5} sx={{ mb: 2 }}>
          <FooterLink label="About" onClick={onFeatureClick} />
          <FooterLink label="Help Center" onClick={onFeatureClick} />
          <FooterLink label="Privacy & Terms" onClick={onFeatureClick} />
          <FooterLink label="Ad Choices" onClick={onFeatureClick} />
          <FooterLink label="Advertising" onClick={onFeatureClick} />
          <FooterLink label="Business Services" onClick={onFeatureClick} />
        </Stack>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          <Typography variant="caption" fontWeight="bold" color="primary">Linked</Typography>
          <Box sx={{ bgcolor: 'primary.main', px: 0.3, borderRadius: 0.2 }}>
            <Typography variant="caption" fontWeight="bold" color="white">in</Typography>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
            LinkedIn Corp © 2026
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

const FooterLink: React.FC<{ label: string, onClick: () => void }> = ({ label, onClick }) => (
  <Link 
    underline="hover" 
    variant="caption" 
    color="text.secondary" 
    onClick={onClick}
    sx={{ cursor: 'pointer', fontSize: '0.75rem' }}
  >
    {label}
  </Link>
);

export default RightSidebar;
