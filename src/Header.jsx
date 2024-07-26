import React from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-gray-700 py-2">
      <nav className="container mx-auto flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/Beau - 1.png" alt="Logo" className="h-36 w-36" />
        </Link>
        <div className="flex items-center space-x-6 ml-8">
          <Link to="/stylists" className="text-white text-lg hover:text-gray-300 px-4 py-2 rounded-md">
            Stylists
          </Link>
          <Link to="/signup" className="text-white text-lg hover:text-gray-300 px-4 py-2 rounded-md">
            Signup
          </Link>
          <Link to="/login" className="text-white text-lg hover:text-gray-300 px-4 py-2 rounded-md">
            Login
          </Link>
          <LogoutLink />
        </div>
      </nav>
    </header>
  );
}
