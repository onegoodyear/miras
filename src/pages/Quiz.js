import { useState, useEffect, useRef } from "react";
import {
  MdSchool,
  MdTimer,
  MdHelpOutline,
  MdOutlineArrowBack,
  MdOutlineArrowForward,
  MdOutlineExitToApp,
} from "react-icons/md";
import {
  FaRegQuestionCircle,
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  // User and quiz data
  const [user] = useState({
    name: "Abdellatif Feghouli",
    studentId: "446110",
  });

  const [subject] = useState({
    name: "Advanced Mathematics",
    code: "MATH202",
  });

  // Quiz questions
  const [questions] = useState([
    {
      id: 1,
      text: "What is the derivative of f(x) = 3x² + 2x - 5?",
      options: ["6x + 2", "3x + 2", "6x² + 2", "3x² + 2x"],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "Which of these is the integral of 1/x?",
      options: ["ln|x| + C", "x²/2 + C", "1/x² + C", "e^x + C"],
      correctAnswer: 0,
    },
    {
      id: 3,
      text: "What is the limit of (x² - 4)/(x - 2) as x approaches 2?",
      options: ["4", "0", "Undefined", "2"],
      correctAnswer: 0,
    },
    {
      id: 4,
      text: "What is the solution to the equation 2x + 5 = 15?",
      options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
      correctAnswer: 0,
    },
    {
      id: 5,
      text: "What is the area of a circle with radius 3?",
      options: ["9π", "6π", "3π", "27π"],
      correctAnswer: 0,
    },
  ]);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
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
  const dragRef = useRef(null);
  const timerRef = useRef(null);
  const assistantRef = useRef(null);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Auto-scroll assistant messages
  useEffect(() => {
    if (assistantRef.current) {
      assistantRef.current.scrollTop = assistantRef.current.scrollHeight;
    }
  }, [messages, showAssistant]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);

    // Auto-progress to next question after 500ms
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
      }
    }, 500);
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
    handleNextQuestion();
  };

  const handleSubmitQuiz = () => {
    clearInterval(timerRef.current);
    setQuizSubmitted(true);
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

  // Calculate score if quiz is submitted
  const score = quizSubmitted
    ? questions.reduce(
        (acc, question, index) =>
          acc + (answers[index] === question.correctAnswer ? 1 : 0),
        0
      )
    : null;

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-6">
      <main className="container mx-auto px-4 py-8">
        {/* Quiz Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-secondary">
              {subject.name} ({subject.code})
            </h1>
            <p className="text-lg text-gray-700">
              {user.name} • ID: {user.studentId}
            </p>
          </div>

          <div className="flex items-center mt-4 md:mt-0 bg-white rounded-lg px-4 py-2 shadow">
            <MdTimer className="mr-2 text-xl text-primary" />
            <span className="text-xl font-mono text-primary">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Quiz Progress */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
          <motion.div
            className="h-4 rounded-full bg-secondary"
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
            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
            Complete
          </span>
        </div>

        {quizSubmitted ? (
          <motion.div
            className="bg-white rounded-xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Quiz Submitted!
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Your score: <span className="text-primary">{score}</span> out of{" "}
              {questions.length} ({Math.round((score / questions.length) * 100)}
              %)
            </p>
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
                </div>
              ))}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-opacity-90 transition"
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
                <h2 className="text-xl font-bold text-primary">
                  Question {currentQuestionIndex + 1}
                </h2>
                <button
                  onClick={() => setShowAssistant(!showAssistant)}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition text-primary"
                >
                  <FaRobot />
                </button>
              </div>

              <p className="text-lg mb-6 text-gray-700">
                {questions[currentQuestionIndex].text}
              </p>

              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg transition ${
                          selectedAnswer === index
                            ? "border-2 border-primary bg-primary text-white"
                            : "bg-gray-100 hover:bg-primary text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    </motion.div>
                  )
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
                  className="flex items-center px-4 py-2 bg-secondary hover:bg-opacity-90 rounded-lg text-white"
                >
                  Next <MdOutlineArrowForward className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="flex items-center px-4 py-2 rounded-lg bg-primary hover:bg-opacity-90 text-white"
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
                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-primary hover:bg-opacity-90 transition-all text-white"
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
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed z-50 right-4 bottom-4 w-80 rounded-lg shadow-xl overflow-hidden flex flex-col bg-white border border-primary"
                  style={{ height: "400px" }}
                >
                  <div className="p-3 flex justify-between items-center bg-primary text-white">
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
                          msg.sender === "ai" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-xs p-3 rounded-lg ${
                            msg.sender === "ai"
                              ? "bg-gray-100 text-gray-700 border border-primary"
                              : "bg-secondary text-white"
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
                      placeholder="Ask for a hint..."
                      className="flex-1 rounded-l-lg px-3 py-2 focus:outline-none border border-gray-300"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 rounded-r-lg bg-primary text-white hover:bg-opacity-90 transition"
                    >
                      <FaPaperPlane />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm bg-white">
        <nav className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-white shadow-sm">
          <div className="flex items-center">
            <MdSchool className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">Miras</span>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/ksulogo.png"
              alt="KSU Logo"
              className="h-8 md:h-12 lg:h-16 w-auto object-contain"
            />
            <div className="h-16 border-l-2 border-gray-300 mx-2"></div>
            <img
              src="/2030vision.svg"
              alt="2030 Vision"
              className="h-8 md:h-12 lg:h-16 w-auto object-contain"
            />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Quiz;
