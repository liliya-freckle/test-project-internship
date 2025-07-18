import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header  className="bg-gray-500 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          MyApp
        </Link>
      </div>
    </header>
  )
}

export default Header