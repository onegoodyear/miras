import { useState, useEffect, useRef } from "react";
import {
  MdSchool,
  MdTimer,
  MdHelpOutline,
  MdOutlineArrowBack,
  MdOutlineArrowForward,
  MdOutlineExitToApp,
  MdMenuBook,
  MdAssignment,
} from "react-icons/md";
import {
  FaRegQuestionCircle,
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaCheck,
  FaTimes as FaX,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  // Colors
  const colors = {
    primary: "#e2b714",
    secondary: "#0084bd",
    background: "#f2f2f2",
  };

  // App states
  const [currentStage, setCurrentStage] = useState("subject"); // 'subject', 'examType', 'quiz'
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedExamType, setSelectedExamType] = useState(null);

  // User data
  const [user] = useState({
    name: "Abdellatif Feghouli",
    studentId: "446110",
  });

  // Available subjects
  const subjects = [
    {
      id: 1,
      code: "MATH202",
      name: "Advanced Mathematics",
      description: "Calculus, algebra, and advanced mathematical concepts",
      icon: <MdMenuBook className="text-4xl" />,
    },
    {
      id: 2,
      code: "ARAB101",
      name: "Arabic Language",
      description: "Modern Standard Arabic and literature",
      icon: <MdMenuBook className="text-4xl" />,
    },
    {
      id: 3,
      code: "ENG102",
      name: "English Language",
      description: "English composition and communication",
      icon: <MdMenuBook className="text-4xl" />,
    },
    {
      id: 4,
      code: "CS201",
      name: "Computer Science",
      description: "Data structures and algorithms",
      icon: <MdMenuBook className="text-4xl" />,
    },
  ];

  // Quiz questions data (organized by subject and exam type)
  const allQuizzes = {
    MATH202: {
      mid: [
        {
          id: 1,
          text: "What is the derivative of f(x) = 3x² + 2x - 5?",
          options: ["6x + 2", "3x + 2", "6x² + 2", "3x² + 2x"],
          correctAnswer: 0,
          answerStats: [45, 15, 25, 15],
          timeSpent: 0,
        },
        {
          id: 2,
          text: "Which of these is the integral of 1/x?",
          options: ["ln|x| + C", "x²/2 + C", "1/x² + C", "e^x + C"],
          correctAnswer: 0,
          answerStats: [60, 10, 15, 15],
          timeSpent: 0,
        },
      ],
      final: [
        {
          id: 1,
          text: "What is the limit of (x² - 4)/(x - 2) as x approaches 2?",
          options: ["4", "0", "Undefined", "2"],
          correctAnswer: 0,
          answerStats: [50, 20, 20, 10],
          timeSpent: 0,
        },
        {
          id: 2,
          text: "What is the solution to the equation 2x + 5 = 15?",
          options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
          correctAnswer: 0,
          answerStats: [70, 10, 10, 10],
          timeSpent: 0,
        },
        {
          id: 3,
          text: "What is the area of a circle with radius 3?",
          options: ["9π", "6π", "3π", "27π"],
          correctAnswer: 0,
          answerStats: [65, 15, 10, 10],
          timeSpent: 0,
        },
      ],
    },
    ARAB101: {
      mid: [
        {
          id: 1,
          text: "ما معنى كلمة 'مكتبة'؟",
          options: ["Library", "Office", "School", "House"],
          correctAnswer: 0,
          answerStats: [80, 10, 5, 5],
          timeSpent: 0,
        },
      ],
      final: [
        {
          id: 1,
          text: "ما هو جمع كلمة 'كتاب'؟",
          options: ["كتب", "كُتيب", "كاتب", "مكتب"],
          correctAnswer: 0,
          answerStats: [75, 10, 10, 5],
          timeSpent: 0,
        },
      ],
    },
    // Add more subjects and questions as needed
  };

  // Quiz state (only used when in quiz stage)
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [globalTimeLeft, setGlobalTimeLeft] = useState(900);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(120);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your quiz assistant. I can provide hints if you're stuck on a question.",
      sender: "ai",
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 350, y: 10 });
  const [showAnswerStats, setShowAnswerStats] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const dragRef = useRef(null);
  const globalTimerRef = useRef(null);
  const questionTimerRef = useRef(null);
  const assistantRef = useRef(null);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle subject selection
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentStage("examType");
  };

  // Handle exam type selection
  const handleSelectExamType = (type) => {
    setSelectedExamType(type);
    setQuestions(allQuizzes[selectedSubject.code][type]);
    setCurrentStage("quiz");

    // Initialize quiz state
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setGlobalTimeLeft(900);
    setQuestionTimeLeft(120);
    setQuizSubmitted(false);
    setShowAssistant(false);
    setMessage("");
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your quiz assistant. I can provide hints if you're stuck on a question.",
        sender: "ai",
      },
    ]);
    setShowAnswerStats(false);
    setQuestionStartTime(Date.now());
  };

  // Quiz functions (same as before)
  const handleAnswerSelect = (optionIndex) => {
    if (showAnswerStats) return;

    setSelectedAnswer(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
    setShowAnswerStats(true);

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].timeSpent = timeSpent;
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] ?? null);
    }
  };

  const handleSkipQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null;
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    setShowAnswerStats(true);
  };

  const handleSubmitQuiz = () => {
    clearInterval(globalTimerRef.current);
    clearInterval(questionTimerRef.current);
    setQuizSubmitted(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
    };
    setMessages([...messages, newUserMessage]);
    setMessage("");

    setTimeout(() => {
      const currentQuestion = questions[currentQuestionIndex];
      const hint = getQuestionHint(currentQuestion.id);

      const newAiMessage = {
        id: messages.length + 2,
        text: hint,
        sender: "ai",
      };
      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  const getQuestionHint = (questionId) => {
    const hints = {
      1: "Remember the power rule for derivatives: d/dx[x^n] = n*x^(n-1). Apply this to each term separately.",
      2: "Recall that the derivative of ln|x| is 1/x. Therefore, the integral of 1/x is ln|x| + C.",
      3: "This is an indeterminate form (0/0). Try factoring the numerator or using L'Hôpital's rule.",
      4: "Isolate x by first subtracting 5 from both sides, then divide by 2.",
      5: "The area of a circle is πr² where r is the radius.",
    };
    return (
      hints[questionId] ||
      "I don't have a specific hint for this question. Review the relevant material."
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - 20;
    const newY = e.clientY - 20;

    const boundedX = Math.max(0, Math.min(window.innerWidth - 40, newX));
    const boundedY = Math.max(0, Math.min(window.innerHeight - 40, newY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Calculate score if quiz is submitted
  const score = quizSubmitted
    ? questions.reduce(
        (acc, question, index) =>
          acc + (answers[index] === question.correctAnswer ? 1 : 0),
        0
      )
    : null;

  // Get feedback based on incorrect answers
  const getFeedback = () => {
    const incorrectQuestions = questions.filter(
      (q, i) => answers[i] !== q.correctAnswer && answers[i] !== null
    );

    if (incorrectQuestions.length === 0) {
      return "Perfect! You answered all questions correctly. Keep up the good work!";
    }

    const topicsToReview = incorrectQuestions.map((q) => {
      switch (q.id) {
        case 1:
          return "derivatives of polynomial functions";
        case 2:
          return "basic integrals (especially 1/x)";
        case 3:
          return "limits and L'Hôpital's rule";
        case 4:
          return "solving linear equations";
        case 5:
          return "area formulas for basic shapes";
        default:
          return "";
      }
    });

    return `You did well overall, but you should review these topics: ${topicsToReview.join(
      ", "
    )}. Pay special attention to practice problems in these areas.`;
  };

  // Timer effects (only for quiz stage)
  useEffect(() => {
    if (currentStage !== "quiz") return;

    // Global timer
    globalTimerRef.current = setInterval(() => {
      setGlobalTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Question timer
    questionTimerRef.current = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          handleSkipQuestion();
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    // Record question start time
    setQuestionStartTime(Date.now());

    return () => {
      clearInterval(globalTimerRef.current);
      clearInterval(questionTimerRef.current);
    };
  }, [currentStage]);

  // Reset question timer when question changes
  useEffect(() => {
    if (currentStage !== "quiz" || quizSubmitted) return;

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    if (currentQuestionIndex > 0) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex - 1].timeSpent = timeSpent;
    }

    setQuestionTimeLeft(120);
    setQuestionStartTime(Date.now());
    setShowAnswerStats(false);

    clearInterval(questionTimerRef.current);
    questionTimerRef.current = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          handleSkipQuestion();
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(questionTimerRef.current);
  }, [currentQuestionIndex, currentStage]);

  // Auto-scroll assistant messages
  useEffect(() => {
    if (assistantRef.current) {
      assistantRef.current.scrollTop = assistantRef.current.scrollHeight;
    }
  }, [messages, showAssistant]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <main className="container mx-auto px-4 py-8">
        {/* Subject Selection Screen */}
        {currentStage === "subject" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1
                className="text-3xl font-bold mb-2"
                style={{ color: colors.secondary }}
              >
                Select a Subject
              </h1>
              <p className="text-lg text-gray-600">
                Choose a subject to take a quiz for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject) => (
                <motion.div
                  key={subject.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-secondary transition-all"
                  onClick={() => handleSelectSubject(subject)}
                >
                  <div className="flex items-start">
                    <div
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    >
                      {subject.icon}
                    </div>
                    <div>
                      <h2
                        className="text-xl font-bold"
                        style={{ color: colors.secondary }}
                      >
                        {subject.name}
                      </h2>
                      <p className="text-gray-600">{subject.code}</p>
                      <p className="text-gray-500 mt-2">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Exam Type Selection Screen */}
        {currentStage === "examType" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <button
              onClick={() => setCurrentStage("subject")}
              className="flex items-center text-gray-600 mb-6 hover:text-secondary transition"
            >
              <MdOutlineArrowBack className="mr-1" />
              Back to subjects
            </button>

            <div className="text-center mb-8">
              <h1
                className="text-3xl font-bold mb-2"
                style={{ color: colors.secondary }}
              >
                {selectedSubject.name}
              </h1>
              <p className="text-lg text-gray-600">
                Select exam type for {selectedSubject.code}
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-secondary transition-all"
                onClick={() => handleSelectExamType("mid")}
              >
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <MdAssignment
                      className="text-3xl"
                      style={{ color: colors.secondary }}
                    />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{ color: colors.secondary }}
                    >
                      Midterm Exam
                    </h2>
                    <p className="text-gray-500">
                      Covers first half of the course material
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-secondary transition-all"
                onClick={() => handleSelectExamType("final")}
              >
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <MdAssignment
                      className="text-3xl"
                      style={{ color: colors.secondary }}
                    />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{ color: colors.secondary }}
                    >
                      Final Exam
                    </h2>
                    <p className="text-gray-500">Covers all course material</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Quiz Screen */}
        {currentStage === "quiz" && (
          <div className="relative">
            {/* Quiz Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <button
                  onClick={() => setCurrentStage("examType")}
                  className="flex items-center text-gray-600 mb-2 hover:text-secondary transition"
                >
                  <MdOutlineArrowBack className="mr-1" />
                  Back to exam types
                </button>
                <h1
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: colors.secondary }}
                >
                  {selectedSubject.name} ({selectedSubject.code})
                </h1>
                <p className="text-lg text-gray-700">
                  {user.name} • ID: {user.studentId} •{" "}
                  {selectedExamType === "mid" ? "Midterm" : "Final"} Exam
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="bg-white rounded-lg px-4 py-2 shadow flex items-center">
                  <MdTimer
                    className="mr-2 text-xl"
                    style={{ color: colors.primary }}
                  />
                  <span
                    className="text-lg font-mono"
                    style={{ color: colors.primary }}
                  >
                    {formatTime(questionTimeLeft)}
                  </span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span
                    className="text-lg font-mono"
                    style={{ color: colors.secondary }}
                  >
                    {formatTime(globalTimeLeft)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quiz Progress */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
              <motion.div
                className="h-4 rounded-full"
                style={{ backgroundColor: colors.secondary }}
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span>
                {Math.round((currentQuestionIndex + 1) / questions.length) *
                  100}
                % Complete
              </span>
            </div>

            {quizSubmitted ? (
              <motion.div
                className="bg-white rounded-xl p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: colors.primary }}
                >
                  Quiz Submitted!
                </h2>
                <p className="text-xl mb-6 text-gray-700">
                  Your score:{" "}
                  <span style={{ color: colors.primary }}>{score}</span> out of{" "}
                  {questions.length} (
                  {Math.round((score / questions.length) * 100)}
                  %)
                </p>

                <div
                  className="bg-blue-50 p-4 rounded-lg mb-6 text-left"
                  style={{ backgroundColor: `${colors.secondary}20` }}
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.secondary }}
                  >
                    Feedback:
                  </h3>
                  <p className="text-gray-700">{getFeedback()}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {questions.map((question, index) => (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg ${
                        answers[index] === question.correctAnswer
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <p className="font-medium text-gray-700">
                        Q{index + 1}: {question.text}
                      </p>
                      <p className="mt-2 text-gray-700">
                        Your answer:{" "}
                        {answers[index] !== null ? (
                          <span
                            className={
                              answers[index] === question.correctAnswer
                                ? "text-green-700"
                                : "text-red-700"
                            }
                          >
                            {question.options[answers[index]]}
                          </span>
                        ) : (
                          "Skipped"
                        )}
                      </p>
                      {answers[index] !== question.correctAnswer && (
                        <p className="mt-1 text-gray-700">
                          Correct answer:{" "}
                          <span className="text-green-700">
                            {question.options[question.correctAnswer]}
                          </span>
                        </p>
                      )}
                      <p className="mt-1 text-sm text-gray-600">
                        Time spent: {question.timeSpent}s | Popularity:{" "}
                        {question.answerStats[question.correctAnswer]}% got it
                        right
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 rounded-lg font-medium text-white hover:bg-opacity-90 transition"
                  style={{ backgroundColor: colors.primary }}
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <div className="relative">
                {/* Question Card */}
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-6 mb-8 shadow-md"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h2
                      className="text-xl font-bold"
                      style={{ color: colors.primary }}
                    >
                      Question {currentQuestionIndex + 1}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {questions[currentQuestionIndex].timeSpent}s spent
                      </span>
                      <button
                        onClick={() => setShowAssistant(!showAssistant)}
                        className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
                        style={{ color: colors.primary }}
                      >
                        <FaRobot />
                      </button>
                    </div>
                  </div>

                  <p className="text-lg mb-6 text-gray-700">
                    {questions[currentQuestionIndex].text}
                  </p>

                  <div className="space-y-3">
                    {questions[currentQuestionIndex].options.map(
                      (option, index) => {
                        const isCorrect =
                          index ===
                          questions[currentQuestionIndex].correctAnswer;
                        const isSelected = selectedAnswer === index;
                        const showStats = showAnswerStats;

                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: showStats ? 1 : 1.02 }}
                            whileTap={{ scale: showStats ? 1 : 0.98 }}
                          >
                            <button
                              onClick={() => handleAnswerSelect(index)}
                              className={`w-full text-left p-4 rounded-lg transition flex justify-between items-center ${
                                isSelected
                                  ? isCorrect
                                    ? "bg-green-100 border-2 border-green-500"
                                    : "bg-red-100 border-2 border-red-500"
                                  : showStats && isCorrect
                                  ? "bg-green-50 border border-green-300"
                                  : "bg-gray-100 hover:bg-gray-200"
                              }`}
                              disabled={showStats}
                            >
                              <span
                                className={
                                  isSelected
                                    ? isCorrect
                                      ? "text-green-800"
                                      : "text-red-800"
                                    : "text-gray-700"
                                }
                              >
                                {option}
                              </span>

                              {showStats && (
                                <span className="text-xs font-medium px-2 py-1 rounded bg-white bg-opacity-70">
                                  {
                                    questions[currentQuestionIndex].answerStats[
                                      index
                                    ]
                                  }
                                  %
                                </span>
                              )}

                              {isSelected && (
                                <span className="ml-2">
                                  {isCorrect ? (
                                    <FaCheck className="text-green-500" />
                                  ) : (
                                    <FaX className="text-red-500" />
                                  )}
                                </span>
                              )}
                            </button>
                          </motion.div>
                        );
                      }
                    )}
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mb-8">
                  <div className="flex space-x-3">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className={`flex items-center px-4 py-2 rounded-lg ${
                        currentQuestionIndex === 0
                          ? "bg-gray-200 cursor-not-allowed text-gray-500"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      <MdOutlineArrowBack className="mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={handleSkipQuestion}
                      className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
                    >
                      <FaRegQuestionCircle className="mr-2" />
                      Skip
                    </button>
                  </div>

                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      disabled={!showAnswerStats && selectedAnswer === null}
                      className={`flex items-center px-4 py-2 rounded-lg ${
                        !showAnswerStats && selectedAnswer === null
                          ? "bg-gray-200 cursor-not-allowed text-gray-500"
                          : "text-white hover:bg-opacity-90"
                      }`}
                      style={{ backgroundColor: colors.secondary }}
                    >
                      Next <MdOutlineArrowForward className="ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={!showAnswerStats && selectedAnswer === null}
                      className={`flex items-center px-4 py-2 rounded-lg ${
                        !showAnswerStats && selectedAnswer === null
                          ? "bg-gray-200 cursor-not-allowed text-gray-500"
                          : "text-white hover:bg-opacity-90"
                      }`}
                      style={{ backgroundColor: colors.primary }}
                    >
                      Submit Quiz <MdOutlineExitToApp className="ml-2" />
                    </button>
                  )}
                </div>

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
                    onClick={() => setShowAssistant(!showAssistant)}
                    className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all text-white"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    <FaRobot className="text-xl" />
                  </button>
                </motion.div>

                {/* AI Assistant Panel */}
                <AnimatePresence>
                  {showAssistant && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                      }}
                      className="fixed z-50 right-4 bottom-4 w-80 rounded-lg shadow-xl overflow-hidden flex flex-col bg-white border"
                      style={{ borderColor: colors.secondary, height: "400px" }}
                    >
                      <div
                        className="p-3 flex justify-between items-center text-white"
                        style={{ backgroundColor: colors.secondary }}
                      >
                        <h3 className="font-medium">Quiz Assistant</h3>
                        <button onClick={() => setShowAssistant(false)}>
                          <FaTimes />
                        </button>
                      </div>

                      <div
                        ref={assistantRef}
                        className="flex-1 p-4 overflow-y-auto space-y-3"
                      >
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${
                              msg.sender === "ai"
                                ? "justify-start"
                                : "justify-end"
                            }`}
                          >
                            <div
                              className={`max-w-xs p-3 rounded-lg ${
                                msg.sender === "ai"
                                  ? "bg-gray-100 text-gray-700"
                                  : "text-white"
                              }`}
                              style={{
                                backgroundColor:
                                  msg.sender === "user"
                                    ? colors.secondary
                                    : undefined,
                                border:
                                  msg.sender === "ai"
                                    ? `1px solid ${colors.secondary}`
                                    : undefined,
                              }}
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
                          placeholder="Ask for a hint..."
                          className="flex-1 rounded-l-lg px-3 py-2 focus:outline-none border border-gray-300"
                        />
                        <button
                          type="submit"
                          className="px-3 py-2 rounded-r-lg text-white hover:bg-opacity-90 transition"
                          style={{ backgroundColor: colors.secondary }}
                        >
                          <FaPaperPlane />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
