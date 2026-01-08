
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
   <div>Hello</div>
  );
};

export default App;
