'use client'

import Image from "next/image";

const notifications = [
  {
    id: 1,
    title: "Upcoming Alumni Event",
    message: "Don't miss our annual alumni meet-up happening next month.",
    date: "2024-09-15",
  },
  {
    id: 2,
    title: "New Job Postings",
    message: "Check out the latest job opportunities for alumni.",
    date: "2024-09-10",
  },
  {
    id: 3,
    title: "Alumni Survey",
    message: "We'd love to hear your feedback. Please fill out our survey.",
    date: "2024-09-05",
  },
];

export default function Notifications() {
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
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/notifications-banner.jpg" // Update with your image path
              alt="Notifications Banner"
              width={120}
              height={28}
              priority
            />
          </div>

          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Notifications</h1>

          <div className="space-y-6">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h2 className="text-2xl font-semibold text-gray-900">{notification.title}</h2>
                <p className="text-gray-600 mt-2">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-4">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
