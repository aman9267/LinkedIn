
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardMedia, 
  CardActions, 
  Avatar, 
  Typography, 
  Box, 
  Button, 
  Divider, 
  IconButton,
  Stack,
  Skeleton
} from '@mui/material';
import { 
  Image as ImageIcon, 
  SmartDisplay as YoutubeIcon, 
  Event as CalendarIcon, 
  Article as ArticleIcon, 
  MoreHoriz as MoreIcon, 
  ThumbUpOutlined as LikeIcon, 
  ChatBubbleOutline as CommentIcon, 
  ShareOutlined as ShareIcon, 
  SendOutlined as SendIcon 
} from '@mui/icons-material';
import { User, Post } from '../types';

interface FeedProps {
  currentUser: User;
  searchQuery: string;
  onFeatureClick: () => void;
  isLoading: boolean;
}

const dummyPosts: Post[] = [
  {
    id: '1',
    author: {
      id: 'u1',
      name: 'Amaan',
      headline: 'Frontend Developer | Next.js • React • TypeScript',
      avatar: 'https://picsum.photos/seed/amaan/100/100'
    },
    content:
      "Just shipped a major update on my HealthMeet platform 🚀\n\nRefactored the dashboard, improved API handling, and added role-based access control (RBAC). Feels great when clean UI meets clean architecture. 💻✨",
    timestamp: '1h',
    likes: 182,
    comments: 24,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    author: {
      id: 'u2',
      name: 'Amaan',
      headline: 'Software Developer | Building with Next.js',
      avatar: 'https://picsum.photos/seed/amaan2/100/100'
    },
    content:
      "Hot take 🔥\n\nYou don’t need over-engineering on day one.\n\nFor most startups:\n✅ Well-structured Next.js app\n✅ Clean API layer\n✅ Scalable DB design\n\n…is better than premature microservices.\nSpeed > complexity (initially).",
    timestamp: '3h',
    likes: 356,
    comments: 61
  },
  {
    id: '3',
    author: {
      id: 'u3',
      name: 'Amaan',
      headline: 'React & UI Engineer',
      avatar: 'https://picsum.photos/seed/amaan3/100/100'
    },
    content:
      "Building UI dashboards taught me one thing:\n\n👉 Good UX is invisible\n👉 Bad UX is unforgettable\n\nSpent hours today refining spacing, states, and loading skeletons using MUI & Tailwind. Totally worth it. 🎯",
    timestamp: '6h',
    likes: 214,
    comments: 29,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    author: {
      id: 'u4',
      name: 'Amaan',
      headline: 'Full Stack Developer | APIs & Auth',
      avatar: 'https://picsum.photos/seed/amaan4/100/100'
    },
    content:
      "Authentication & authorization are always tricky 🔐\n\nToday I finalized:\n• JWT auth flow\n• Role-based routing\n• Permission-level UI rendering\n\nSecurity + UX = real product engineering.",
    timestamp: '10h',
    likes: 498,
    comments: 72
  },
  {
    id: '5',
    author: {
      id: 'u5',
      name: 'Amaan',
      headline: 'Indie Builder | Startup Mindset',
      avatar: 'https://picsum.photos/seed/amaan5/100/100'
    },
    content:
      "Working on side projects while managing client work isn’t easy.\n\nBut consistency beats motivation.\nEven 1–2 hours daily compounds massively over time. 📈\n\nKeep building. Keep learning.",
    timestamp: '1d',
    likes: 903,
    comments: 140
  },
  {
    id: '6',
    author: {
      id: 'u6',
      name: 'Amaan',
      headline: 'Next.js Developer | Performance Matters',
      avatar: 'https://picsum.photos/seed/amaan6/100/100'
    },
    content:
      "Next.js performance tips I follow on every project:\n\n⚡ Server Components where possible\n⚡ Image optimization\n⚡ API caching & pagination\n⚡ Avoid unnecessary re-renders\n\nSmall optimizations = big impact.",
    timestamp: '2d',
    likes: 621,
    comments: 48
  },
  {
    id: '7',
    author: {
      id: 'u7',
      name: 'Amaan',
      headline: 'Frontend Engineer | Learning in Public',
      avatar: 'https://picsum.photos/seed/amaan7/100/100'
    },
    content:
      "Currently sharpening problem-solving skills with JavaScript & LeetCode 🧠\n\nNot chasing perfection, just daily progress.\n\nAny underrated resources you’d recommend?",
    timestamp: '3d',
    likes: 267,
    comments: 53
  },
  {
    id: '8',
    author: {
      id: 'u8',
      name: 'Amaan',
      headline: 'UI/UX Focused Developer',
      avatar: 'https://picsum.photos/seed/amaan8/100/100'
    },
    content:
      "Design isn’t about fancy animations.\nIt’s about clarity.\n\nIf a user doesn’t need instructions, you’ve done your job right. 🎨✨",
    timestamp: '4d',
    likes: 388,
    comments: 19
  },
  {
    id: '9',
    author: {
      id: 'u9',
      name: 'Amaan',
      headline: 'Tech Enthusiast | Exploring Backend',
      avatar: 'https://picsum.photos/seed/amaan9/100/100'
    },
    content:
      "Exploring Node.js + MongoDB deeper lately.\n\nUnderstanding data modeling properly makes frontend work 10x easier. Full-stack thinking really matters.",
    timestamp: '5d',
    likes: 154,
    comments: 22
  },
  {
    id: '10',
    author: {
      id: 'u10',
      name: 'Amaan',
      headline: 'Developer | Builder | Learner',
      avatar: 'https://picsum.photos/seed/amaan10/100/100'
    },
    content:
      "Reminder for fellow developers 👇\n\nYour code doesn’t need to be perfect.\nIt needs to be:\n✔ readable\n✔ maintainable\n✔ useful\n\nShip. Learn. Improve. 🔁",
    timestamp: '6d',
    likes: 512,
    comments: 34
  }
];


