"use client"; // Add this at the top of your file

import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";

const alumniList = [
  {
    id: 1,
    name: "Alice Johnson",
    graduationYear: 2020,
    degree: "Bachelor of Science in Computer Science",
    major: "Computer Science",
  },
  {
    id: 2,
    name: "Bob Smith",
    graduationYear: 2018,
    degree: "Bachelor of Arts in Business Administration",
    major: "Business",
  },
  {
    id: 3,
    name: "Charlie Brown",
    graduationYear: 2019,
    degree: "Master of Science in Data Science",
    major: "Data Science",
  },
  {
    id: 4,
    name: "Diana Prince",
    graduationYear: 2021,
    degree: "Bachelor of Arts in Psychology",
    major: "Psychology",
  },
  // Add more alumni as needed
];

export default function AlumniList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlumni = alumniList.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registered Alumni List
      </Typography>
      <TextField
        label="Search Alumni"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 4 }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={4}>
        {filteredAlumni.map((alumni) => (
          <Grid item xs={12} sm={6} md={4} key={alumni.id}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {alumni.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {alumni.degree}, {alumni.major} ({alumni.graduationYear})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {filteredAlumni.length === 0 && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="body2" color="textSecondary" align="center">
                No alumni found.
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
