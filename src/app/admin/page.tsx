"use client";

import withAuth from "../../hoc/withAuth";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Admin Dashboard
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          This page is only accessible by users with the{" "}
          <strong>'admin'</strong> role.
        </p>

        {/* Add admin-specific content here */}
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-blue-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">
              User Management
            </h2>
            <p className="text-gray-600">
              Manage user roles, permissions, and profiles from here.
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Manage Users
            </button>
          </div>

          <div className="p-4 bg-green-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">Reports</h2>
            <p className="text-gray-600">
              View and download reports for the platform usage.
            </p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              View Reports
            </button>
          </div>

          <div className="p-4 bg-yellow-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
            <p className="text-gray-600">
              Adjust application settings, notifications, and preferences.
            </p>
            <button className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Go to Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; // Only admins can access this page
// export default withAuth(AdminPage, ["admin"]); // Only admins can access this page
