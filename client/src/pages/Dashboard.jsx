import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Dashboard() {
  const { user, updateName } = useAuth();

  const firstName = user.name;

  const [isEditing, setIsEditing] = useState(false);

  
  const [newName, setNewName] = useState("");

 
  const handleEditClick = () => {
    setNewName(user.name); 
    setIsEditing(true);
  };


  const handleSave = () => {
    const trimmed = newName.trim();
    if (trimmed === "") return; 
    updateName(trimmed);
    setIsEditing(false);
  };

  
  const handleCancel = () => {
    setIsEditing(false);
  };

  const history = [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

 
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {firstName}! 👋
        </h1>
        <p className="mt-2 text-gray-500">Here's a summary of your resume activity.</p>
      </div>


      <div className="bg-blue-600 rounded-2xl p-8 text-white mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Analyze a New Resume</h2>
          <p className="mt-1 text-blue-100 text-sm">
            Upload your latest resume and get instant AI feedback.
          </p>
        </div>
        <Link
          to="/upload"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition whitespace-nowrap"
        >
          Upload Resume
        </Link>
      </div>


      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Recent Analyses</h2>

        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-gray-400">
            <p>No analyses yet. Upload a resume to get started!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg">
                    📄
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.file}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">ATS Score</p>
                    <p
                      className={`text-lg font-bold ${
                        item.ats >= 75 ? "text-green-600" : "text-yellow-500"
                      }`}
                    >
                      {item.ats}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Resume Score</p>
                    <p
                      className={`text-lg font-bold ${
                        item.score >= 75 ? "text-green-600" : "text-yellow-500"
                      }`}
                    >
                      {item.score}%
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    Analyzed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="mt-10 bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800">{user?.name}</p>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>

          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="text-sm text-blue-600 hover:underline"
            >
              Edit Name
            </button>
          )}
        </div>

        {isEditing && (
          <div className="mt-4 flex items-center gap-3">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter new name"
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            />
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;
