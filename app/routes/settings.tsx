import AuthGuard from "~/components/AuthGuard";
import Navbar from "~/components/Navbar";
import PageTransition, { staggerContainer, fadeInUp } from "~/components/PageTransition";
import { motion } from "framer-motion";

export default function Settings() {
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
            Settings
          </motion.h1>
          <motion.div variants={fadeInUp} className="card rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-gray-700">Protected page</span>
            </div>
            <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="card rounded-lg divide-y divide-gray-100">
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Email notifications</p>
                <p className="text-xs text-gray-500 mt-0.5">Receive updates via email</p>
              </div>
              <div className="w-10 h-5 bg-gray-900 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Two-factor authentication</p>
                <p className="text-xs text-gray-500 mt-0.5">Extra security for your account</p>
              </div>
              <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </PageTransition>
    </AuthGuard>
  );
}