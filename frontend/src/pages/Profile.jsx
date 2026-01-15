import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile</h2>
        <div className="text-gray-600 text-lg space-y-2">
          <div>
            <span className="font-semibold text-gray-800">Username: </span>
            {user?.name || "Not available"}
          </div>

          <div>
            <span className="font-semibold text-gray-800">Email: </span>
            {user?.email || "Not available"}
          </div>
        </div>

        {/* Optional: Add a card or button for editing profile */}
        <div className="flex items-center gap-3 mt-6">
          <button
            disabled
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow opacity-70 cursor-not-allowed"
          >
            Edit Profile
          </button>

          <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
            Coming Soon
          </span>
        </div>

      </div>
    </div>
  );
};

export default Profile;
