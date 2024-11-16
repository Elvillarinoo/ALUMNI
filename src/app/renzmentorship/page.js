import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  Link,
  Box,
} from '@mui/material';

export default function AlumniConnections() {
  const alumni = [
    {
      name: 'Alice Johnson',
      title: 'Community Manager @ Network Co.',
      bio: 'Alice has a passion for connecting people and building strong communities. With over 5 years in community management, she helps alumni network effectively and engage with each other.',
      expertise: [
        'Community Building',
        'Networking Strategies',
        'Event Planning',
        'Alumni Relations',
      ],
      availability: 'Available for group networking sessions and 1:1 consultations to help you connect with fellow alumni.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Bob Smith',
      title: 'Career Coach @ Growth Hub',
      bio: 'Bob specializes in career coaching and has helped numerous alumni land their dream jobs. He focuses on developing personalized career strategies.',
      expertise: [
        'Career Development',
        'Resume Building',
        'Interview Preparation',
        'Job Search Strategies',
      ],
      availability: 'Offering mentorship for career advice, interview preparation, and job search strategies.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Charlie Brown',
      title: 'Entrepreneur & Startup Advisor',
      bio: 'Charlie has launched multiple startups and is passionate about helping alumni transition into entrepreneurship. He provides insights into starting and growing a business.',
      expertise: [
        'Startup Development',
        'Business Strategy',
        'Funding and Investment',
        'Mentorship and Coaching',
      ],
      availability: 'Available for workshops and mentorship sessions focused on entrepreneurship and business growth.',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4")', // New background image relevant to alumni networking
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Connect with Our Alumni
        </Typography>

        <Grid container spacing={4}>
          {alumni.map((alumnus, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: 'center', bgcolor: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Typography variant="h5" gutterBottom>
                  {alumnus.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {alumnus.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {alumnus.bio}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Areas of Expertise:
                </Typography>
                <List>
                  {alumnus.expertise.map((skill, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', pl: 2 }}>
                      {skill}
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" gutterBottom>
                  Mentorship Availability:
                </Typography>
                <Typography variant="body2" paragraph>
                  {alumnus.availability}
                </Typography>

                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Contact for Connection
                </Button>

                <Box sx={{ mt: 4 }}>
                  <Link href={alumnus.linkedin} underline="hover" sx={{ mx: 1 }}>
                    LinkedIn
                  </Link>
                  <Link href={alumnus.twitter} underline="hover" sx={{ mx: 1 }}>
                    Twitter
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
