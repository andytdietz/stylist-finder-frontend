import React from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Stylist Finder
        </Link>
        <div>
          <Link to="/signup" className="text-white hover:text-gray-300 ml-4 px-3 py-2 rounded-md">
            Signup
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300 ml-4 px-3 py-2 rounded-md">
            Login
          </Link>
          <Link to="/stylists" className="text-white hover:text-gray-300 ml-4 px-3 py-2 rounded-md">
            Stylists
          </Link>
          <LogoutLink />
        </div>
      </nav>
    </header>
  );
}
