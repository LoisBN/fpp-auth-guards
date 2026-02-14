import AuthGuard from "~/components/AuthGuard";
import Navbar from "~/components/Navbar";

export default function Settings() {
  return (
    <AuthGuard>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 mb-6">
          This is another <strong>protected</strong> page.
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-3">Account Settings</h3>
          <p className="text-gray-500 text-sm">TODO: Display user info and settings here</p>
        </div>
      </div>
    </AuthGuard>
  );
}