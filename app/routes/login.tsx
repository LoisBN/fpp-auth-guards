import Navbar from "~/components/Navbar";
import PageTransition, { staggerContainer, fadeInUp } from "~/components/PageTransition";
import { motion } from "framer-motion";

export default function Login() {
  // TODO: Implement login with supabase.auth.signInWithPassword
  // TODO: Redirect to /dashboard on success

  return (
    <>
      <Navbar />
      <PageTransition>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-sm mx-auto px-6 py-16"
        >
          <motion.div variants={fadeInUp} className="card rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Sign in
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                Sign in
              </button>
            </form>
          </motion.div>
        </motion.div>
      </PageTransition>
    </>
  );
}