import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaBook,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileAlt,
  FaFileExcel,
  FaFileArchive,
  FaFileImage,
  FaDownload,
  FaArrowLeft,
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import { MdQuiz, MdAssignment, MdOutlineNoteAlt } from "react-icons/md";

const Subject = () => {
  const { subjectId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("exams");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your course assistant. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const dragRef = useRef(null);

  // Mock data - same as before
  const subject = {
    id: subjectId,
    name: "Electrical Circuits",
    code: "ELEC201",
    instructor: "Dr. Mohammed Al-Ghamdi",
    semester: "Fall 2023",
    description:
      "This course covers fundamental concepts of electrical circuits including Ohm's Law, Kirchhoff's Laws, network theorems, AC circuits, and basic circuit analysis techniques.",
  };

  const categories = [
    { id: "exams", name: "Exams", icon: <FaFilePdf />, count: 8 },
    { id: "documents", name: "Lecture Notes", icon: <FaBook />, count: 15 },
    { id: "quizzes", name: "Quizzes", icon: <MdQuiz />, count: 5 },
    { id: "homeworks", name: "Homeworks", icon: <MdAssignment />, count: 6 },
    {
      id: "syllabus",
      name: "Course Syllabus",
      icon: <MdOutlineNoteAlt />,
      count: 1,
    },
    {
      id: "solutions",
      name: "Solutions",
      icon: <MdOutlineNoteAlt />,
      count: 12,
    },
    { id: "labs", name: "Lab Manuals", icon: <FaFileAlt />, count: 4 },
    { id: "projects", name: "Projects", icon: <FaFileArchive />, count: 3 },
  ];

  const resources = {
    exams: [
      {
        id: 1,
        name: "Midterm Exam - Fall 2023",
        type: "pdf",
        size: "2.4 MB",
        uploaded: "2 weeks ago",
        downloads: 124,
      },
      {
        id: 2,
        name: "Final Exam - Spring 2023",
        type: "pdf",
        size: "3.1 MB",
        uploaded: "1 month ago",
        downloads: 98,
      },
      {
        id: 3,
        name: "Quiz 1 Solutions",
        type: "pdf",
        size: "1.2 MB",
        uploaded: "3 weeks ago",
        downloads: 156,
      },
      {
        id: 4,
        name: "Sample Exam Questions",
        type: "docx",
        size: "1.8 MB",
        uploaded: "1 month ago",
        downloads: 87,
      },
      {
        id: 5,
        name: "Exam Preparation Guide",
        type: "pdf",
        size: "0.9 MB",
        uploaded: "2 months ago",
        downloads: 203,
      },
    ],
    documents: [
      {
        id: 1,
        name: "Lecture 1 - Introduction to Circuits",
        type: "pdf",
        size: "4.2 MB",
        uploaded: "3 weeks ago",
        downloads: 187,
      },
      {
        id: 2,
        name: "Lecture 2 - Ohm's Law",
        type: "pptx",
        size: "5.7 MB",
        uploaded: "3 weeks ago",
        downloads: 145,
      },
      {
        id: 3,
        name: "Lecture 3 - Kirchhoff's Laws",
        type: "pdf",
        size: "3.9 MB",
        uploaded: "2 weeks ago",
        downloads: 132,
      },
      {
        id: 4,
        name: "Lecture 4 - Network Theorems",
        type: "pdf",
        size: "4.5 MB",
        uploaded: "2 weeks ago",
        downloads: 118,
      },
      {
        id: 5,
        name: "Lecture 5 - AC Circuits",
        type: "pptx",
        size: "6.1 MB",
        uploaded: "1 week ago",
        downloads: 95,
      },
    ],
    quizzes: [
      {
        id: 1,
        name: "Quiz 1 - Basic Concepts",
        type: "pdf",
        size: "0.8 MB",
        uploaded: "1 month ago",
        downloads: 176,
      },
      {
        id: 2,
        name: "Quiz 2 - Circuit Analysis",
        type: "pdf",
        size: "0.9 MB",
        uploaded: "3 weeks ago",
        downloads: 154,
      },
      {
        id: 3,
        name: "Quiz 3 - Network Theorems",
        type: "pdf",
        size: "1.1 MB",
        uploaded: "2 weeks ago",
        downloads: 132,
      },
      {
        id: 4,
        name: "Quiz 4 - AC Circuits",
        type: "pdf",
        size: "1.2 MB",
        uploaded: "1 week ago",
        downloads: 98,
      },
    ],
    homeworks: [
      {
        id: 1,
        name: "Homework 1 - Basic Problems",
        type: "pdf",
        size: "1.5 MB",
        uploaded: "1 month ago",
        downloads: 201,
      },
      {
        id: 2,
        name: "Homework 2 - Circuit Analysis",
        type: "pdf",
        size: "1.7 MB",
        uploaded: "3 weeks ago",
        downloads: 187,
      },
      {
        id: 3,
        name: "Homework 3 - Network Theorems",
        type: "pdf",
        size: "2.1 MB",
        uploaded: "2 weeks ago",
        downloads: 165,
      },
      {
        id: 4,
        name: "Homework 4 - AC Circuits",
        type: "pdf",
        size: "2.3 MB",
        uploaded: "1 week ago",
        downloads: 143,
      },
    ],
    syllabus: [
      {
        id: 1,
        name: "Course Syllabus - Fall 2023",
        type: "pdf",
        size: "0.5 MB",
        uploaded: "2 months ago",
        downloads: 312,
      },
    ],
    solutions: [
      {
        id: 1,
        name: "Homework 1 Solutions",
        type: "pdf",
        size: "2.1 MB",
        uploaded: "1 month ago",
        downloads: 198,
      },
      {
        id: 2,
        name: "Homework 2 Solutions",
        type: "pdf",
        size: "2.3 MB",
        uploaded: "3 weeks ago",
        downloads: 176,
      },
      {
        id: 3,
        name: "Homework 3 Solutions",
        type: "pdf",
        size: "2.8 MB",
        uploaded: "2 weeks ago",
        downloads: 154,
      },
      {
        id: 4,
        name: "Quiz 1 Solutions",
        type: "pdf",
        size: "1.2 MB",
        uploaded: "3 weeks ago",
        downloads: 187,
      },
    ],
    labs: [
      {
        id: 1,
        name: "Lab 1 - Basic Measurements",
        type: "pdf",
        size: "1.8 MB",
        uploaded: "1 month ago",
        downloads: 145,
      },
      {
        id: 2,
        name: "Lab 2 - Ohm's Law Verification",
        type: "pdf",
        size: "2.2 MB",
        uploaded: "3 weeks ago",
        downloads: 132,
      },
      {
        id: 3,
        name: "Lab 3 - Series and Parallel Circuits",
        type: "pdf",
        size: "2.5 MB",
        uploaded: "2 weeks ago",
        downloads: 121,
      },
      {
        id: 4,
        name: "Lab 4 - Network Theorems",
        type: "pdf",
        size: "2.7 MB",
        uploaded: "1 week ago",
        downloads: 98,
      },
    ],
    projects: [
      {
        id: 1,
        name: "Project Guidelines",
        type: "pdf",
        size: "1.2 MB",
        uploaded: "1 month ago",
        downloads: 187,
      },
      {
        id: 2,
        name: "Sample Project Report",
        type: "docx",
        size: "3.5 MB",
        uploaded: "3 weeks ago",
        downloads: 154,
      },
      {
        id: 3,
        name: "Project Presentation Template",
        type: "pptx",
        size: "2.8 MB",
        uploaded: "2 weeks ago",
        downloads: 132,
      },
    ],
  };
  const filteredResources = resources[selectedCategory].filter((resource) =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "docx":
        return <FaFileWord className="text-blue-500" />;
      case "pptx":
        return <FaFilePowerpoint className="text-orange-500" />;
      case "xlsx":
        return <FaFileExcel className="text-green-500" />;
      case "zip":
      case "rar":
        return <FaFileArchive className="text-yellow-500" />;
      case "jpg":
      case "png":
        return <FaFileImage className="text-purple-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
    };
    setMessages([...messages, newUserMessage]);
    setMessage("");

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I found some relevant resources for you in the 'Lecture Notes' section.",
        "You might want to check the 'Exams' section for practice materials.",
        "I can help you navigate through the course materials. What specifically are you looking for?",
        "Based on your course, I recommend reviewing the network theorems first.",
      ];
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const newAiMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - 20; // Adjust for button size
    const newY = e.clientY - 20;

    // Keep within viewport bounds
    const boundedX = Math.max(0, Math.min(window.innerWidth - 40, newX));
    const boundedY = Math.max(0, Math.min(window.innerHeight - 40, newY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Floating AI Assistant Button */}
      <motion.div
        ref={dragRef}
        className="fixed z-50 cursor-grab active:cursor-grabbing"
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: window.innerWidth - 40,
          bottom: window.innerHeight - 40,
        }}
      >
        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className="w-12 h-12 rounded-full bg-[#0084bd] text-white shadow-lg flex items-center justify-center hover:bg-[#006a9b] transition-all"
        >
          <FaRobot className="text-xl" />
        </button>
      </motion.div>

      {/* AI Assistant Chat */}
      <AnimatePresence>
        {isAssistantOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-50 right-4 bottom-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            <div className="bg-[#0084bd] text-white p-3 flex justify-between items-center">
              <h3 className="font-medium">Course Assistant</h3>
              <button
                onClick={() => setIsAssistantOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "ai" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === "ai"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-[#0084bd] text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-gray-200 flex"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0084bd]"
              />
              <button
                type="submit"
                className="bg-[#0084bd] text-white px-3 py-2 rounded-r-lg hover:bg-[#006a9b] transition"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-sm sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-gray-700 hover:text-gray-900 transition"
            >
              <motion.div whileHover={{ x: -3 }}>
                <FaArrowLeft className="mr-2" />
              </motion.div>
              <span className="font-medium">Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0084bd] focus:border-[#0084bd] sm:text-sm transition"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subject Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-sm mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {subject.name}
              </h1>
              <p className="text-lg text-[#0084bd] font-medium">
                {subject.code}
              </p>
              <p className="text-gray-600 mt-2">{subject.description}</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 md:mt-0 bg-blue-50 p-4 rounded-lg"
            >
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="font-medium text-[#0084bd]">{subject.instructor}</p>
              <p className="text-sm text-gray-500 mt-1">Semester</p>
              <p className="font-medium text-[#0084bd]">{subject.semester}</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 bg-[#0084bd]">
                <h2 className="text-lg font-medium text-white">
                  Resource Categories
                </h2>
              </div>
              <nav className="p-2">
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <motion.li
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                    >
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-md transition ${
                          selectedCategory === category.id
                            ? "bg-blue-50 text-[#0084bd]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{category.icon}</span>
                          <span>{category.name}</span>
                        </div>
                        <span className="bg-blue-100 text-[#0084bd] text-xs font-medium px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden mt-6"
            >
              <div className="p-4 bg-[#0084bd]">
                <h2 className="text-lg font-medium text-white">Quick Stats</h2>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Total Resources</p>
                  <p className="text-xl font-bold text-[#0084bd]">54</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Most Downloaded</p>
                  <p className="text-sm font-medium text-[#0084bd]">
                    Course Syllabus - Fall 2023
                  </p>
                  <p className="text-xs text-gray-500">312 downloads</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recently Added</p>
                  <p className="text-sm font-medium text-[#0084bd]">
                    Lecture 5 - AC Circuits
                  </p>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Resources List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  {categories.find((c) => c.id === selectedCategory)?.icon}
                  <span className="ml-2">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                  </span>
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredResources.length}{" "}
                  {filteredResources.length === 1 ? "item" : "items"}
                </div>
              </div>

              {filteredResources.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {filteredResources.map((resource) => (
                    <motion.li
                      key={resource.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        backgroundColor: "rgba(0, 132, 189, 0.05)",
                      }}
                      className="transition"
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <motion.div
                              className="mr-3 text-xl"
                              whileHover={{ scale: 1.1 }}
                            >
                              {getFileIcon(resource.type)}
                            </motion.div>
                            <div>
                              <p className="text-sm font-medium text-[#0084bd] truncate">
                                {resource.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {resource.size} • {resource.uploaded} •{" "}
                                {resource.downloads} downloads
                              </p>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-[#0084bd] bg-blue-50 hover:bg-blue-100 focus:outline-none transition"
                            >
                              <FaDownload className="mr-1" /> Download
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 text-center"
                >
                  <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No resources found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm
                      ? "Try a different search term"
                      : "No resources available in this category"}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Related Resources */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-4 bg-blue-50 border-b border-gray-200">
                  <h3 className="text-md font-medium text-[#0084bd]">
                    Popular Resources
                  </h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {resources.exams.slice(0, 3).map((resource) => (
                    <motion.li
                      key={resource.id}
                      whileHover={{
                        backgroundColor: "rgba(0, 132, 189, 0.05)",
                      }}
                      className="px-4 py-3 transition"
                    >
                      <div className="flex items-center">
                        <div className="mr-3">{getFileIcon(resource.type)}</div>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {resource.name}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-4 bg-blue-50 border-b border-gray-200">
                  <h3 className="text-md font-medium text-[#0084bd]">
                    Recently Added
                  </h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {resources.documents.slice(0, 3).map((resource) => (
                    <motion.li
                      key={resource.id}
                      whileHover={{
                        backgroundColor: "rgba(0, 132, 189, 0.05)",
                      }}
                      className="px-4 py-3 transition"
                    >
                      <div className="flex items-center">
                        <div className="mr-3">{getFileIcon(resource.type)}</div>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {resource.name}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white border-t border-gray-200 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900">Miras</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-500">
                {subject.name} Resources
              </span>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-500">
              King Saud University • Riyadh • © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Subject;
