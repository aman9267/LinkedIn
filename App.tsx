
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  CssBaseline, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Button 
} from '@mui/material';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';
import { User } from './types';

const currentUser: User = {
  id: 'me',
  name: 'Alex Rivera',
  headline: 'Senior Frontend Engineer | React & TypeScript Expert',
  avatar: 'https://picsum.photos/seed/alex/150/150',
  connections: 542,
  profileViews: 128
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fake Loading Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenFeatureModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseFeatureModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f3f2ef' }}>
      <CssBaseline />
      <Header 
        currentUser={currentUser} 
        onSearchChange={setSearchQuery} 
        onFeatureClick={handleOpenFeatureModal} 
      />
      
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container spacing={3}>
          
          {/* Left Column: Sticky Container */}
          <Grid item xs={false} md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: 80 }}>
              <LeftSidebar user={currentUser} onFeatureClick={handleOpenFeatureModal} isLoading={isLoading} />
            </Box>
          </Grid>

          {/* Center Column */}
          <Grid item xs={12} md={8} lg={6}>
            <Feed 
              currentUser={currentUser} 
              searchQuery={searchQuery} 
              onFeatureClick={handleOpenFeatureModal} 
              isLoading={isLoading} 
            />
          </Grid>

          {/* Right Column: Sticky Container */}
          <Grid item xs={false} lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ position: 'sticky', top: 80 }}>
              <RightSidebar onFeatureClick={handleOpenFeatureModal} isLoading={isLoading} />
            </Box>
          </Grid>
          
        </Grid>
      </Container>

      {/* Feature Not Implemented Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseFeatureModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Feature Not Available"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is a screening task demonstration. This feature is not implemented as part of this UI-only test.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFeatureModal} autoFocus sx={{ textTransform: 'none' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
