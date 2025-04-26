import { useState, useEffect } from "react";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";
import { GiMoneyStack } from "react-icons/gi";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaChartLine,
  FaBook,
  FaLightbulb,
  FaComments,
  FaFlask,
  FaCalculator,
  FaBrain,
  FaUserTie,
  FaLaptopCode,
  FaMedkit,
  FaChartPie,
  FaArrowRight,
  FaUniversity,
  FaBriefcase,
  FaClipboardCheck,
  FaStar,
  FaRegStar,
  FaChalkboardTeacher,
  FaDna,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  MdScience,
  MdOutlineEmojiObjects,
  MdSchool,
  MdEngineering,
  MdBiotech as Biotech,
} from "react-icons/md";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  const user = {
    name: "Abdellatif Feghouli",
    studentId: "446110",
    email: "a.feghouli@example.edu",
    department: "Computer Science",
    level: "Senior",
    joinDate: "September 2020",
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Student data
  const student = {
    name: "Abdellatif Feghouli",
    id: "446110",
    year: "First Common Year",
    specialization: "Not Yet Selected",
    path: "Scientific",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastQuizDate: "2023-11-15",
    overallScore: 78,
    quizzesCompleted: 24,
    averageImprovement: 12,
  };

  // Skill assessment data
  const skillData = {
    labels: [
      "Mathematics",
      "Problem Solving",
      "Communication",
      "Soft Skills",
      "Physics",
      "Chemistry",
    ],
    datasets: [
      {
        label: "Current Level",
        data: [85, 72, 68, 65, 78, 70],
        backgroundColor: [
          "rgba(0, 132, 189, 0.7)",
          "rgba(226, 183, 20, 0.7)",
          "rgba(0, 132, 189, 0.7)",
          "rgba(226, 183, 20, 0.7)",
          "rgba(0, 132, 189, 0.7)",
          "rgba(226, 183, 20, 0.7)",
        ],
        borderColor: [
          "rgba(0, 132, 189, 1)",
          "rgba(226, 183, 20, 1)",
          "rgba(0, 132, 189, 1)",
          "rgba(226, 183, 20, 1)",
          "rgba(0, 132, 189, 1)",
          "rgba(226, 183, 20, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Progress over time data
  const progressData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Mathematics",
        data: [65, 59, 70, 71, 76, 75, 77, 79, 82, 83, 85],
        borderColor: "rgba(0, 132, 189, 1)",
        backgroundColor: "rgba(0, 132, 189, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Physics",
        data: [55, 60, 62, 65, 67, 70, 72, 73, 75, 77, 78],
        borderColor: "rgba(226, 183, 20, 1)",
        backgroundColor: "rgba(226, 183, 20, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Quiz performance data
  const quizData = {
    labels: [
      "Algebra",
      "Calculus",
      "Mechanics",
      "Thermodynamics",
      "Organic Chemistry",
      "Electromagnetism",
    ],
    datasets: [
      {
        label: "Your Score",
        data: [82, 78, 85, 72, 68, 80],
        backgroundColor: "rgba(0, 132, 189, 0.7)",
      },
      {
        label: "Class Average",
        data: [75, 70, 72, 65, 60, 68],
        backgroundColor: "rgba(226, 183, 20, 0.7)",
      },
    ],
  };

  // Learning style data
  const learningStyleData = {
    labels: ["Visual", "Auditory", "Kinesthetic", "Reading/Writing"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          "rgba(0, 132, 189, 0.7)",
          "rgba(226, 183, 20, 0.7)",
          "rgba(0, 132, 189, 0.5)",
          "rgba(226, 183, 20, 0.5)",
        ],
        borderColor: [
          "rgba(0, 132, 189, 1)",
          "rgba(226, 183, 20, 1)",
          "rgba(0, 132, 189, 1)",
          "rgba(226, 183, 20, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Career path recommendations
  const careerRecommendations = [
    {
      id: 1,
      title: "Data Science",
      match: 92,
      description:
        "Your strong mathematical skills make you an excellent candidate for data science.",
      icon: <FaLaptopCode className="text-2xl" />,
      courses: [
        "Introduction to Python",
        "Statistics Fundamentals",
        "Machine Learning Basics",
      ],
    },
    {
      id: 2,
      title: "Engineering Physics",
      match: 88,
      description:
        "Your physics and problem-solving skills suggest you'd excel in engineering physics.",
      icon: <MdScience className="text-2xl" />,
      courses: [
        "Advanced Mechanics",
        "Electromagnetic Theory",
        "Quantum Physics",
      ],
    },
    {
      id: 3,
      title: "Financial Analysis",
      match: 85,
      description:
        "Combine your math skills with business acumen for a career in finance.",
      icon: <FaUserTie className="text-2xl" />,
      courses: [
        "Financial Accounting",
        "Investment Principles",
        "Econometrics",
      ],
    },
  ];

  const improvementRoadmap = [
    {
      skill: "Communication",
      currentLevel: 68,
      targetLevel: 80,
      improvementPlan: [
        {
          action: "Join Debate Club",
          timeline: "Ongoing",
          resources: ["Campus debate society", "Online courses"],
          expectedOutcome: "+5% in 2 months",
        },
        {
          action: "Technical Writing Course",
          timeline: "Next semester",
          resources: ["ENG 205", "Coursera specialization"],
          expectedOutcome: "+7% in 3 months",
        },
      ],
    },
    {
      skill: "Chemistry",
      currentLevel: 70,
      targetLevel: 85,
      improvementPlan: [
        {
          action: "Advanced Lab Work",
          timeline: "Summer term",
          resources: ["CHEM 210", "Research assistant position"],
          expectedOutcome: "+8% in 4 months",
        },
        {
          action: "Molecular Modeling Workshop",
          timeline: "January",
          resources: ["Chemistry department", "Online materials"],
          expectedOutcome: "+5% in 2 months",
        },
      ],
    },
  ];

  const specializationPaths = [
    {
      id: 1,
      name: "Computer Science",
      match: 90,
      icon: <FaLaptopCode className="text-2xl" />,
      description:
        "Your analytical skills and math proficiency make you an excellent candidate for CS.",
      requiredSkills: [
        { name: "Mathematics", score: 85, threshold: 80 },
        { name: "Logic", score: 82, threshold: 75 },
        { name: "Algorithms", score: 78, threshold: 70 },
      ],
      careerOptions: [
        { title: "Software Engineer", avgSalary: "$110,000" },
        { title: "Data Scientist", avgSalary: "$120,000" },
        { title: "AI Researcher", avgSalary: "$140,000" },
      ],
    },
    {
      id: 2,
      name: "Biomedical Engineering",
      match: 82,
      icon: <Biotech className="text-2xl" />,
      description:
        "Combines your physics/chemistry knowledge with medical applications.",
      requiredSkills: [
        { name: "Physics", score: 78, threshold: 75 },
        { name: "Chemistry", score: 70, threshold: 70 },
        { name: "Biology", score: 65, threshold: 65 },
      ],
      careerOptions: [
        { title: "Biomedical Engineer", avgSalary: "$92,000" },
        { title: "Medical Device Developer", avgSalary: "$105,000" },
        { title: "Clinical Researcher", avgSalary: "$85,000" },
      ],
    },
    {
      id: 3,
      name: "Financial Mathematics",
      match: 88,
      icon: <GiMoneyStack className="text-2xl" />,
      description:
        "Applies your math skills to economic modeling and risk assessment.",
      requiredSkills: [
        { name: "Mathematics", score: 85, threshold: 85 },
        { name: "Statistics", score: 82, threshold: 80 },
        { name: "Economics", score: 68, threshold: 65 },
      ],
      careerOptions: [
        { title: "Quantitative Analyst", avgSalary: "$130,000" },
        { title: "Risk Manager", avgSalary: "$115,000" },
        { title: "Investment Banker", avgSalary: "$150,000+" },
      ],
    },
  ];

  const improvementRecommendations = [
    {
      id: 1,
      skill: "Communication",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      activities: [
        "Join debate club",
        "Take public speaking course",
        "Practice writing technical reports",
      ],
    },
    {
      id: 2,
      skill: "Soft Skills",
      currentLevel: "Basic",
      targetLevel: "Intermediate",
      activities: [
        "Attend leadership workshop",
        "Participate in group projects",
        "Practice active listening",
      ],
    },
  ];

  const courseRecommendations = [
    {
      id: 1,
      title: "Advanced Linear Algebra",
      skill: "Mathematics",
      level: "Advanced",
      duration: "10 weeks",
      priority: "High",
      icon: <FaCalculator className="text-xl" />,
      description:
        "Builds on your existing algebra skills (82%) to prepare for machine learning concepts.",
      outcomes: [
        "Matrix operations",
        "Vector spaces",
        "Eigenvalues applications",
      ],
    },
    {
      id: 2,
      title: "Scientific Writing",
      skill: "Communication",
      level: "Intermediate",
      duration: "6 weeks",
      priority: "Medium",
      icon: <FaComments className="text-xl" />,
      description:
        "Improves your technical writing to complement strong analytical skills.",
      outcomes: ["Research papers", "Technical reports", "Grant proposals"],
    },
    {
      id: 3,
      title: "Computational Physics",
      skill: "Problem Solving",
      level: "Advanced",
      duration: "12 weeks",
      priority: "High",
      icon: <FaFlask className="text-xl" />,
      description:
        "Bridges your physics knowledge with programming applications.",
      outcomes: ["Numerical methods", "Simulations", "Data analysis"],
    },
  ];

  // Skill improvement recommendations
  const universityPrograms = [
    {
      university: "King Saud University",
      program: "Computer Science",
      match: 92,
      requirements: "90% in Math, 85% in Physics",
      deadline: "March 15, 2024",
      scholarship: "Available",
    },
    {
      university: "KAUST",
      program: "Applied Mathematics",
      match: 89,
      requirements: "88% in Math, 80% in Science",
      deadline: "February 1, 2024",
      scholarship: "Full funding",
    },
    {
      university: "MIT",
      program: "Physics",
      match: 85,
      requirements: "95% in Math/Physics, research experience",
      deadline: "December 15, 2023",
      scholarship: "Need-based",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-primary">
            User Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Student ID</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user.studentId}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user.email}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Department</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user.department}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Level</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user.level}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Join Date</h3>
              <p className="text-lg font-semibold text-gray-800">
                {user.joinDate}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Student Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary mr-4">
                  <FaUserGraduate className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Overall Score</p>
                  <p className="text-2xl font-bold">
                    {student.overallScore}/100
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <MdSchool className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Academic Path</p>
                  <p className="text-xl font-bold">{student.path}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary mr-4">
                  <FaBook className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quizzes Completed</p>
                  <p className="text-2xl font-bold">
                    {student.quizzesCompleted}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <FaChartLine className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg Improvement</p>
                  <p className="text-2xl font-bold">
                    +{student.averageImprovement}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {["overview", "skills", "progress", "recommendations"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skill Assessment */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaLightbulb className="text-primary mr-2" /> Skill Assessment
                </h2>
                <div className="h-80">
                  <Bar
                    data={skillData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                        },
                      },
                    }}
                  />
                </div>
              </div>

              {/* Learning Style */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <MdOutlineEmojiObjects className="text-primary mr-2" />{" "}
                  Learning Style
                </h2>
                <div className="h-80">
                  <Doughnut
                    data={learningStyleData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Progress Over Time */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaChartLine className="text-primary mr-2" /> Progress Over Time
              </h2>
              <div className="h-96">
                <Line
                  data={progressData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skill Distribution */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">Skill Distribution</h2>
                <div className="h-80">
                  <Pie
                    data={skillData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </div>

              {/* Quiz Performance */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">
                  Quiz Performance vs Class Average
                </h2>
                <div className="h-80">
                  <Bar
                    data={quizData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Skill Improvement Recommendations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">
                Skill Improvement Recommendations
              </h2>
              <div className="space-y-4">
                {improvementRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg">{rec.skill}</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">
                          Current:
                        </span>
                        <span className="font-medium">{rec.currentLevel}</span>
                        <FaArrowRight className="mx-2 text-gray-400" />
                        <span className="text-sm text-gray-500 mr-2">
                          Target:
                        </span>
                        <span className="font-medium text-primary">
                          {rec.targetLevel}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Recommended Activities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {rec.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600"
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === "progress" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">
                Detailed Progress Analysis
              </h2>
              <div className="h-96">
                <Line
                  data={progressData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mathematics Progress */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaCalculator className="text-primary mr-2" /> Mathematics
                  Mastery
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Algebra
                      </span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Calculus
                      </span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Statistics
                      </span>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Science Progress */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaFlask className="text-primary mr-2" /> Science Proficiency
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Physics
                      </span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Chemistry
                      </span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Biology
                      </span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-secondary h-2.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommendations Tab */}
        {activeTab === "recommendations" && (
          <div className="space-y-6">
            {/* Career Path Recommendations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">
                Career Path Recommendations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {careerRecommendations.map((career) => (
                  <div
                    key={career.id}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                          {career.icon}
                        </div>
                        <h3 className="font-bold text-lg">{career.title}</h3>
                      </div>
                      <span className="bg-secondary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {career.match}% match
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{career.description}</p>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Suggested Courses:
                      </h4>
                      <ul className="space-y-2">
                        {career.courses.map((course, idx) => (
                          <li
                            key={idx}
                            className="flex items-center"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                            <span className="text-gray-600">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Recommendations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">
                Personalized Course Recommendations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseRecommendations.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-secondary/10 text-secondary mr-3">
                        {course.icon}
                      </div>
                      <h3 className="font-bold text-lg">{course.title}</h3>
                    </div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-600">
                        Targets:{" "}
                        <span className="font-medium">{course.skill}</span>
                      </span>
                      <span className="text-gray-600">
                        Level:{" "}
                        <span className="font-medium">{course.level}</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {course.duration}
                      </span>
                      <button className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                        Explore Course →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialization Paths */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4">
                Suggested Specialization Paths
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg flex items-center">
                      <FaLaptopCode className="text-primary mr-2" /> Computer
                      Science
                    </h3>
                    <span className="bg-secondary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      90% match
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your strong analytical and mathematical skills make you an
                    excellent candidate for computer science. This path would
                    leverage your problem-solving abilities and logical
                    thinking.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Core Courses:
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-gray-600">
                          - Algorithms & Data Structures
                        </li>
                        <li className="text-gray-600">- Computer Systems</li>
                        <li className="text-gray-600">
                          - Software Engineering
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Career Options:
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-gray-600">- Software Developer</li>
                        <li className="text-gray-600">- Data Scientist</li>
                        <li className="text-gray-600">- AI Engineer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg flex items-center">
                      <FaMedkit className="text-primary mr-2" /> Medicine
                    </h3>
                    <span className="bg-secondary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      75% match
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your strong science foundation and attention to detail
                    suggest potential in medicine. This path would benefit from
                    your analytical skills and ability to learn complex systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Core Courses:
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-gray-600">- Human Anatomy</li>
                        <li className="text-gray-600">- Biochemistry</li>
                        <li className="text-gray-600">- Physiology</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Career Options:
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-gray-600">- Medical Doctor</li>
                        <li className="text-gray-600">- Medical Researcher</li>
                        <li className="text-gray-600">- Surgeon</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaUniversity className="text-primary mr-2" /> Specialization
            Selector Tool
          </h2>
          <p className="text-gray-600 mb-6">
            Based on your academic performance and skills assessment, these are
            the most suitable specializations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializationPaths.map((path) => (
              <div
                key={path.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                      {path.icon}
                    </div>
                    <h3 className="font-bold text-lg">{path.name}</h3>
                  </div>
                  <span className="bg-secondary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {path.match}% match
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{path.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Skill Requirements:
                  </h4>
                  <div className="space-y-2">
                    {path.requiredSkills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span
                            className={`font-medium ${
                              skill.score >= skill.threshold
                                ? "text-secondary"
                                : "text-yellow-600"
                            }`}
                          >
                            {skill.score}%{" "}
                            {skill.score >= skill.threshold ? "✓" : "⚠️"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              skill.score >= skill.threshold
                                ? "bg-secondary"
                                : "bg-yellow-500"
                            }`}
                            style={{ width: `${skill.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Career Options:
                  </h4>
                  <ul className="space-y-1">
                    {path.careerOptions.map((career, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600">{career.title}</span>
                        <span className="font-medium">{career.avgSalary}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Course Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="text-primary mr-2" /> Smart Course
            Recommendations
          </h2>
          <p className="text-gray-600 mb-6">
            These courses are tailored to your skill profile and academic goals:
          </p>

          <div className="space-y-6">
            {courseRecommendations.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary mr-3">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className="mr-3">
                          Targets:{" "}
                          <span className="font-medium text-gray-700">
                            {course.skill}
                          </span>
                        </span>
                        <span>
                          Level:{" "}
                          <span className="font-medium text-gray-700">
                            {course.level}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      course.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : course.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {course.priority} Priority
                  </span>
                </div>

                <p className="text-gray-600 mb-3">{course.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Key Outcomes:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {course.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Suggested Timeline:
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded mr-2">
                        {course.duration}
                      </span>
                      <span>
                        Best taken in{" "}
                        {course.level === "Advanced" ? "Year 2-3" : "Year 1-2"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="text-sm font-medium text-primary hover:text-secondary transition-colors px-3 py-1 border border-primary rounded-lg">
                      View Syllabus
                    </button>
                    <button className="text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors px-3 py-1 rounded-lg">
                      Enroll Now
                    </button>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) =>
                      star <=
                      (course.priority === "High"
                        ? 5
                        : course.priority === "Medium"
                        ? 3
                        : 2) ? (
                        <FaStar
                          key={star}
                          className="text-yellow-400 text-sm"
                        />
                      ) : (
                        <FaRegStar
                          key={star}
                          className="text-gray-300 text-sm"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New: Improvement Roadmap */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="text-primary mr-2" /> Personalized
            Improvement Roadmap
          </h2>
          <p className="text-gray-600 mb-6">
            Targeted actions to strengthen your academic profile:
          </p>

          <div className="space-y-8">
            {improvementRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-5"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">{item.skill}</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Current:</span>
                    <span className="font-medium mr-3">
                      {item.currentLevel}%
                    </span>
                    <FaArrowRight className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 mr-2">Target:</span>
                    <span className="font-medium text-primary">
                      {item.targetLevel}%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {item.improvementPlan.map((plan, planIdx) => (
                    <div
                      key={planIdx}
                      className="pl-4 border-l-2 border-primary"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {plan.action}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Timeline:</span>{" "}
                            {plan.timeline}
                          </p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {plan.expectedOutcome}
                        </span>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Resources:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {plan.resources.map((resource, resIdx) => (
                            <span
                              key={resIdx}
                              className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full"
                            >
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New: University Program Matches */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaUniversity className="text-primary mr-2" /> Recommended
            University Programs
          </h2>
          <p className="text-gray-600 mb-6">
            Programs that align with your academic profile and career
            aspirations:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    University
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Program
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Match
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Requirements
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deadline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Funding
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {universityPrograms.map((program, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {program.university}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {program.program}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          program.match > 90
                            ? "bg-green-100 text-green-800"
                            : program.match > 80
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {program.match}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {program.requirements}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {program.deadline}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span
                        className={`${
                          program.scholarship === "Full funding"
                            ? "text-secondary"
                            : program.scholarship === "Available"
                            ? "text-blue-600"
                            : "text-gray-600"
                        }`}
                      >
                        {program.scholarship}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