const Feed: React.FC<FeedProps> = ({ currentUser, searchQuery, onFeatureClick, isLoading }) => {
  const filteredPosts = dummyPosts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Stack spacing={2}>
      {/* Post Creator */}
      <Card variant="outlined" sx={{ borderRadius: 2, p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar src={currentUser.avatar} sx={{ width: 48, height: 48, mr: 1.5, cursor: 'pointer' }} onClick={onFeatureClick} />
          <Button 
            fullWidth 
            variant="outlined" 
            onClick={onFeatureClick}
            sx={{ 
              borderRadius: 10, 
              borderColor: 'divider', 
              color: 'text.secondary', 
              justifyContent: 'flex-start',
              px: 2,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { bgcolor: 'action.hover', borderColor: 'divider' }
            }}
          >
            Start a post
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <PostOption icon={<ImageIcon sx={{ color: '#378fe9' }} />} label="Media" onClick={onFeatureClick} />
          <PostOption icon={<YoutubeIcon sx={{ color: '#5f9b41' }} />} label="Video" onClick={onFeatureClick} />
          <PostOption icon={<CalendarIcon sx={{ color: '#c37d16' }} />} label="Event" onClick={onFeatureClick} />
          <PostOption icon={<ArticleIcon sx={{ color: '#e16745' }} />} label="Write article" onClick={onFeatureClick} />
        </Box>
      </Card>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Divider sx={{ flex: 1 }} />
        <Typography variant="caption" sx={{ px: 2, color: 'text.secondary' }}>
          Sort by: <Typography variant="caption" fontWeight="600" color="text.primary" sx={{ cursor: 'pointer' }} onClick={onFeatureClick}>Top</Typography>
        </Typography>
      </Box>

      {/* Feed Posts / Skeletons */}
      {isLoading ? (
        [1, 2, 3].map((i) => <PostSkeleton key={i} />)
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <PostCard key={post.id} post={post} onFeatureClick={onFeatureClick} />
        ))
      ) : (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography color="text.secondary">No posts match your search.</Typography>
        </Box>
      )}
    </Stack>
  );
};

