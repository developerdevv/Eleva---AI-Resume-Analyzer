import { useState } from "react";

const skillsPool = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "MongoDB",
  "TypeScript",
  "CSS",
  "HTML",
  "Git",
  "REST APIs",
  "Agile",
  "Java",
  "C++",
  "Docker",
  "AWS",
  "Linux",
  "Express.js",
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Leadership",
];

function pick(arr, count) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

function generateAnalysis() {
  return {
    atsScore: Math.floor(Math.random() * 30) + 60,
    resumeScore: Math.floor(Math.random() * 30) + 60,
    skills: pick(skillsPool, 6),
  };
}

function UploadResume() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setAnalysis(null);
    }
  };

  const handleAnalyze = () => {
    if (!fileName) return;

    setLoading(true);
    setAnalysis(null);

    setTimeout(() => {
      setAnalysis(generateAnalysis());
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Upload Your Resume
        </h1>

        <p className="mt-3 text-gray-500 text-lg">
          Get instant AI analysis — ATS score, skills,
          strengths, and recommendations.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-10">

        <label
          htmlFor="resumeUpload"
          className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-2xl h-64 cursor-pointer hover:bg-blue-50 transition"
        >
          <div className="text-center px-6">

            <div className="text-6xl mb-4">📄</div>

            <h2 className="text-xl font-semibold text-gray-800">
              Drag & Drop Resume
            </h2>

            <p className="mt-2 text-gray-500 text-sm">
              Supported formats: PDF, DOC, DOCX
            </p>

            <div className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Browse Files
            </div>

            {fileName && (
              <p className="mt-4 text-green-600 font-medium text-sm">
                ✓ Selected: {fileName}
              </p>
            )}

          </div>

          <input
            id="resumeUpload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <button
          onClick={handleAnalyze}
          disabled={!fileName || loading}
          className="w-full mt-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {loading && (
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-10 text-center">

          <div className="text-5xl mb-4 animate-spin inline-block">
            ⚙️
          </div>

          <p className="text-gray-700 font-semibold text-lg">
            Analyzing your resume...
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Checking ATS compatibility, extracting skills,
            scoring sections...
          </p>

        </div>
      )}

      {analysis && !loading && (
        <div className="bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Resume Analysis
          </h2>

          <div className="flex gap-8 mb-6">

            <div>
              <p className="text-sm text-gray-500">
                ATS Score
              </p>

              <p className="text-3xl font-bold text-blue-600">
                {analysis.atsScore}%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Resume Score
              </p>

              <p className="text-3xl font-bold text-green-600">
                {analysis.resumeScore}%
              </p>
            </div>

          </div>

          <div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Detected Skills
            </h3>

            <div className="flex flex-wrap gap-2">

              {analysis.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default UploadResume;