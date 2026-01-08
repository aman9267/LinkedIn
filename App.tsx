
import React, { useState} from 'react';
import { 
  Box, 
  CssBaseline, 
} from '@mui/material';
import Header from './components/Header';
import { User } from './types';

const currentUser: User = {
  id: 'me',
  name: 'Mohd Aman',
  headline: 'Advanced Next.js Engineer | TypeScript | React | Tailwind CSS | Material UI',
  avatar: '',
  connections: 542,
  profileViews: 128
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenFeatureModal = () => {
    setIsModalOpen(true);
  };


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f3f2ef' }}>
      <CssBaseline />
      <Header 
        currentUser={currentUser} 
        onSearchChange={setSearchQuery} 
        onFeatureClick={handleOpenFeatureModal} 
      />
    </Box>
  );
};

export default App;
