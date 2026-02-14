import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Auth Guards Demo</h1>
        <p className="text-gray-600 mb-6">
          Learn to protect routes by requiring authentication.
          Try visiting /dashboard or /settings without signing in!
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          This page is <strong>public</strong> — anyone can see it.
          The Dashboard and Settings pages are <strong>protected</strong>.
        </div>
      </div>
    </>
  );
}