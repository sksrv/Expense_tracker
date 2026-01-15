import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md p-4 flex items-center justify-between">
      {/* Logo / Title */}
     <Link to="/dashboard"> <h1 Link className="text-white text-2xl font-bold tracking-wide">
        Expense Tracker
      </h1> </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/profile"
          className="text-white font-medium hover:text-yellow-300 transition-colors"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
