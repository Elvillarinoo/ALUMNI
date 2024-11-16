"use client"; // Add this at the top of the file

import { useState } from 'react';
import Image from 'next/image';

const initialMessages = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Reminder",
    message: "Just a reminder about our meeting tomorrow at 10 AM.",
    date: "2024-09-14",
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Networking Opportunity",
    message: "There is a networking event next week that might interest you.",
    date: "2024-09-12",
  },
  {
    id: 3,
    sender: "Alumni Office",
    subject: "Survey Participation",
    message: "Please participate in our alumni survey to provide your feedback.",
    date: "2024-09-09",
  },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);

  const handleView = (id) => {
    alert(`Viewing message ${id}`);
    // Implement a redirect or modal view here
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background-image.jpg" // Update with your image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>

      <div className="relative z-10 min-h-screen p-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Image
              src="/images/messages-banner.jpg" // Update with your image path
              alt="Messages Banner"
              width={120}
              height={28}
              priority
            />
            <h1 className="text-3xl font-bold ml-4 text-gray-800">Messages</h1>
          </div>

          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{message.subject}</h2>
                    <p className="text-sm text-gray-600">From: {message.sender}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-2">{message.message}</p>
                <p className="text-sm text-gray-500">{message.date}</p>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    onClick={() => handleView(message.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
