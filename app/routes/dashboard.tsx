import AuthGuard from "~/components/AuthGuard";
import Navbar from "~/components/Navbar";
import PageTransition, { staggerContainer, fadeInUp } from "~/components/PageTransition";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <AuthGuard>
      <Navbar />
      <PageTransition>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto px-6 py-10"
        >
          <motion.h1 variants={fadeInUp} className="text-2xl font-semibold text-gray-900 mb-6">
            Dashboard
          </motion.h1>
          <motion.div variants={fadeInUp} className="card rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-gray-700">Protected page</span>
            </div>
            <p className="text-sm text-gray-500">
              Only authenticated users can access this content.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            <div className="card rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Active sessions</p>
              <p className="text-xl font-semibold text-gray-900">1</p>
            </div>
            <div className="card rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Last login</p>
              <p className="text-xl font-semibold text-gray-900">Just now</p>
            </div>
          </motion.div>
        </motion.div>
      </PageTransition>
    </AuthGuard>
  );
}