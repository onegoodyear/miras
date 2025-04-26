import {
  MdSchool,
  MdQuiz,
  MdBarChart,
  MdHistory,
  MdPerson,
} from "react-icons/md";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  // Sample recently added items
  const recentlyAdded = [
    {
      id: 1,
      title: "Calculus II Quiz",
      subject: "Mathematics",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Data Structures Exam",
      subject: "Computer Science",
      date: "5 days ago",
    },
    { id: 3, title: "Physics Midterm", subject: "Physics", date: "1 week ago" },
  ];

  // Sample last consulted
  const lastConsulted = [
    {
      id: 1,
      title: "Linear Algebra Quiz",
      subject: "Mathematics",
      date: "Yesterday",
    },
    {
      id: 2,
      title: "Algorithms Test",
      subject: "Computer Science",
      date: "3 days ago",
    },
  ];

  // Sample suggested quizzes
  const suggestedQuizzes = [
    {
      id: 1,
      title: "Discrete Math Final",
      subject: "Mathematics",
      questions: 20,
      duration: "30 min",
    },
    {
      id: 2,
      title: "Database Systems Quiz",
      subject: "Computer Science",
      questions: 15,
      duration: "20 min",
    },
    {
      id: 3,
      title: "Operating Systems Test",
      subject: "Computer Science",
      questions: 25,
      duration: "45 min",
    },
  ];

  // Sample performance data
  const performanceData = {
    scores: [65, 59, 80, 81, 56, 55, 40],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    subjects: ["Math", "Physics", "CS", "English"],
    subjectScores: [85, 72, 90, 65],
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 flex items-center"
          >
            <div className="p-3 rounded-full bg-primary bg-opacity-10 text-primary mr-4">
              <MdQuiz className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Quizzes Taken
              </h3>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 flex items-center"
          >
            <div className="p-3 rounded-full bg-secondary bg-opacity-10 text-secondary mr-4">
              <FaChartLine className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Average Score
              </h3>
              <p className="text-2xl font-bold text-gray-800">78%</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 flex items-center"
          >
            <div className="p-3 rounded-full bg-primary bg-opacity-10 text-primary mr-4">
              <MdHistory className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Active Streak
              </h3>
              <p className="text-2xl font-bold text-gray-800">7 days</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 flex items-center"
          >
            <div className="p-3 rounded-full bg-secondary bg-opacity-10 text-secondary mr-4">
              <MdBarChart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Rank</h3>
              <p className="text-2xl font-bold text-gray-800">Top 15%</p>
            </div>
          </motion.div>
        </section>

        {/* Recently Added Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                Recently Added
              </h2>
              <button className="text-secondary hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyAdded.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-primary bg-opacity-10 text-primary mr-3">
                      <MdQuiz className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2">{item.subject}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <button className="mt-4 px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-lg hover:bg-opacity-20 transition">
                    Start Quiz
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Last Consulted Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                Last Consulted
              </h2>
              <button className="text-secondary hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lastConsulted.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-secondary bg-opacity-10 text-secondary mr-3">
                      <MdHistory className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2">{item.subject}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <div className="mt-4 flex space-x-3">
                    <button className="px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-lg hover:bg-opacity-20 transition">
                      Review
                    </button>
                    <button className="px-4 py-2 bg-secondary bg-opacity-10 text-secondary rounded-lg hover:bg-opacity-20 transition">
                      Retake
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Suggested Quiz Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                Suggested Quizzes
              </h2>
              <button className="text-secondary hover:underline">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quiz
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Questions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {suggestedQuizzes.map((quiz) => (
                    <tr
                      key={quiz.id}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {quiz.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quiz.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quiz.questions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quiz.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary hover:text-opacity-80">
                          Start Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Performance Graphs */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Your Performance
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Line Chart (Placeholder) */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaChartLine className="h-5 w-5 text-secondary mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Progress Over Time
                  </h3>
                </div>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  [Line Chart: Scores over months]
                  <div className="hidden">
                    {/* This would be replaced with an actual chart library */}
                    {performanceData.scores.join(",")}
                    {performanceData.labels.join(",")}
                  </div>
                </div>
              </div>

              {/* Pie Chart (Placeholder) */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaChartPie className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Performance by Subject
                  </h3>
                </div>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  [Pie Chart: Subject performance]
                  <div className="hidden">
                    {/* This would be replaced with an actual chart library */}
                    {performanceData.subjects.join(",")}
                    {performanceData.subjectScores.join(",")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Miras University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
