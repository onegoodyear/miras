import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaChalkboardTeacher,
  FaPhone,
  FaEnvelope,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import { MdCancel, MdOutlineDone } from "react-icons/md";

const Support = () => {
  // Mock data for revision sessions
  const [sessions, setSessions] = useState([
    {
      id: 1,
      subject: "Calculus",
      topic: "Limits and Continuity",
      date: "2023-11-15",
      time: "14:00 - 15:30",
      instructor: "Dr. Sarah Johnson",
      status: "upcoming",
      reason: "Scored 65% on Quiz 2 (class avg: 72%)",
      location: "Online (Zoom)",
      contact: {
        email: "s.johnson@university.edu",
        phone: "+123 456 7890",
        office: "Math Building, Room 302",
      },
    },
    {
      id: 2,
      subject: "Computer Science",
      topic: "Data Structures",
      date: "2023-11-18",
      time: "10:00 - 11:30",
      instructor: "Prof. Mohammed Ali",
      status: "upcoming",
      reason: "Low assignment scores (avg: B-)",
      location: "CS Lab 4",
      contact: {
        email: "m.ali@university.edu",
        phone: "+123 456 7891",
        office: "CS Building, Room 215",
      },
    },
    {
      id: 3,
      subject: "Entrepreneurship",
      topic: "Business Planning",
      date: "2023-11-10",
      time: "16:00 - 17:30",
      instructor: "Dr. Ahmed Khalid",
      status: "completed",
      reason: "Requested additional help",
      location: "Business School, Room 101",
      contact: {
        email: "a.khalid@university.edu",
        phone: "+123 456 7892",
        office: "Business Building, Room 410",
      },
    },
  ]);

  // Mock data for all instructors
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Calculus",
      email: "s.johnson@university.edu",
      phone: "+123 456 7890",
      office: "Math Building, Room 302",
      officeHours: "Mon, Wed 10:00-12:00",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Prof. Mohammed Ali",
      subject: "Computer Science",
      email: "m.ali@university.edu",
      phone: "+123 456 7891",
      office: "CS Building, Room 215",
      officeHours: "Tue, Thu 14:00-16:00",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Dr. Ahmed Khalid",
      subject: "Entrepreneurship",
      email: "a.khalid@university.edu",
      phone: "+123 456 7892",
      office: "Business Building, Room 410",
      officeHours: "Mon, Fri 13:00-15:00",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      name: "Dr. Emily Wilson",
      subject: "English",
      email: "e.wilson@university.edu",
      phone: "+123 456 7893",
      office: "Humanities Building, Room 108",
      officeHours: "Wed, Fri 09:00-11:00",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  const cancelSession = (sessionId) => {
    setSessions(
      sessions.map((session) =>
        session.id === sessionId ? { ...session, status: "cancelled" } : session
      )
    );
  };

  return (
    <div className="min-h-screen bg-background text-gray-900 pt-20 md:pt-6">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header Section */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            Learning Support Center
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Here you can manage your revision sessions, view instructor
            contacts, and get help based on your performance in quizzes and
            assignments. These sessions are automatically scheduled based on
            areas where you might need additional support.
          </p>
        </div>

        {/* Revision Sessions Section */}
        <div className="mb-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-secondary flex items-center">
              <FaCalendarAlt className="mr-3" /> Your Revision Sessions
            </h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
                Request New Session
              </button>
            </div>
          </div>

          {/* Sessions Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {["Upcoming", "Completed", "Cancelled"].map((tab) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    tab === "Upcoming"
                      ? "border-secondary text-secondary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab} (
                  {
                    sessions.filter((s) => s.status === tab.toLowerCase())
                      .length
                  }
                  )
                </button>
              ))}
            </nav>
          </div>

          {/* Sessions List */}
          <div className="space-y-6">
            {sessions.filter((s) => s.status === "upcoming").length > 0 ? (
              sessions
                .filter((s) => s.status === "upcoming")
                .map((session) => (
                  <div
                    key={session.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center">
                            <h3 className="text-xl font-semibold text-gray-800 mr-3">
                              {session.subject}
                            </h3>
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Confirmed
                            </span>
                          </div>
                          <p className="text-gray-600 mt-1">{session.topic}</p>
                          <div className="flex items-center mt-3 text-sm text-gray-500">
                            <FaCalendarAlt className="mr-2" />
                            <span className="mr-4">
                              {new Date(session.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                            <FaClock className="mr-2" />
                            <span>{session.time}</span>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="font-medium">Location: </span>
                            <span className="text-gray-600">
                              {session.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                          <div className="flex items-center mb-3">
                            <FaChalkboardTeacher className="text-secondary mr-2" />
                            <span className="font-medium">
                              {session.instructor}
                            </span>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="flex items-start">
                              <FaInfoCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                              <p className="text-sm text-blue-700">
                                {session.reason}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                      <div className="mb-3 md:mb-0">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">
                          Instructor Contact:
                        </h4>
                        <div className="flex items-center space-x-4">
                          <a
                            href={`mailto:${session.contact.email}`}
                            className="flex items-center text-sm text-gray-600 hover:text-secondary"
                          >
                            <FaEnvelope className="mr-1" /> Email
                          </a>
                          <a
                            href={`tel:${session.contact.phone}`}
                            className="flex items-center text-sm text-gray-600 hover:text-secondary"
                          >
                            <FaPhone className="mr-1" /> Call
                          </a>
                          <span className="flex items-center text-sm text-gray-600">
                            <FaChalkboardTeacher className="mr-1" />{" "}
                            {session.contact.office}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => cancelSession(session.id)}
                          className="px-4 py-2 border border-red-300 text-red-600 rounded-md font-medium hover:bg-red-50 transition flex items-center"
                        >
                          <MdCancel className="mr-2" /> Cancel Session
                        </button>
                        <button className="px-4 py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition flex items-center">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <FaCalendarAlt className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No upcoming revision sessions
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  You don't have any scheduled revision sessions at the moment.
                  New sessions will appear here when scheduled based on your
                  performance.
                </p>
                <button className="px-4 py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
                  Request a Session
                </button>
              </div>
            )}
          </div>
        </div>

        {/* All Instructors Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <FaChalkboardTeacher className="mr-3" /> Subject Instructors
          </h2>
          <p className="text-gray-600 mb-6">
            Contact your instructors directly for additional help or questions
            about course material.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {instructor.subject}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${instructor.email}`}
                        className="hover:text-secondary truncate"
                      >
                        {instructor.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${instructor.phone}`}
                        className="hover:text-secondary"
                      >
                        {instructor.phone}
                      </a>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <FaChalkboardTeacher className="mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{instructor.office}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <FaClock className="mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{instructor.officeHours}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                  <button className="w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
                    Contact Instructor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
