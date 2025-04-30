"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Login", href: "#" },
  { name: "Signup", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900">Horizon</h1>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 font-medium hover:text-gray-600 text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label="Open menu"
            >
              {/* Hamburger icon as SVG */}
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              {/* Logo in Mobile Menu */}
              <a href="#" className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">Horizon</span>
              </a>
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-200 hover:bg-gray-300"
                aria-label="Close menu"
              >
                {/* Close icon (X) SVG */}
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Menu Items */}
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-indigo-600 text-lg"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
