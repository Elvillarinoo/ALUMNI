import Image from "next/image";
import { Box, Container, Typography, Button, Paper, Link } from "@mui/material";

const events = [
  {
    id: 1,
    title: "UCLM Alumni Night Event",
    date: "2024-10-15",
    time: "6:00 PM - 9:00 PM",
    location: "SM Seaside City",
    description:
      "Join us for an evening of networking with fellow alumni. Enjoy appetizers, drinks, and engaging conversations.",
    registrationLink: "https://example.com/register/alumni-networking-night",
  },
  {
    id: 2,
    title: "PALAGSIKAY 2024",
    date: "2024-11-05",
    time: "10:00 AM - 4:00 PM",
    location: "CCLEX",
    description:
      "Celebrate Homecoming with a day of activities, including a parade, sports events, and a special alumni luncheon.",
    registrationLink: "https://example.com/register/homecoming-2024",
  },
  {
    id: 3,
    title: "ONLINE GAMBLING",
    date: "2024-11-20",
    time: "2:00 PM - 5:00 PM",
    location: "Career Services Office",
    description:
      "Enhance your career prospects with this workshop covering resume writing, interview techniques, and job search strategies.",
    registrationLink: "https://1-xbet.ph/en",
  },
  // Add more events as needed
];

export default function Events() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", bgcolor: "grey.100" }}>
      {/* Background Image */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Image
          src="/app/events-background.jpg" // Replace with your background image path
          alt="Events Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          py: 5,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: "md",
            mx: "auto",
            p: 4,
            backgroundColor: "white",
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Image
              src="/app/events-banner.jpg"
              alt="Events Banner"
              width={120}
              height={28}
              priority
            />
          </Box>

          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Upcoming Events
          </Typography>

          {events.map((event) => (
            <Paper
              key={event.id}
              elevation={1}
              sx={{ p: 3, mb: 3, backgroundColor: "grey.50" }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.date} | {event.time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {event.location}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {event.description}
              </Typography>

              <Button
                variant="contained"
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2 }}
              >
                Register Now
              </Button>
            </Paper>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
