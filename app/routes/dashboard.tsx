import AuthGuard from "~/components/AuthGuard";
import Navbar from "~/components/Navbar";

export default function Dashboard() {
  return (
    <AuthGuard>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          This is a <strong>protected</strong> page. Only authenticated users can see this.
        </div>
      </div>
    </AuthGuard>
  );
}