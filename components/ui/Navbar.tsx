// components/Navbar.tsx
'use client'; // Mark the file as a client component

import { useState } from 'react';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Newspaper className="h-8 w-8 text-blue-500" />
          <h1 className="text-2xl font-semibold text-gray-800">NewsFlash</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/world" className="text-gray-700 hover:text-blue-500">World</Link>
          <Link href="/business" className="text-gray-700 hover:text-blue-500">Business</Link>
          <Link href="/technology" className="text-gray-700 hover:text-blue-500">Technology</Link>
          <Link href="/sports" className="text-gray-700 hover:text-blue-500">Sports</Link>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-center py-4">
          <Link href="/" className="py-2 text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/world" className="py-2 text-gray-700 hover:text-blue-500">World</Link>
          <Link href="/business" className="py-2 text-gray-700 hover:text-blue-500">Business</Link>
          <Link href="/technology" className="py-2 text-gray-700 hover:text-blue-500">Technology</Link>
          <Link href="/sports" className="py-2 text-gray-700 hover:text-blue-500">Sports</Link>
        </nav>
      </div>
    </header>
  );
}
