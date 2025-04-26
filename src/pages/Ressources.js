import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBook,
  FaFilePdf,
  FaClipboardList,
  FaUserGraduate,
  FaSignOutAlt,
  FaPlayCircle,
  FaChartBar,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaRegClock,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  MdDashboard,
  MdSchool,
  MdAssignment,
  MdQuiz,
  MdVideoLibrary,
} from "react-icons/md";

const Ressources = () => {
  const [user, setUser] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [completedAttempts, setCompletedAttempts] = useState([]);
  const navigate = useNavigate();

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate user authentication and data fetching
    const mockUser = {
      name: "Khaled Elghamedi",
      path: "Scientific",
      specialization: "Not Yet",
      year: "First Common Year",
      studentId: "44611021",
    };

    const mockSubjects = [
      {
        id: 1,
        name: "Entrepreneurship",
        code: "ENT101",
        instructor: "Dr. Ahmed Khalid",
        description: "Fundamentals of starting and managing a business",
        progress: {
          chapters: 75,
          quizes: 100,
          exams: 30,
          exercises: 60,
          playlist: 0,
        },
        chapters: [
          {
            id: 1,
            title: "Introduction to Entrepreneurship",
            pages: 24,
            completed: true,
          },
          { id: 2, title: "Business Planning", pages: 32, completed: true },
          { id: 3, title: "Market Research", pages: 28, completed: false },
          {
            id: 4,
            title: "Funding Your Business",
            pages: 36,
            completed: false,
          },
        ],
        quizes: [
          {
            id: 1,
            title: "Quiz 1: Basics",
            questions: 10,
            duration: 20,
            score: 85,
            attempts: 2,
          },
          {
            id: 2,
            title: "Quiz 2: Business Models",
            questions: 15,
            duration: 30,
            score: 92,
            attempts: 1,
          },
        ],
        exams: [
          {
            id: 1,
            title: "Midterm Exam",
            questions: 25,
            duration: 60,
            score: null,
            attempts: 0,
          },
          {
            id: 2,
            title: "Final Exam (Practice)",
            questions: 30,
            duration: 90,
            score: null,
            attempts: 0,
          },
        ],
        exercises: [
          { id: 1, title: "Business Plan Draft", submitted: true, grade: "A-" },
          {
            id: 2,
            title: "Market Analysis Report",
            submitted: true,
            grade: "B+",
          },
          { id: 3, title: "Pitch Presentation", submitted: false, grade: null },
        ],
        playlist: [
          {
            id: 1,
            title: "Successful Startup Stories",
            duration: "18:32",
            watched: false,
          },
          {
            id: 2,
            title: "Funding Strategies",
            duration: "22:15",
            watched: false,
          },
        ],
      },
      {
        id: 2,
        name: "Calculus",
        code: "MATH201",
        instructor: "Dr. Sarah Johnson",
        description: "Differential and integral calculus with applications",
        progress: {
          chapters: 40,
          quizes: 50,
          exams: 0,
          exercises: 25,
          playlist: 10,
        },
        chapters: [
          { id: 1, title: "Limits and Continuity", pages: 45, completed: true },
          { id: 2, title: "Derivatives", pages: 52, completed: true },
          {
            id: 3,
            title: "Applications of Derivatives",
            pages: 48,
            completed: false,
          },
          { id: 4, title: "Integration", pages: 60, completed: false },
        ],
        quizes: [
          {
            id: 1,
            title: "Quiz 1: Limits",
            questions: 12,
            duration: 25,
            score: 78,
            attempts: 3,
          },
          {
            id: 2,
            title: "Quiz 2: Derivatives",
            questions: 15,
            duration: 30,
            score: null,
            attempts: 0,
          },
        ],
        exams: [
          {
            id: 1,
            title: "Midterm Exam",
            questions: 20,
            duration: 90,
            score: null,
            attempts: 0,
          },
        ],
        exercises: [
          { id: 1, title: "Limit Problems", submitted: true, grade: "B" },
          {
            id: 2,
            title: "Derivative Applications",
            submitted: false,
            grade: null,
          },
        ],
        playlist: [
          {
            id: 1,
            title: "Understanding Limits",
            duration: "15:45",
            watched: true,
          },
          {
            id: 2,
            title: "Chain Rule Explained",
            duration: "12:30",
            watched: false,
          },
        ],
      },
      {
        id: 3,
        name: "Computer Science",
        code: "CS101",
        instructor: "Prof. Mohammed Ali",
        description: "Introduction to programming and algorithms",
        progress: {
          chapters: 90,
          quizes: 80,
          exams: 50,
          exercises: 100,
          playlist: 40,
        },
        chapters: [
          { id: 1, title: "Programming Basics", pages: 30, completed: true },
          { id: 2, title: "Data Structures", pages: 42, completed: true },
          { id: 3, title: "Algorithms", pages: 38, completed: true },
          {
            id: 4,
            title: "Object-Oriented Programming",
            pages: 35,
            completed: false,
          },
        ],
        quizes: [
          {
            id: 1,
            title: "Quiz 1: Syntax",
            questions: 10,
            duration: 15,
            score: 95,
            attempts: 1,
          },
          {
            id: 2,
            title: "Quiz 2: Data Types",
            questions: 12,
            duration: 20,
            score: 88,
            attempts: 2,
          },
        ],
        exams: [
          {
            id: 1,
            title: "Midterm Exam",
            questions: 25,
            duration: 60,
            score: 76,
            attempts: 1,
          },
        ],
        exercises: [
          { id: 1, title: "Hello World Programs", submitted: true, grade: "A" },
          { id: 2, title: "Array Manipulation", submitted: true, grade: "A-" },
          { id: 3, title: "Sorting Algorithm", submitted: true, grade: "B+" },
        ],
        playlist: [
          {
            id: 1,
            title: "Variables and Data Types",
            duration: "10:20",
            watched: true,
          },
          {
            id: 2,
            title: "Loops and Conditionals",
            duration: "14:35",
            watched: true,
          },
          {
            id: 3,
            title: "Functions Explained",
            duration: "18:10",
            watched: false,
          },
        ],
      },
      {
        id: 4,
        name: "English",
        code: "ENG102",
        instructor: "Dr. Emily Wilson",
        description: "Academic writing and communication skills",
        progress: {
          chapters: 60,
          quizes: 70,
          exams: 20,
          exercises: 90,
          playlist: 30,
        },
        chapters: [
          { id: 1, title: "Grammar Review", pages: 28, completed: true },
          { id: 2, title: "Essay Structure", pages: 32, completed: true },
          { id: 3, title: "Research Writing", pages: 40, completed: false },
          { id: 4, title: "Presentation Skills", pages: 25, completed: false },
        ],
        quizes: [
          {
            id: 1,
            title: "Quiz 1: Grammar",
            questions: 15,
            duration: 20,
            score: 92,
            attempts: 1,
          },
          {
            id: 2,
            title: "Quiz 2: Vocabulary",
            questions: 20,
            duration: 25,
            score: 85,
            attempts: 2,
          },
        ],
        exams: [
          {
            id: 1,
            title: "Midterm Writing Test",
            questions: 3,
            duration: 90,
            score: null,
            attempts: 0,
          },
        ],
        exercises: [
          { id: 1, title: "Paragraph Writing", submitted: true, grade: "A" },
          { id: 2, title: "Essay Draft", submitted: true, grade: "A-" },
          { id: 3, title: "Research Summary", submitted: true, grade: "B+" },
        ],
        playlist: [
          {
            id: 1,
            title: "Common Grammar Mistakes",
            duration: "12:45",
            watched: true,
          },
          {
            id: 2,
            title: "Writing Thesis Statements",
            duration: "15:20",
            watched: false,
          },
        ],
      },
      {
        id: 5,
        name: "Arabic",
        code: "ARB101",
        instructor: "Dr. Khalid Hassan",
        description: "Modern Standard Arabic and literature",
        progress: {
          chapters: 30,
          quizes: 40,
          exams: 10,
          exercises: 20,
          playlist: 5,
        },
        chapters: [
          { id: 1, title: "Arabic Alphabet", pages: 35, completed: true },
          { id: 2, title: "Basic Grammar", pages: 42, completed: false },
          {
            id: 3,
            title: "Reading Comprehension",
            pages: 38,
            completed: false,
          },
        ],
        quizes: [
          {
            id: 1,
            title: "Quiz 1: Vocabulary",
            questions: 10,
            duration: 15,
            score: 75,
            attempts: 2,
          },
          {
            id: 2,
            title: "Quiz 2: Grammar",
            questions: 12,
            duration: 20,
            score: null,
            attempts: 0,
          },
        ],
        exams: [
          {
            id: 1,
            title: "Midterm Exam",
            questions: 20,
            duration: 60,
            score: null,
            attempts: 0,
          },
        ],
        exercises: [
          {
            id: 1,
            title: "Writing Assignment 1",
            submitted: true,
            grade: "C+",
          },
          { id: 2, title: "Reading Exercise", submitted: false, grade: null },
        ],
        playlist: [
          {
            id: 1,
            title: "Pronunciation Guide",
            duration: "20:15",
            watched: false,
          },
        ],
      },
    ];

    const mockAttempts = [
      {
        id: 1,
        subject: "Entrepreneurship",
        type: "quiz",
        title: "Quiz 1: Basics",
        date: "2023-10-15",
        score: 85,
        total: 100,
        timeSpent: "15:32",
      },
      {
        id: 2,
        subject: "Computer Science",
        type: "exam",
        title: "Midterm Exam",
        date: "2023-11-05",
        score: 76,
        total: 100,
        timeSpent: "52:18",
      },
      {
        id: 3,
        subject: "English",
        type: "quiz",
        title: "Quiz 1: Grammar",
        date: "2023-10-20",
        score: 92,
        total: 100,
        timeSpent: "12:45",
      },
    ];

    setUser(mockUser);
    setSubjects(mockSubjects);
    setCompletedAttempts(mockAttempts);
  }, []);

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleStartQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  const ProgressBar = ({ percentage }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-secondary h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const ResourceCard = ({ title, icon, count, color }) => {
    return (
      <div
        className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${color} flex items-center`}
      >
        <div className="p-3 rounded-full bg-opacity-20 bg-secondary mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-700">{title}</h3>
          <p className="text-2xl font-bold text-secondary">{count}</p>
        </div>
      </div>
    );
  };

  const SubjectProgress = ({ subject }) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Your Progress
        </h3>
        <div className="space-y-4">
          {Object.entries(subject.progress).map(([key, value]) => (
            <div key={key}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {key} ({value}%)
                </span>
                <span className="text-sm text-gray-500">{value}/100</span>
              </div>
              <ProgressBar percentage={value} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ChapterItem = ({ chapter }) => {
    return (
      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
        <div className="flex items-center">
          {chapter.completed ? (
            <FaCheckCircle className="text-green-500 mr-3" />
          ) : (
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3"></div>
          )}
          <span
            className={chapter.completed ? "text-gray-600" : "text-gray-800"}
          >
            {chapter.title}
          </span>
        </div>
        <span className="text-sm text-gray-500">{chapter.pages} pages</span>
      </div>
    );
  };

  const QuizExamItem = ({ item, type }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-800">{item.title}</h4>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="mr-3">{item.questions} questions</span>
              <span className="flex items-center">
                <FaRegClock className="mr-1" /> {item.duration} min
              </span>
            </div>
          </div>
          {item.score !== null ? (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              {item.score}%
            </div>
          ) : (
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
              Not attempted
            </div>
          )}
        </div>
        {item.score !== null && (
          <div className="mt-3 text-sm text-gray-600">
            <span className="mr-3">Attempts: {item.attempts}</span>
            {type === "quiz" && (
              <button
                onClick={() => handleStartQuiz(item.id)}
                className="text-secondary hover:text-primary font-medium"
              >
                Retake quiz
              </button>
            )}
          </div>
        )}
        {item.score === null && (
          <button
            onClick={() => (type === "quiz" ? handleStartQuiz(item.id) : null)}
            className="mt-3 w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition"
          >
            Start {type}
          </button>
        )}
      </div>
    );
  };

  const ExerciseItem = ({ exercise }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-800">{exercise.title}</h4>
            {exercise.submitted ? (
              <div className="mt-1 text-sm text-gray-600">
                Submitted on {new Date().toLocaleDateString()}
              </div>
            ) : (
              <div className="mt-1 text-sm text-gray-600">Due in 3 days</div>
            )}
          </div>
          {exercise.submitted ? (
            <div
              className={`px-2 py-1 rounded text-sm font-medium ${
                exercise.grade?.startsWith("A")
                  ? "bg-green-100 text-green-800"
                  : exercise.grade?.startsWith("B")
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {exercise.grade}
            </div>
          ) : (
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
              Pending
            </div>
          )}
        </div>
        {!exercise.submitted && (
          <button className="mt-3 w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
            Submit Assignment
          </button>
        )}
      </div>
    );
  };

  const VideoItem = ({ video }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <FaPlayCircle className="text-secondary text-xl mr-3 mt-1" />
            <div>
              <h4 className="font-medium text-gray-800">{video.title}</h4>
              <div className="mt-1 text-sm text-gray-500">
                {video.duration} • {video.watched ? "Watched" : "Not watched"}
              </div>
            </div>
          </div>
          {video.watched ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FaRegStar className="text-gray-300" />
          )}
        </div>
        <button className="mt-3 w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
          Watch Video
        </button>
      </div>
    );
  };

  const AttemptItem = ({ attempt }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-800">{attempt.title}</h4>
            <div className="mt-1 text-sm text-gray-600">
              <span className="mr-3">{attempt.subject}</span>
              <span className="mr-3">{attempt.date}</span>
              <span>Time spent: {attempt.timeSpent}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-2">
              {attempt.score}/{attempt.total}
            </div>
            <button className="text-secondary hover:text-primary">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-background text-gray-900 pt-20 md:pt-6">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-secondary mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 mb-6">
                Access quality resources for your {user?.specialization}{" "}
                courses.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-secondary"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>

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

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ResourceCard
            title="Active Subjects"
            icon={<MdSchool className="text-secondary text-xl" />}
            count={subjects.length}
            color="border-l-secondary"
          />
          <ResourceCard
            title="Completed Chapters"
            icon={<FaBook className="text-secondary text-xl" />}
            count={subjects.reduce(
              (sum, subj) =>
                sum + subj.chapters.filter((c) => c.completed).length,
              0
            )}
            color="border-l-primary"
          />
          <ResourceCard
            title="Quizzes Taken"
            icon={<MdQuiz className="text-secondary text-xl" />}
            count={subjects.reduce(
              (sum, subj) =>
                sum + subj.quizes.filter((q) => q.score !== null).length,
              0
            )}
            color="border-l-green-500"
          />
          <ResourceCard
            title="Assignments Submitted"
            icon={<MdAssignment className="text-secondary text-xl" />}
            count={subjects.reduce(
              (sum, subj) =>
                sum + subj.exercises.filter((e) => e.submitted).length,
              0
            )}
            color="border-l-purple-500"
          />
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
            <button className="px-4 py-2 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition">
              All Subjects
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Current Semester
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Favorites
            </button>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500">{subject.code}</p>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-white rounded-full">
                    Active
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {subject.description}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Instructor: {subject.instructor}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {[
                    {
                      icon: <FaBook className="inline mr-1" />,
                      label: "Chapters",
                      count: subject.chapters.length,
                    },
                    {
                      icon: <MdQuiz className="inline mr-1" />,
                      label: "Quizzes",
                      count: subject.quizes.length,
                    },
                    {
                      icon: <FaFilePdf className="inline mr-1" />,
                      label: "Exams",
                      count: subject.exams.length,
                    },
                  ].map(({ icon, label, count }) => (
                    <div key={label}>
                      <div className="text-sm text-gray-600">
                        {icon} {label}
                      </div>
                      <div className="text-lg font-bold text-secondary mt-1">
                        {count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                <div className="w-full">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Course Progress</span>
                    <span>
                      {Math.round(
                        (subject.progress.chapters +
                          subject.progress.quizes +
                          subject.progress.exams +
                          subject.progress.exercises +
                          subject.progress.playlist) /
                          5
                      )}
                      %
                    </span>
                  </div>
                  <ProgressBar
                    percentage={
                      (subject.progress.chapters +
                        subject.progress.quizes +
                        subject.progress.exams +
                        subject.progress.exercises +
                        subject.progress.playlist) /
                      5
                    }
                  />
                </div>
              </div>

              <div className="px-6 py-3 bg-white border-t border-gray-200">
                <button
                  onClick={() =>
                    setSelectedSubject(
                      selectedSubject === subject.id ? null : subject.id
                    )
                  }
                  className="w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition flex items-center justify-center"
                >
                  {selectedSubject === subject.id
                    ? "Hide Details"
                    : "View Resources"}
                </button>
              </div>

              {/* Subject Details Panel */}
              {selectedSubject === subject.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <SubjectProgress subject={subject} />

                  {/* Chapters Section */}
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`chapters-${subject.id}`)}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        Chapters
                      </h3>
                      {expandedSections[`chapters-${subject.id}`] ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    {expandedSections[`chapters-${subject.id}`] && (
                      <div className="mt-4">
                        {subject.chapters.map((chapter) => (
                          <ChapterItem
                            key={chapter.id}
                            chapter={chapter}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quizzes Section */}
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`quizes-${subject.id}`)}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        Quizzes
                      </h3>
                      {expandedSections[`quizes-${subject.id}`] ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    {expandedSections[`quizes-${subject.id}`] && (
                      <div className="mt-4">
                        {subject.quizes.map((quiz) => (
                          <QuizExamItem
                            key={quiz.id}
                            item={quiz}
                            type="quiz"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Exams Section */}
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`exams-${subject.id}`)}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        Exams
                      </h3>
                      {expandedSections[`exams-${subject.id}`] ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    {expandedSections[`exams-${subject.id}`] && (
                      <div className="mt-4">
                        {subject.exams.map((exam) => (
                          <QuizExamItem
                            key={exam.id}
                            item={exam}
                            type="exam"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Exercises Section */}
                  <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`exercises-${subject.id}`)}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        Exercises & Assignments
                      </h3>
                      {expandedSections[`exercises-${subject.id}`] ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    {expandedSections[`exercises-${subject.id}`] && (
                      <div className="mt-4">
                        {subject.exercises.map((exercise) => (
                          <ExerciseItem
                            key={exercise.id}
                            exercise={exercise}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Playlist Section */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`playlist-${subject.id}`)}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        Video Playlist
                      </h3>
                      {expandedSections[`playlist-${subject.id}`] ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                    {expandedSections[`playlist-${subject.id}`] && (
                      <div className="mt-4">
                        {subject.playlist.map((video) => (
                          <VideoItem
                            key={video.id}
                            video={video}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Previous Attempts Section */}
        <div className="mb-12 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Your Previous Attempts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaChartBar className="mr-2 text-secondary" /> Quiz Performance
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-500">
                    Quiz performance chart would be displayed here
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaClipboardList className="mr-2 text-secondary" /> Recent
                Attempts
              </h3>
              <div>
                {completedAttempts.length > 0 ? (
                  completedAttempts.map((attempt) => (
                    <AttemptItem
                      key={attempt.id}
                      attempt={attempt}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No attempts recorded yet
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Recommendations */}
        <div className="mb-12 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Calculus Problems",
                subject: "Calculus",
                type: "exercise",
                description:
                  "Practice problems to prepare for your upcoming exam",
                progress: 0,
              },
              {
                title: "Business Plan Templates",
                subject: "Entrepreneurship",
                type: "resource",
                description:
                  "Templates to help structure your business plan assignment",
                progress: 0,
              },
              {
                title: "Programming Challenges",
                subject: "Computer Science",
                type: "quiz",
                description: "Test your knowledge with these coding challenges",
                progress: 0,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
              >
                <div className="flex items-center mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      item.type === "quiz"
                        ? "bg-purple-100 text-purple-800"
                        : item.type === "exercise"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {item.subject}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <ProgressBar percentage={item.progress} />
                </div>
                <button className="w-full py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition">
                  {item.type === "quiz"
                    ? "Start Quiz"
                    : item.type === "exercise"
                    ? "View Exercises"
                    : "Download"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {filteredSubjects.length === 0 && (
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <FaBook className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No subjects found
            </h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any subjects matching your search. Try a
              different term or check back later.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-secondary text-white rounded-md font-medium hover:bg-primary transition"
            >
              Clear search
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Ressources;
