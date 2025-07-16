"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Placeholder */}
      <header className="py-6 px-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-orange-600">Krishna Gopal Rathi</span>
        <nav className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
          <Link href="/projects" className="text-gray-700 hover:text-orange-600 font-medium">Projects</Link>
          <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium">Blog</Link>
          <Link href="/resume" className="text-gray-700 hover:text-orange-600 font-medium">Resume</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Krishna Gopal Rathi
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-xl md:text-2xl font-medium text-orange-600 mb-6">
          <span className="animate-pulse">Building with code and empathy.</span>
        </motion.p>
        <div className="flex gap-4 mb-8 justify-center">
          <Link href="/resume" className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-orange-700 transition">Resume</Link>
          <a href="mailto:your.email@gmail.com" className="bg-white text-orange-600 border border-orange-600 px-6 py-2 rounded-lg font-semibold shadow hover:bg-orange-50 transition">Contact</a>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 min-w-[160px]">
            <div className="text-3xl font-bold text-orange-600">100k+</div>
            <div className="text-gray-600 dark:text-gray-300">Lines of Code</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 min-w-[160px]">
            <div className="text-3xl font-bold text-orange-600">5</div>
            <div className="text-gray-600 dark:text-gray-300">Startups</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 min-w-[160px]">
            <div className="text-3xl font-bold text-orange-600">2</div>
            <div className="text-gray-600 dark:text-gray-300">Hackathon Wins</div>
          </div>
        </motion.div>
      </main>
      {/* Footer Placeholder */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Krishna Gopal Rathi. All rights reserved.
      </footer>
    </div>
  );
}
