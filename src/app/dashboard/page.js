"use client";

import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-6 text-xl font-semibold flex items-center">
          <Image src="/app/vpgame.jpg" alt="Logo" width={120} height={28} priority />
        </div>
        <nav className="mt-10">
          <button
            onClick={() => setSection("Profile")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Profile
          </button>
          <button
            onClick={() => setSection("Events")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Events
          </button>
          <button
            onClick={() => setSection("Jobs")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Jobs
          </button>
          <button
            onClick={() => setSection("Messages")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Messages
          </button>
          <button
            onClick={() => setSection("Notifications")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Notifications
          </button>
          <button
            onClick={() => setSection("Search")}
            className="block w-full py-2 px-4 text-left hover:bg-gray-700"
          >
            Search
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md">{renderSection()}</div>
      </main>
    </div>
  );
}

// Example sections

function ProfileSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="flex items-center space-x-4">
        <Image src="" alt="Profile Picture" width={100} height={100} className="rounded-full" />
        <div>
          <h3 className="text-black font-bold">Nudegra</h3>
          <p className="text-gray-600">Bachelor of Science in Dota Since 2019</p>
          <button className="mt-2 py-1 px-4 bg-indigo-600 text-white rounded">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

function EventsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <p>See the list of upcoming alumni events you can attend.</p>
      {/* Add a calendar or event list here */}
    </div>
  );
}

function JobsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Job Postings</h2>
      <p>Browse the latest job opportunities shared within the alumni network.</p>
      {/* Add job listing and application tracking here */}
    </div>
  );
}

function MessagesSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <p>Check your inbox for messages from fellow alumni or the university.</p>
      {/* Add message list and interactions here */}
    </div>
  );
}

function NotificationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <p>View recent notifications related to events, job postings, and messages.</p>
      {/* Add notification list here */}
    </div>
  );
}

function SearchSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
      />
      <p className="mt-4">Search results will appear here.</p>
      {/* Add search results display here */}
    </div>
  );
}
