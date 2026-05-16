import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: "📄",
    title: "Resume Parsing",
    desc: "Extract skills, education, projects, and experience from resumes automatically.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    desc: "Get ATS score, keyword suggestions, and resume improvement recommendations.",
  },
  {
    icon: "📊",
    title: "Saved Reports",
    desc: "Save and revisit previous resume analyses anytime from your dashboard.",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    desc: "Fast processing and clear results so you can improve your resume right away.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create Account",
    desc: "Sign up in seconds and get access to your personal dashboard.",
  },
  {
    step: "02",
    title: "Upload Resume",
    desc: "Upload your PDF or DOCX resume — we support all major formats.",
  },
  {
    step: "03",
    title: "Get AI Feedback",
    desc: "Receive your ATS score, skills analysis, and actionable recommendations instantly.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Software Engineer",
    text: "Eleva helped me improve my ATS score from 58% to 85% in one session. Got my first interview the following week!",
  },
  {
    name: "Rahul M.",
    role: "CS Student",
    text: "As a fresher, I had no idea how to make my resume stand out. Eleva's recommendations were practical and easy to follow.",
  },
  {
    name: "Ananya T.",
    role: "Product Manager",
    text: "The missing keywords section was a game changer. I finally understood what hiring managers are actually looking for.",
  },
];

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-50">


      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to from-white to-gray-50">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-6">
          AI-Powered Resume Analysis
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl leading-tight">
          Get Your Resume
          <span className="text-blue-600"> ATS-Ready</span> in Minutes
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
          Eleva analyzes your resume, scores it against ATS systems, and gives you
          specific recommendations to help you land more interviews.
        </p>

   
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {user ? (
            <>
              <Link
                to="/upload"
                className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
              >
                Analyze My Resume
              </Link>
              <Link
                to="/dashboard"
                className="px-8 py-4 text-lg font-semibold text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition"
              >
                Go to Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>
      </section>

      <section className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: "10K+", label: "Resumes Analyzed" },
            { value: "87%", label: "Avg ATS Improvement" },
            { value: "4.8/5", label: "User Rating" },
            { value: "2 min", label: "Analysis Time" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            Everything You Need to Land the Job
          </h2>
          <p className="mt-3 text-gray-500">
            Powerful features designed for students and professionals.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800">How Eleva Works</h2>
            <p className="mt-3 text-gray-500">Three simple steps to a better resume.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl text-xl font-bold mb-5">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">What Users Say</h2>
          <p className="mt-3 text-gray-500">Real feedback from people who improved their resumes with Eleva.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-2">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

  
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Resume?</h2>
          <p className="mt-3 text-blue-200">
            Join thousands of job seekers who improved their resume with Eleva.
          </p>
          <Link
            to={user ? "/upload" : "/signup"}
            className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
          >
            {user ? "Analyze My Resume" : "Get Started Free"}
          </Link>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
