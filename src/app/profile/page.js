"use client";

import { useRouter } from 'next/router';
import Image from "next/image";

export default function AlumniProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for demonstration purposes
  const alumni = {
    id: id,
    name: "Jane Doe",
    profilePic: "/app/profile-pic.jpg",
    graduationYear: 2018,
    major: "Computer Science",
    bio: "Passionate software developer with a focus on building scalable web applications. Experienced in full-stack development and a strong advocate for open-source contributions.",
    contact: {
      email: "janedoe@example.com",
      phone: "+1234567890",
    },
    achievements: [
      "Developed a popular open-source library.",
      "Speaker at Tech Conference 2023.",
      "Volunteer at local coding bootcamps.",
    ],
    projects: [
      {
        title: "Project Management Tool",
        description: "A web application for managing project tasks and team collaboration.",
        link: "https://github.com/janedoe/project-management-tool",
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing various projects and skills.",
        link: "https://janedoe.dev",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <Image
            src={alumni.profilePic}
            alt={`${alumni.name} Profile Picture`}
            width={120}
            height={120}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">{alumni.name}</h1>
            <p className="text-gray-600">{alumni.major}, Class of {alumni.graduationYear}</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Bio</h2>
          <p className="mt-2 text-gray-700">{alumni.bio}</p>
        </section>

        {/* Contact Information */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2 text-gray-700">Email: <a href={`mailto:${alumni.contact.email}`} className="text-indigo-600">{alumni.contact.email}</a></p>
          <p className="text-gray-700">Phone: <a href={`tel:${alumni.contact.phone}`} className="text-indigo-600">{alumni.contact.phone}</a></p>
        </section>

        {/* Achievements */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <ul className="mt-2 list-disc pl-5">
            {alumni.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-2 space-y-4">
            {alumni.projects.map((project, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-gray-700">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-indigo-600 hover:underline">
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
