import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import { Info } from "@mui/icons-material";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    description:
      "Develop and maintain software applications. Work with cutting-edge technologies in a fast-paced environment.",
    requirements: [
      "3+ years of experience in software development",
      "Proficiency in JavaScript and React",
      "Strong problem-solving skills",
    ],
    applicationLink: "https://example.com/apply/software-engineer",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Creative Solutions Ltd.",
    location: "New York, NY",
    description:
      "Lead product development from conception to launch. Collaborate with cross-functional teams to deliver innovative solutions.",
    requirements: [
      "5+ years of experience in product management",
      "Experience with Agile methodologies",
      "Excellent communication skills",
    ],
    applicationLink: "https://example.com/apply/product-manager",
  },
  // Add more job listings as needed
];

export default function Jobs() {
  return (
    <Box
      className="relative min-h-screen"
      sx={{
        backgroundImage: 'url("/app/background-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        className="absolute inset-0"
        sx={{
          backgroundColor: "rgba(55, 65, 81, 0.7)", // Dark gray overlay with more opacity
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 10, paddingY: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Box display="flex" justifyContent="center" marginBottom={4}>
            <Image
              src="/app/jobs-banner.jpg"
              alt="Jobs Banner"
              width={120}
              height={28}
              priority
            />
          </Box>

          <Typography variant="h4" align="center" gutterBottom sx={{ color: "white" }}>
            Job Opportunities
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Grid container spacing={4}>
            {jobListings.map((job) => (
              <Grid item xs={12} sm={6} key={job.id}>
                <Paper elevation={2} sx={{ padding: 3, borderRadius: 2 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#424242" }}>
                      {job.title}
                    </Typography>
                    <IconButton>
                      <Info color="action" />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {job.company} - {job.location}
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 1, color: "#424242" }}>
                    {job.description}
                  </Typography>

                  <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>
                    Requirements:
                  </Typography>
                  <List>
                    {job.requirements.map((req, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={req} secondary={null} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    color="primary"
                    href={job.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: 2 }}
                    fullWidth
                  >
                    Apply Now
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
