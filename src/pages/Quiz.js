import { useState, useEffect, useRef } from "react";
import { MdSchool, MdTimer, MdHelpOutline, MdOutlineArrowBack, MdOutlineArrowForward, MdOutlineExitToApp } from "react-icons/md";
import { FaRegQuestionCircle, FaRobot } from "react-icons/fa";
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
      options: [
        "6x + 2",
        "3x + 2",
        "6x² + 2",
        "3x² + 2x"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Which of these is the integral of 1/x?",
      options: [
        "ln|x| + C",
        "x²/2 + C",
        "1/x² + C",
        "e^x + C"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      text: "What is the limit of (x² - 4)/(x - 2) as x approaches 2?",
      options: [
        "4",
        "0",
        "Undefined",
        "2"
      ],
      correctAnswer: 0
    }
  ]);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [assistantMessage, setAssistantMessage] = useState("");
  const [isAssistantTyping, setIsAssistantTyping] = useState(false);
  const timerRef = useRef(null);
  const assistantRef = useRef(null);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
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
  }, [assistantMessage, showAssistant]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
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

  const handleAskAssistant = () => {
    setIsAssistantTyping(true);
    setAssistantMessage(prev => prev + "\nAI: Thinking...");
    
    // Simulate AI response after delay
    setTimeout(() => {
      const currentQuestion = questions[currentQuestionIndex];
      const hint = getQuestionHint(currentQuestion.id);
      setAssistantMessage(prev => 
        prev.replace("\nAI: Thinking...", "") + 
        `\nYou: Help with question ${currentQuestionIndex + 1}\nAI: ${hint}`
      );
      setIsAssistantTyping(false);
    }, 1500);
  };

  const getQuestionHint = (questionId) => {
    const hints = {
      1: "Remember the power rule for derivatives: d/dx[x^n] = n*x^(n-1). Apply this to each term separately.",
      2: "Recall that the derivative of ln|x| is 1/x. Therefore, the integral of 1/x is ln|x| + C.",
      3: "This is an indeterminate form (0/0). Try factoring the numerator or using L'Hôpital's rule."
    };
    return hints[questionId] || "I don't have a specific hint for this question. Review the relevant chapter in your textbook.";
  };

  // Calculate score if quiz is submitted
  const score = quizSubmitted 
    ? questions.reduce((acc, question, index) => 
        acc + (answers[index] === question.correctAnswer ? 1 : 0), 0)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0084bd] to-[#006a9b] text-white">
      {/* Navbar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <MdSchool className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 text-white" />
          <span className="ml-2 text-xl font-bold text-white">Miras</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/ksulogo.png"
            alt="KSU Logo"
            className="h-8 md:h-12 lg:h-16 w-auto object-contain"
          />
          <div className="h-16 border-l-2 border-white mx-2"></div>
          <img
            src="/2030vision.svg"
            alt="2030 Vision"
            className="h-8 md:h-12 lg:h-16 w-auto object-contain"
          />
        </div>
      </nav>

      {/* Main Quiz Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Quiz Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{subject.name} ({subject.code})</h1>
            <p className="text-lg opacity-90">
              {user.name} • ID: {user.studentId}
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 bg-white bg-opacity-20 rounded-lg px-4 py-2">
            <MdTimer className="mr-2 text-xl" />
            <span className="text-xl font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Quiz Progress */}
        <div className="w-full bg-white bg-opacity-20 rounded-full h-4 mb-8">
          <motion.div 
            className="bg-white h-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
        </div>

        {quizSubmitted ? (
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Quiz Submitted!</h2>
            <p className="text-xl mb-6">
              Your score: {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {questions.map((question, index) => (
                <div 
                  key={question.id} 
                  className={`p-4 rounded-lg ${
                    answers[index] === question.correctAnswer 
                      ? "bg-green-500 bg-opacity-30" 
                      : "bg-red-500 bg-opacity-30"
                  }`}
                >
                  <p className="font-medium">Q{index + 1}: {question.text}</p>
                  <p className="mt-2">
                    Your answer: {answers[index] !== null ? question.options[answers[index]] : "Skipped"}
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <p className="mt-1">Correct answer: {question.options[question.correctAnswer]}</p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-[#0084bd] rounded-lg font-medium hover:bg-opacity-90 transition"
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
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">
                  Question {currentQuestionIndex + 1}
                </h2>
                <button 
                  onClick={() => setShowAssistant(!showAssistant)}
                  className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition"
                >
                  <FaRobot />
                </button>
              </div>
              
              <p className="text-lg mb-6">{questions[currentQuestionIndex].text}</p>
              
              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-lg transition ${
                        selectedAnswer === index
                          ? "bg-[#0084bd] bg-opacity-50 border-2 border-white"
                          : "bg-white bg-opacity-10 hover:bg-opacity-20"
                      }`}
                    >
                      {option}
                    </button>
                  </motion.div>
                ))}
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
                      ? "bg-gray-500 bg-opacity-20 cursor-not-allowed"
                      : "bg-white bg-opacity-10 hover:bg-opacity-20"
                  }`}
                >
                  <MdOutlineArrowBack className="mr-2" />
                  Previous
                </button>
                <button
                  onClick={handleSkipQuestion}
                  className="flex items-center px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg"
                >
                  <FaRegQuestionCircle className="mr-2" />
                  Skip
                </button>
              </div>
              
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg"
                >
                  Next <MdOutlineArrowForward className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
                >
                  Submit Quiz <MdOutlineExitToApp className="ml-2" />
                </button>
              )}
            </div>

            {/* AI Assistant Panel */}
            <AnimatePresence>
              {showAssistant && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-black bg-opacity-30 rounded-xl overflow-hidden mb-8"
                >
                  <div className="p-4 border-b border-white border-opacity-20 flex justify-between items-center">
                    <div className="flex items-center">
                      <FaRobot className="mr-2 text-[#0084bd]" />
                      <span className="font-medium">Quiz Assistant</span>
                    </div>
                    <button 
                      onClick={() => setShowAssistant(false)}
                      className="text-white opacity-70 hover:opacity-100"
                    >
                      ×
                    </button>
                  </div>
                  <div 
                    ref={assistantRef}
                    className="p-4 max-h-60 overflow-y-auto text-sm"
                  >
                    {assistantMessage ? (
                      assistantMessage.split("\n").map((line, i) => (
                        <p 
                          key={i} 
                          className={`mb-2 ${
                            line.startsWith("AI:") ? "text-[#00a1e0]" : 
                            line.startsWith("You:") ? "text-white" : "text-gray-300"
                          }`}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-400">
                        Ask the assistant for help with this question.
                      </p>
                    )}
                    {isAssistantTyping && (
                      <div className="flex space-x-1 mt-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-white border-opacity-20">
                    <button
                      onClick={handleAskAssistant}
                      disabled={isAssistantTyping}
                      className={`w-full flex items-center justify-center py-2 px-4 rounded-lg ${
                        isAssistantTyping
                          ? "bg-gray-500 bg-opacity-20 cursor-not-allowed"
                          : "bg-[#0084bd] hover:bg-[#006a9b]"
                      }`}
                    >
                      <MdHelpOutline className="mr-2" />
                      Get Help with This Question
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-white text-opacity-70 text-sm">
        <p>© {new Date().getFullYear()} Miras University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Quiz;