import Navbar from "~/components/Navbar";
import PageTransition, { staggerContainer, fadeInUp } from "~/components/PageTransition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl mx-auto px-6 py-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">
              Auth Guards Demo
            </h1>
            <p className="text-gray-500">
              Protect routes by requiring authentication. Try visiting the dashboard or settings without signing in.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="card rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-gray-700">Public page</span>
            </div>
            <p className="text-sm text-gray-500">
              Anyone can access this page. Dashboard and Settings require authentication.
            </p>
          </motion.div>
        </motion.div>
      </PageTransition>
    </>
  );
}