const PostSkeleton: React.FC = () => (
  <Card variant="outlined" sx={{ borderRadius: 2 }}>
    <CardHeader
      avatar={<Skeleton variant="circular" width={40} height={40} />}
      title={<Skeleton variant="text" width="60%" />}
      subheader={<Skeleton variant="text" width="40%" />}
    />
    <CardContent sx={{ pt: 0 }}>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
    </CardContent>
    <Skeleton variant="rectangular" height={200} />
    <CardActions sx={{ px: 2, py: 1 }}>
      <Skeleton variant="rectangular" width="20%" height={32} />
      <Skeleton variant="rectangular" width="20%" height={32} />
      <Skeleton variant="rectangular" width="20%" height={32} />
    </CardActions>
  </Card>
);

const PostOption: React.FC<{ icon: React.ReactNode, label: string, onClick: () => void }> = ({ icon, label, onClick }) => (
  <Button 
    color="inherit" 
    startIcon={icon} 
    onClick={onClick}
    sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600, px: 1 }}
  >
    {label}
  </Button>
);

const PostCard: React.FC<{ post: Post, onFeatureClick: () => void }> = ({ post, onFeatureClick }) => (
  <Card variant="outlined" sx={{ borderRadius: 2 }}>
    <CardHeader
      avatar={<Avatar src={post.author.avatar} sx={{ cursor: 'pointer' }} onClick={onFeatureClick} />}
      action={
        <IconButton onClick={onFeatureClick}>
          <MoreIcon />
        </IconButton>
      }
      title={
        <Typography 
          variant="body2" 
          fontWeight="600" 
          onClick={onFeatureClick}
          sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' } }}
        >
          {post.author.name}
        </Typography>
      }
      subheader={
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.1 }}>
            {post.author.headline}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mt: 0.2 }}>
            {post.timestamp} • 🌐
          </Typography>
        </Box>
      }
    />
    <CardContent sx={{ pt: 0 }}>
      <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'pre-wrap' }}>
        {post.content}
      </Typography>
    </CardContent>
    {post.image && (
      <CardMedia
        component="img"
        image={post.image}
        alt="post image"
        onClick={onFeatureClick}
        sx={{ maxHeight: 400, objectFit: 'cover', cursor: 'pointer' }}
      />
    )}
    
    <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Avatar sx={{ width: 14, height: 14, bgcolor: 'primary.main', fontSize: 10 }}>
          <LikeIcon sx={{ fontSize: 10, color: 'white' }} />
        </Avatar>
        <Typography variant="caption" color="text.secondary">{post.likes}</Typography>
      </Box>
      <Typography 
        variant="caption" 
        color="text.secondary" 
        onClick={onFeatureClick}
        sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' } }}
      >
        {post.comments} comments
      </Typography>
    </Box>

    <Divider sx={{ mx: 2 }} />

    <CardActions sx={{ px: 1, py: 0.5 }}>
      <InteractionButton icon={<LikeIcon />} label="Like" onClick={onFeatureClick} />
      <InteractionButton icon={<CommentIcon />} label="Comment" onClick={onFeatureClick} />
      <InteractionButton icon={<ShareIcon />} label="Share" onClick={onFeatureClick} />
      <InteractionButton icon={<SendIcon />} label="Send" onClick={onFeatureClick} />
    </CardActions>
  </Card>
);

const InteractionButton: React.FC<{ icon: React.ReactNode, label: string, onClick: () => void }> = ({ icon, label, onClick }) => (
  <Button 
    fullWidth 
    color="inherit" 
    startIcon={icon} 
    onClick={onClick}
    sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600, py: 1 }}
  >
    {label}
  </Button>
);

export default Feed;
