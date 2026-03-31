import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Navbar() {
  // TODO: Check auth state to show different nav items
  const isLoggedIn = false; // Replace with real auth check

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"
    >
      <Link to="/" className="text-lg font-semibold text-gray-900">
        Auth Guards
      </Link>
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Settings
            </Link>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              Sign out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Sign in
          </Link>
        )}
      </div>
    </motion.nav>
  );
}