"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5" />
            <span className="font-bold tracking-tight">
              <Link className="text-[20px] font-sans" href="/" title="Reload | Web Page">Tutorials</Link>
            </span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm mr-60">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/docs" className="hover:text-blue-400 transition">Docs</Link>
          <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
          <Link href="https://github.com/kowitlungpan469/-Tutorials" target="_blank" className="hover:text-blue-400 transition">Github</Link>
          <Link href="https://discord.gg/Pp5rUVXYqf" target="_blank" className="hover:text-blue-400 transition">Discord Group</Link>
          <Link href="/feedback" className="hover:text-blue-400 transition">Feedback</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search Anything"
            className="bg-gray-900 border border-gray-700 text-sm px-3 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm transition">
            <Link href="/">Support</Link>
          </button>
          <button className="bg-white text-black hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm font-medium transition">
            <Link href="/dashboard">Login</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
