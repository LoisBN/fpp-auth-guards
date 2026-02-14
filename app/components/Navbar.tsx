import { Link } from "react-router";

export default function Navbar() {
  // TODO: Check auth state to show different nav items
  const isLoggedIn = false; // Replace with real auth check

  return (
    <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-lg font-bold text-gray-900">Auth Guards Demo</Link>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link to="/settings" className="text-gray-600 hover:text-gray-900">Settings</Link>
            <button className="text-red-600 hover:text-red-700 text-sm">Sign Out</button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 text-sm">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}