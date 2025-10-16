import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🎫 Event Registration</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Events</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/my-registrations">My Registrations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
