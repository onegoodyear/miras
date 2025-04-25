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

const Ressources = () => {
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
    navigate("/login");
  };
  function ResourceStat({ icon, label, value }) {
    return (
      <div>
        <div className="text-sm text-gray-500 flex justify-center items-center">
          {icon} {label}
        </div>
        <div className="mt-1 text-lg font-semibold text-[#0084bd]">{value}</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full bg-background text-gray-900 pt-20 md:pt-6   ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mb-6">
            Access quality resources for your {user?.specialization} courses.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Path", value: user?.path },
              { label: "Specialization", value: user?.specialization },
              { label: "Academic Year", value: user?.year },
              { label: "Student ID", value: user?.studentId },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-secondary">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search subjects..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-secondary text-secondary rounded-md hover:bg-primary hover:bg-primary hover:text-white transition">
              All Subjects
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Current Semester
            </button>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${
                selectedSubject === subject.id
                  ? "border-secondary"
                  : "border-transparent"
              } hover:shadow-lg transition cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500">{subject.code}</p>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-medium bg-secondary hover:bg-primary text-white rounded-full">
                  Active
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  {
                    icon: <FaFilePdf />,
                    label: "Exams",
                    count: subject.resources.exams,
                  },
                  {
                    icon: <FaBook />,
                    label: "Documents",
                    count: subject.resources.documents,
                  },
                  {
                    icon: <FaClipboardList />,
                    label: "Homeworks",
                    count: subject.resources.homeworks,
                  },
                ].map(({ icon, label, count }) => (
                  <div key={label}>
                    <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                      {icon} {label}
                    </div>
                    <div className="text-lg font-bold text-secondary mt-1">
                      {count}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-2 px-4 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
                View Resources
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSubjects.length === 0 && (
          <div className="text-center py-16">
            <FaUserGraduate className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              No subjects found
            </h3>
            <p className="mt-2 text-gray-500">
              {searchTerm
                ? "Try a different search term."
                : "No subjects available for your current path."}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <MdSchool className="h-6 w-6 text-secondary" />
              <span className="ml-2 text-lg font-bold text-gray-800">
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

export default Ressources;
