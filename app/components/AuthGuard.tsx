import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // TODO: Check if the user is authenticated using supabase.auth.getUser()
    // If NOT authenticated, redirect to /login
    // If authenticated, set checking to false so children render

    // Placeholder: just show children after a delay
    const timer = setTimeout(() => setChecking(false), 500);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">Verifying...</p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}