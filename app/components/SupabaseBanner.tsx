import { isSupabaseConfigured } from "~/lib/supabase";

export default function SupabaseBanner() {
  if (isSupabaseConfigured) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
      <p className="text-xs text-amber-800">
        Supabase not configured. Add <code className="bg-amber-100 px-1 rounded">VITE_SUPABASE_URL</code> and{" "}
        <code className="bg-amber-100 px-1 rounded">VITE_SUPABASE_ANON_KEY</code> to your{" "}
        <code className="bg-amber-100 px-1 rounded">.env</code> file.
      </p>
    </div>
  );
}
