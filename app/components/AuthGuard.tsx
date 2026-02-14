import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

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
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
}