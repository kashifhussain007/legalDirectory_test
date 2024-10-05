import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-red-600">403</h1>
        <h2 className="text-xl font-semibold mt-2">Unauthorized Access</h2>
        <p className="text-gray-700 mt-4">
          You do not have permission to view this page.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
