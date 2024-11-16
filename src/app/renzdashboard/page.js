"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Person as PersonIcon,
  Event as EventIcon,
  Work as WorkIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography, TextField } from "@mui/material";

export default function Dashboard() {
  const [section, setSection] = useState("Profile");

  const renderSection = () => {
    switch (section) {
      case "Profile":
        return <ProfileSection />;
      case "Events":
        return <EventsSection />;
      case "Jobs":
        return <JobsSection />;
      case "Messages":
        return <MessagesSection />;
      case "Notifications":
        return <NotificationsSection />;
      case "Search":
        return <SearchSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Box
        component="aside"
        width={240}
        bgcolor="primary.main"
        color="white"
        p={2}
        display={{ xs: "none", md: "block" }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Image src="/app/vpgame.jpg" alt="Logo" width={120} height={28} priority />
          <Typography variant="body2" color="textSecondary">
            Alumni
          </Typography>
        </Box>
        <nav>
          <SidebarButton
            icon={<PersonIcon />}
            text="Profile"
            onClick={() => setSection("Profile")}
          />
          <SidebarButton
            icon={<EventIcon />}
            text="Events"
            onClick={() => setSection("Events")}
          />
          <SidebarButton
            icon={<WorkIcon />}
            text="Jobs"
            onClick={() => setSection("Jobs")}
          />
          <SidebarButton
            icon={<MailIcon />}
            text="Messages"
            onClick={() => setSection("Messages")}
          />
          <SidebarButton
            icon={<NotificationsIcon />}
            text="Notifications"
            onClick={() => setSection("Notifications")}
          />
          <SidebarButton
            icon={<SearchIcon />}
            text="Search"
            onClick={() => setSection("Search")}
          />
        </nav>
      </Box>

      {/* Main Content */}
      <Box component="main" flex={1} bgcolor="background.default" p={4}>
        <Container>
          <Box p={3} bgcolor="white" borderRadius={2} boxShadow={2}>
            {renderSection()}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function SidebarButton({ icon, text, onClick }) {
  return (
    <Button
      onClick={onClick}
      fullWidth
      startIcon={icon}
      sx={{
        color: "white",
        justifyContent: "flex-start",
        py: 1.5,
        px: 3,
        textTransform: "none",
        "&:hover": { backgroundColor: "primary.dark" },
      }}
    >
      {text}
    </Button>
  );
}

// Example sections

function ProfileSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Profile
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Image src="" alt="Profile Picture" width={100} height={100} style={{ borderRadius: "50%" }} />
        <Box>
          <Typography variant="h6" color="textPrimary">
            Renz
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Bachelor of Science Information Technology
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function EventsSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Upcoming Events
      </Typography>
      <Typography>
        See the list of upcoming alumni events you can attend.
      </Typography>
      {/* Add a calendar or event list here */}
    </Box>
  );
}

function JobsSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Job Postings
      </Typography>
      <Typography>
        Browse the latest job opportunities shared within the alumni network.
      </Typography>
      {/* Add job listing and application tracking here */}
    </Box>
  );
}

function MessagesSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Messages
      </Typography>
      <Typography>
        Check your inbox for messages from fellow alumni or the university.
      </Typography>
      {/* Add message list and interactions here */}
    </Box>
  );
}

function NotificationsSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Notifications
      </Typography>
      <Typography>
        View recent notifications related to events, job postings, and messages.
      </Typography>
      {/* Add notification list here */}
    </Box>
  );
}

function SearchSection() {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Search
      </Typography>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        InputProps={{
          sx: { bgcolor: "background.paper", boxShadow: 1 },
        }}
      />
      <Typography mt={2}>
        Search results will appear here.
      </Typography>
      {/* Add search results display here */}
    </Box>
  );
}
