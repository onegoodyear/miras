import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaMicroscope,
  FaChartLine,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  MdSchool,
  MdOutlineScience,
  MdComputer,
  MdEngineering,
} from "react-icons/md";

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Submitted email:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/backgroundvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Navbar + Hero Content */}
        <div className="relative z-10">
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
              <div className="h-16 border-l-2 border-white mx-2"></div>{" "}
              {/* Vertical line */}
              <img
                src="/2030vision.svg"
                alt="2030 Vision"
                className="h-8 md:h-12 lg:h-16 w-auto object-contain"
              />
            </div>
          </nav>

          {/* Hero Text */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 md:mt-40 text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Empowering Your</span>
              <span className="block">Academic Journey</span>
            </h1>
            <p className="mt-6 text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
              Access quality educational resources, connect with peers, and
              excel in your studies with our comprehensive platform.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-3 bg-white text-primary font-medium rounded-md shadow hover:bg-gray-100 transition"
              >
                Get Started
              </button>
              <button className="px-8 py-3 bg-[#006a9b] text-white font-medium rounded-md shadow hover:bg-[#005a84] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className="text-base text-secondary
             font-semibold tracking-wide uppercase"
            >
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides comprehensive tools to support your academic
              journey.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <FaBookOpen
                      className="text-secondary
                   text-4xl"
                    />
                  ),
                  title: "Course Materials",
                  description:
                    "Access lecture notes, slides, and reading materials for all your courses.",
                },
                {
                  icon: (
                    <FaLaptopCode
                      className="text-secondary
                   text-4xl"
                    />
                  ),
                  title: "Practice Exams",
                  description:
                    "Prepare with past exams and quizzes to test your knowledge.",
                },
                {
                  icon: (
                    <FaChalkboardTeacher
                      className="text-secondary
                     text-4xl"
                    />
                  ),
                  title: "Expert Tutors",
                  description:
                    "Connect with experienced tutors for personalized help.",
                },
                {
                  icon: (
                    <FaUserGraduate
                      className="text-secondary
                   text-4xl"
                    />
                  ),
                  title: "Peer Network",
                  description:
                    "Collaborate with fellow students in study groups.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-md text-white mx-auto">
                        {feature.icon}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className="text-base text-secondary
             font-semibold tracking-wide uppercase"
            >
              Specializations
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive coverage across disciplines
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <MdOutlineScience
                    className="text-secondary
                 text-4xl"
                  />
                ),
                title: "Natural Sciences",
                count: "24 courses",
              },
              {
                icon: (
                  <MdComputer
                    className="text-secondary
                 text-4xl"
                  />
                ),
                title: "Computer Science",
                count: "18 courses",
              },
              {
                icon: (
                  <MdEngineering
                    className="text-secondary
                 text-4xl"
                  />
                ),
                title: "Engineering",
                count: "32 courses",
              },
              {
                icon: (
                  <FaMicroscope
                    className="text-secondary
                 text-4xl"
                  />
                ),
                title: "Health Sciences",
                count: "15 courses",
              },
            ].map((specialization, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">{specialization.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {specialization.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {specialization.count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-secondary">
        <div className="h-56 bg-secondary sm:h-72 md:h-96 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/landingpage.jpg"
            alt="Students working together"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:ml-auto lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Join our growing community</span>
            </h2>
            <p className="mt-3 text-lg leading-6 text-blue-100">
              Thousands of students and educators are already benefiting from
              our platform.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { name: "Active Students", value: "10,000+" },
                { name: "Courses Available", value: "200+" },
                { name: "Resources Shared", value: "50,000+" },
                { name: "Expert Tutors", value: "500+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-4 rounded-lg"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm font-medium text-blue-100">
                    {stat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What students are saying
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "This platform completely transformed how I study. The resources are comprehensive and well-organized.",
                  name: "Sarah Johnson",
                  role: "Computer Science Student",
                },
                {
                  quote:
                    "I improved my grades significantly after joining. The practice exams were especially helpful.",
                  name: "Ahmed Mohammed",
                  role: "Engineering Student",
                },
                {
                  quote:
                    "As a tutor, I find the platform incredibly useful for sharing materials with my students.",
                  name: "Dr. Emily Chen",
                  role: "Physics Tutor",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mx-auto">
                        <FaQuoteLeft className="h-6 w-6" />
                      </div>
                      <blockquote className="mt-8">
                        <p className="text-base text-gray-600 text-center">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      <div className="mt-8">
                        <div className="flex items-center justify-center">
                          <div className="ml-4 text-center">
                            <div className="text-base font-medium text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-base text-gray-500">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-primary">
              Start your free account today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => navigate("/register")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-[#006a9b] transition"
              >
                Get started
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Exams
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Stay connected
              </h3>
              <div className="mt-4 flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-8">
                <form
                  className="sm:flex"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="email-address"
                    className="sr-only"
                  >
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary sm:max-w-xs border-gray-300 rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-[#006a9b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} Miras Education. All rights
                reserved.
              </p>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              Made with ❤️ for students everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
