import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBook,
  FaFilePdf,
  FaClipboardList,
  FaUserGraduate,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard, MdSchool, MdAssignment } from "react-icons/md";

const Home = () => {
  const [user, setUser] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate user authentication and data fetching
    const mockUser = {
      name: "Abdellatif Feghouli",
      path: "Scientific",
      specialization: "Not Yet",
      year: "First Common Year",
      studentId: "446110",
    };

    const mockSubjects = [
      {
        id: 1,
        name: "Advanced Mathematics",
        code: "MATH202",
        resources: {
          exams: 12,
          documents: 24,
          homeworks: 8,
        },
      },
      {
        id: 2,
        name: "Electrical Circuits",
        code: "ELEC201",
        resources: {
          exams: 8,
          documents: 15,
          homeworks: 5,
        },
      },
      {
        id: 3,
        name: "Physics for Engineers",
        code: "PHYS203",
        resources: {
          exams: 10,
          documents: 18,
          homeworks: 6,
        },
      },
      {
        id: 4,
        name: "Programming Fundamentals",
        code: "COMP204",
        resources: {
          exams: 7,
          documents: 22,
          homeworks: 9,
        },
      },
    ];

    setUser(mockUser);
    setSubjects(mockSubjects);
  }, []);

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Implement logout logic
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <MdSchool className="h-8 w-8 text-[#0084bd]" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Miras
                </span>
              </div>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a
                href="#"
                className="text-[#0084bd] font-medium border-b-2 border-[#0084bd] inline-flex items-center px-1 pt-1"
              >
                <MdDashboard className="mr-2" /> Dashboard
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1"
              >
                <FaBook className="mr-2" /> Resources
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1"
              >
                <MdAssignment className="mr-2" /> My Submissions
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="mr-4 hidden md:block">
              <div className="text-sm font-medium text-gray-700">
                {user?.name}
              </div>
              <div className="text-xs text-gray-500">
                {user?.specialization}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-[#0084bd] hover:bg-blue-50 focus:outline-none"
            >
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mb-4">
            Access quality resources for your {user?.specialization} courses.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-500">Path</p>
              <p className="font-medium text-[#0084bd]">{user?.path}</p>
            </div>
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-500">Specialization</p>
              <p className="font-medium text-[#0084bd]">
                {user?.specialization}
              </p>
            </div>
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-500">Academic Year</p>
              <p className="font-medium text-[#0084bd]">{user?.year}</p>
            </div>
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-500">Student ID</p>
              <p className="font-medium text-[#0084bd]">{user?.studentId}</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0084bd] focus:border-[#0084bd] sm:text-sm"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-[#0084bd] text-[#0084bd] rounded-md hover:bg-[#0084bd] hover:text-white transition">
              All Subjects
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">
              Current Semester
            </button>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden border-l-4 ${
                selectedSubject === subject.id
                  ? "border-[#0084bd]"
                  : "border-transparent"
              } hover:border-[#0084bd] transition`}
              onClick={() => setSelectedSubject(subject.id)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500">{subject.code}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-[#0084bd]">
                    Active
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm font-medium text-gray-500 flex items-center justify-center">
                      <FaFilePdf className="mr-1" /> Exams
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[#0084bd]">
                      {subject.resources.exams}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 flex items-center justify-center">
                      <FaBook className="mr-1" /> Documents
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[#0084bd]">
                      {subject.resources.documents}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 flex items-center justify-center">
                      <FaClipboardList className="mr-1" /> Homeworks
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[#0084bd]">
                      {subject.resources.homeworks}
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0084bd] hover:bg-[#006a9b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0084bd] transition">
                  View Resources
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <FaUserGraduate className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No subjects found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm
                ? "Try a different search term"
                : "No subjects available for your current path"}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <MdSchool className="h-6 w-6 text-[#0084bd]" />
              <span className="ml-2 text-lg font-bold text-gray-900">
                Miras
              </span>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} King Saud University. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
