import { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaComment,
  FaLock,
  FaSearch,
  FaPlus,
  FaUser,
  FaEllipsisH,
  FaCheck,
  FaBookmark,
  FaShare,
  FaRegBookmark,
  FaRegThumbsUp,
  FaThumbsUp,
  FaCrown,
} from "react-icons/fa";
import { MdOutlineTopic, MdOutlineForum, MdClose } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const ForumPage = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "How to solve this advanced calculus problem?",
      author: {
        name: "Ahmed Khaled",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        score: 245,
        role: "Mathematics Tutor",
      },
      content:
        "I'm struggling with this integral problem in my calculus course. The problem is ∫(x²·e^x)dx. I've tried integration by parts but keep going in circles. Can anyone help me understand the proper solution approach?",
      comments: [
        {
          id: 1,
          author: {
            name: "Mohammed Ali",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            score: 189,
            role: "Physics Student",
          },
          content:
            "Have you tried integration by parts twice? Sometimes you need to apply it recursively.",
          votes: 5,
          timestamp: "2 hours ago",
          isSolution: false,
        },
        {
          id: 2,
          author: {
            name: "Sarah Mohammed",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            score: 312,
            role: "Math Professor",
          },
          content:
            "Here's the step-by-step solution:\n1. Let u = x² ⇒ du = 2x dx\n2. Let dv = e^x dx ⇒ v = e^x\n3. Apply integration by parts: ∫u dv = uv - ∫v du\n4. You'll need to apply integration by parts again to the remaining integral\n5. Final answer: e^x(x² - 2x + 2) + C",
          votes: 12,
          timestamp: "1 hour ago",
          isSolution: true,
        },
      ],
      votes: 17,
      views: 143,
      timestamp: "5 hours ago",
      tags: ["Calculus", "Mathematics"],
      isClosed: false,
      isBookmarked: false,
    },
    {
      id: 2,
      title: "Best resources to learn Quantum Physics basics",
      author: {
        name: "Layla Hassan",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        score: 178,
        role: "Engineering Student",
      },
      content:
        "Looking for beginner-friendly resources to understand quantum physics concepts. I'm particularly interested in video lectures and interactive materials. Any recommendations?",
      comments: [
        {
          id: 1,
          author: {
            name: "Omar Farouk",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            score: 421,
            role: "Quantum Researcher",
          },
          content:
            "I highly recommend 'Quantum Physics for Beginners' by Leonard Susskind's lectures on YouTube. Also, the Quantum Country guide is an excellent interactive resource.",
          votes: 8,
          timestamp: "1 day ago",
          isSolution: false,
        },
      ],
      votes: 9,
      views: 87,
      timestamp: "1 day ago",
      tags: ["Physics", "Quantum"],
      isClosed: false,
      isBookmarked: true,
    },
    {
      id: 3,
      title: "إثراء",
      author: {
        name: "نورا أحمد",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        score: 320,
        role: "طالبة علوم حاسب",
      },
      content:
        "أريد أن أشارككم بعض التحديات التي واجهتها في رحلتي لتعلم البرمجة وكيف تخطيتها. ما هي التحديات التي واجهتموها وكيف تعاملتم معها؟",
      comments: [
        {
          id: 1,
          author: {
            name: "خالد سعد",
            avatar: "https://randomuser.me/api/portraits/men/33.jpg",
            score: 280,
            role: "مطور ويب",
          },
          content:
            "أكبر تحدي واجهته هو فهم الخوارزميات المعقدة. الحل كان في الممارسة المستمرة وحل المشكلات على منصات مثل LeetCode.",
          votes: 7,
          timestamp: "منذ 3 ساعات",
          isSolution: false,
        },
        {
          id: 2,
          author: {
            name: "سارة محمد",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
            score: 410,
            role: "مهندسة برمجيات",
          },
          content:
            "التحدي الأكبر كان إدارة الوقت بين الدراسة والعمل. أنصح باستخدام تقنيات مثل Pomodoro وتقسيم المهام إلى أجزاء صغيرة.",
          votes: 12,
          timestamp: "منذ ساعة",
          isSolution: true,
        },
      ],
      votes: 15,
      views: 120,
      timestamp: "منذ 6 ساعات",
      tags: ["برمجة", "تعلم"],
      isClosed: false,
      isBookmarked: false,
    },
    {
      id: 4,
      title: "ريد 101",
      author: {
        name: "علي عبدالله",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        score: 380,
        role: "كبير المطورين",
      },
      content:
        "في هذا الموضوع سنناقش أهم المبادئ لكتابة أكواد نظيفة وسهلة الصيانة. ما هي النصائح التي تتبعونها في مشاريعكم؟",
      comments: [
        {
          id: 1,
          author: {
            name: "ريم خالد",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            score: 290,
            role: "مطورة تطبيقات",
          },
          content:
            "أهم شيء هو تسمية المتغيرات والدوال بأسماء واضحة تعبر عن الغرض منها. أيضًا تقسيم الكود إلى دوال صغيرة كل منها مسؤولة عن شيء واحد.",
          votes: 9,
          timestamp: "منذ يومين",
          isSolution: false,
        },
        {
          id: 2,
          author: {
            name: "ياسر ناصر",
            avatar: "https://randomuser.me/api/portraits/men/66.jpg",
            score: 450,
            role: "مهندس برمجيات",
          },
          content:
            "اتباع مبادئ SOLID واستخدام التعليقات فقط عندما يكون الكود معقدًا حقًا. الكود الجيد يجب أن يشرح نفسه بنفسه.",
          votes: 15,
          timestamp: "منذ يوم",
          isSolution: true,
        },
      ],
      votes: 24,
      views: 210,
      timestamp: "منذ 3 أيام",
      tags: ["برمجة", "أكواد نظيفة"],
      isClosed: true,
      isBookmarked: true,
    },
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewTopicForm, setShowNewTopicForm] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: "",
    content: "",
    tags: [],
  });
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Mock leaderboard data
  const leaderboard = [
    {
      id: 1,
      name: "ياسر ناصر",
      score: 450,
      role: "مهندس برمجيات",
      avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
      id: 2,
      name: "سارة محمد",
      score: 410,
      role: "مهندسة برمجيات",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Omar Farouk",
      score: 421,
      role: "Quantum Researcher",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      name: "علي عبدالله",
      score: 380,
      role: "كبير المطورين",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 5,
      name: "نورا أحمد",
      score: 320,
      role: "طالبة علوم حاسب",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 6,
      name: "Abdellatif Feghouli",
      score: 325,
      role: "Computer Science Student",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 7,
      name: "ريم خالد",
      score: 290,
      role: "مطورة تطبيقات",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 8,
      name: "خالد سعد",
      score: 280,
      role: "مطور ويب",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 9,
      name: "Ahmed Khaled",
      score: 245,
      role: "Mathematics Tutor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 10,
      name: "Sarah Mohammed",
      score: 312,
      role: "Math Professor",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 11,
      name: "Layla Hassan",
      score: 178,
      role: "Engineering Student",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 12,
      name: "Mohammed Ali",
      score: 189,
      role: "Physics Student",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 13,
      name: "فاطمة علي",
      score: 210,
      role: "مطورة ألعاب",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 14,
      name: "أحمد راشد",
      score: 195,
      role: "خبير أمن معلومات",
      avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
      id: 15,
      name: "هناء وليد",
      score: 230,
      role: "باحثة ذكاء اصطناعي",
      avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    },
    {
      id: 16,
      name: "محمود سليم",
      score: 260,
      role: "مهندس بيانات",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      id: 17,
      name: "أميرة كمال",
      score: 240,
      role: "مصممة واجهات",
      avatar: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
      id: 18,
      name: "باسل نادر",
      score: 275,
      role: "مطور تطبيقات جوال",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    },
    {
      id: 19,
      name: "جنى عماد",
      score: 290,
      role: "خبيرة تعلم آلي",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      id: 20,
      name: "زياد فؤاد",
      score: 310,
      role: "مهندس نظم",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  // User data (mock)
  const currentUser = {
    name: "Abdellatif Feghouli",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    score: 325,
    role: "Computer Science Student",
  };

  useEffect(() => {
    // Auto-select the first topic on load
    if (topics.length > 0 && !selectedTopic) {
      setSelectedTopic(topics[0]);
    }
  }, [topics, selectedTopic]);

  const handleVote = (topicId, direction) => {
    setTopics(
      topics.map((topic) => {
        if (topic.id === topicId) {
          return {
            ...topic,
            votes: direction === "up" ? topic.votes + 1 : topic.votes - 1,
          };
        }
        return topic;
      })
    );
  };

  const handleCommentVote = (topicId, commentId, direction) => {
    setTopics(
      topics.map((topic) => {
        if (topic.id === topicId) {
          return {
            ...topic,
            comments: topic.comments.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  votes:
                    direction === "up" ? comment.votes + 1 : comment.votes - 1,
                };
              }
              return comment;
            }),
          };
        }
        return topic;
      })
    );
  };

  const addComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      author: currentUser,
      content: newComment,
      votes: 0,
      timestamp: "Just now",
      isSolution: false,
    };

    setTopics(
      topics.map((topic) => {
        if (topic.id === selectedTopic.id) {
          return {
            ...topic,
            comments: [...topic.comments, newCommentObj],
          };
        }
        return topic;
      })
    );

    setNewComment("");
  };

  const markAsSolution = (topicId, commentId) => {
    setTopics(
      topics.map((topic) => {
        if (topic.id === topicId) {
          return {
            ...topic,
            comments: topic.comments.map((comment) => ({
              ...comment,
              isSolution: comment.id === commentId,
            })),
            isClosed: true,
          };
        }
        return topic;
      })
    );
  };

  const toggleBookmark = (topicId) => {
    setTopics(
      topics.map((topic) => {
        if (topic.id === topicId) {
          return {
            ...topic,
            isBookmarked: !topic.isBookmarked,
          };
        }
        return topic;
      })
    );
  };

  const createNewTopic = () => {
    if (!newTopic.title.trim() || !newTopic.content.trim()) return;

    const topic = {
      id: Date.now(),
      title: newTopic.title,
      author: currentUser,
      content: newTopic.content,
      comments: [],
      votes: 0,
      views: 0,
      timestamp: "Just now",
      tags: newTopic.tags,
      isClosed: false,
      isBookmarked: false,
    };

    setTopics([topic, ...topics]);
    setSelectedTopic(topic);
    setShowNewTopicForm(false);
    setNewTopic({ title: "", content: "", tags: [] });
  };

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-background text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <MdOutlineForum className="h-8 w-8 text-primary" />
            <h1 className="ml-2 text-2xl font-bold">ksu مجتمع</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="flex items-center bg-secondary/10 px-3 py-1 rounded-full hover:bg-secondary/20 transition"
              >
                <span className="text-sm font-medium text-secondary mr-1">
                  Score:
                </span>
                <span className="font-bold">{currentUser.score}</span>
              </button>

              {/* Leaderboard Dropdown */}
              {showLeaderboard && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-10 border border-gray-200">
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="font-bold text-secondary">
                      قائمة المتصدرين
                    </h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {leaderboard.map((user, index) => (
                      <div
                        key={user.id}
                        className={`p-3 flex items-center justify-between ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-500 w-6">
                            {index + 1}
                          </span>
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-8 w-8 rounded-full mx-2"
                          />
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {index === 0 && (
                            <FaCrown className="text-yellow-400 mr-1" />
                          )}
                          <span className="text-sm font-bold text-secondary">
                            {user.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
        {/* Left Sidebar - Topics List */}
        <div className="w-full md:w-1/3 lg:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
            {/* Search and New Topic */}
            <div className="mb-4 flex space-x-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowNewTopicForm(true)}
                className="flex items-center justify-center p-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>

            {/* New Topic Form */}
            {showNewTopicForm && (
              <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold">New Discussion</h3>
                  <button onClick={() => setShowNewTopicForm(false)}>
                    <MdClose className="text-gray-500" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full mb-2 p-2 border border-gray-300 rounded-lg text-sm"
                  value={newTopic.title}
                  onChange={(e) =>
                    setNewTopic({ ...newTopic, title: e.target.value })
                  }
                />
                <textarea
                  placeholder="Content"
                  rows={3}
                  className="w-full mb-2 p-2 border border-gray-300 rounded-lg text-sm"
                  value={newTopic.content}
                  onChange={(e) =>
                    setNewTopic({ ...newTopic, content: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  className="w-full mb-3 p-2 border border-gray-300 rounded-lg text-sm"
                  value={newTopic.tags.join(",")}
                  onChange={(e) =>
                    setNewTopic({
                      ...newTopic,
                      tags: e.target.value.split(","),
                    })
                  }
                />
                <button
                  onClick={createNewTopic}
                  className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  Post Discussion
                </button>
              </div>
            )}

            {/* Topics List */}
            <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-3 rounded-lg cursor-pointer transition ${
                    selectedTopic?.id === topic.id
                      ? "bg-secondary/10 border-l-4 border-secondary"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {topic.title}
                    </h3>
                    {topic.isClosed && (
                      <FaLock className="text-gray-400 text-xs" />
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img
                        src={topic.author.avatar}
                        alt={topic.author.name}
                        className="h-5 w-5 rounded-full mr-1"
                      />
                      <span className="text-xs text-gray-600">
                        {topic.author.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-xs text-gray-500">
                        <FaComment className="mr-1" /> {topic.comments.length}
                      </span>
                      <span className="text-xs text-gray-500">
                        {topic.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Selected Topic */}
        <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden">
          {selectedTopic ? (
            <div className="h-full flex flex-col">
              {/* Topic Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold">{selectedTopic.title}</h2>
                    <div className="flex items-center mt-2">
                      <img
                        src={selectedTopic.author.avatar}
                        alt={selectedTopic.author.name}
                        className="h-8 w-8 rounded-full mr-2"
                      />
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">
                            {selectedTopic.author.name}
                          </span>
                          <span className="ml-2 text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                            {selectedTopic.author.role}
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{selectedTopic.timestamp}</span>
                          <span className="mx-2">•</span>
                          <span>{selectedTopic.views} views</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <FaUser className="mr-1" />{" "}
                            {selectedTopic.author.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleBookmark(selectedTopic.id)}
                      className="p-2 text-gray-500 hover:text-primary transition"
                    >
                      {selectedTopic.isBookmarked ? (
                        <FaBookmark className="text-primary" />
                      ) : (
                        <FaRegBookmark />
                      )}
                    </button>
                    <button className="p-2 text-gray-500 hover:text-secondary transition">
                      <FaShare />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedTopic.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Topic Content */}
              <div className="p-4 border-b border-gray-200">
                <p className="whitespace-pre-line">{selectedTopic.content}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleVote(selectedTopic.id, "up")}
                      className="flex items-center text-gray-500 hover:text-green-500 transition"
                    >
                      <FaArrowUp className="mr-1" />
                      <span>{selectedTopic.votes}</span>
                    </button>
                    <button
                      onClick={() => handleVote(selectedTopic.id, "down")}
                      className="flex items-center text-gray-500 hover:text-red-500 transition"
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                  {selectedTopic.isClosed && (
                    <div className="flex items-center text-green-600 text-sm">
                      <FaCheck className="mr-1" />
                      <span>Solved</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Comments Section */}
              <div className="flex-1 overflow-y-auto p-4">
                <h3 className="font-bold mb-4 flex items-center">
                  <FaComment className="mr-2 text-secondary" />
                  {selectedTopic.comments.length}{" "}
                  {selectedTopic.comments.length === 1 ? "Reply" : "Replies"}
                </h3>

                {selectedTopic.comments.length > 0 ? (
                  <div className="space-y-4">
                    {selectedTopic.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className={`p-3 rounded-lg ${
                          comment.isSolution
                            ? "bg-green-50 border-l-4 border-green-500"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <img
                              src={comment.author.avatar}
                              alt={comment.author.name}
                              className="h-8 w-8 rounded-full mr-3"
                            />
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {comment.author.name}
                                </span>
                                <span className="ml-2 text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                                  {comment.author.role}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                <span>{comment.timestamp}</span>
                                <span className="mx-2">•</span>
                                <span className="flex items-center">
                                  <FaUser className="mr-1" />{" "}
                                  {comment.author.score}
                                </span>
                              </div>
                            </div>
                          </div>
                          {comment.isSolution ? (
                            <div className="flex items-center text-green-600 text-sm">
                              <FaCheck className="mr-1" />
                              <span>Solution</span>
                            </div>
                          ) : (
                            !selectedTopic.isClosed && (
                              <button
                                onClick={() =>
                                  markAsSolution(selectedTopic.id, comment.id)
                                }
                                className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200 transition"
                              >
                                Mark as Solution
                              </button>
                            )
                          )}
                        </div>
                        <p className="mt-2 whitespace-pre-line text-sm">
                          {comment.content}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() =>
                                handleCommentVote(
                                  selectedTopic.id,
                                  comment.id,
                                  "up"
                                )
                              }
                              className="flex items-center text-gray-500 hover:text-green-500 transition text-sm"
                            >
                              {comment.votes > 0 ? (
                                <FaThumbsUp className="mr-1 text-green-500" />
                              ) : (
                                <FaRegThumbsUp className="mr-1" />
                              )}
                              <span>{comment.votes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No replies yet. Be the first to respond!
                  </div>
                )}
              </div>

              {/* Add Comment (if not closed) */}
              {!selectedTopic.isClosed && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <textarea
                        placeholder="Write your reply..."
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          {currentUser.name} • Score: {currentUser.score}
                        </span>
                        <button
                          onClick={addComment}
                          disabled={!newComment.trim()}
                          className={`flex items-center px-4 py-2 rounded-lg ${
                            newComment.trim()
                              ? "bg-primary text-white hover:bg-opacity-90"
                              : "bg-gray-200 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <IoMdSend className="mr-2" />
                          Post Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a topic to view discussion
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ForumPage;
