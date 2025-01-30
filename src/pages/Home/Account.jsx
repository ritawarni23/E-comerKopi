import React, { useState } from "react";

const Account = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    address: "123 Coffee St, Brewtown",
  });

  const handleUpdate = (e) => {
    e.preventDefault();

    alert("Profile Updated!");
  };

  const handleSignOut = () => {
    alert("You have signed out.");
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 xl:px-28">
      <h2 className="text-4xl font-semibold text-center mb-8 mt-32">
        Your Account
      </h2>
      <div className="max-w-screen-md mx-auto bg-gray-800 p-8 rounded-md shadow-lg">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Address</label>
            <input
              type="text"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 transition-all">
              Update Profile
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-400 transition-all">
              Sign Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
