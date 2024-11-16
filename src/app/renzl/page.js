import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

function DataFetchingComponent() {
  // State to store data fetched from API
  const [data, setData] = useState([]);
  // State to handle loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to handle error status
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Set fetched data to state
      } catch (error) {
        setError(error); // Handle error
      } finally {
        setIsLoading(false); // Update loading state
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on mount

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          Error: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Fetched Data:
      </Typography>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DataFetchingComponent;   