import Navbar from "~/components/Navbar";

export default function Login() {
  // TODO: Implement login with supabase.auth.signInWithPassword
  // TODO: Redirect to /dashboard on success

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign In</button>
        </form>
      </div>
    </>
  );
}