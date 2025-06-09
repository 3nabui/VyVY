"use client"

import { useState } from "react"
import Link from "next/link"
import VideoGallery from "./components/VideoGallery"

type WorkCategory = "wedding" | "tvc" | "recap"

interface VideoData {
  id: string
  title: string
  embedId: string
}

const videoData: Record<WorkCategory, VideoData[]> = {
  wedding: [
    {
      id: "1",
      title: "Sarah & Michael's Wedding",
      embedId: "8HfbCMKrNQw",
    },
    {
      id: "2",
      title: "Emma & James Wedding Highlights",
      embedId: "MFDup8oo8JE",
    },
    {
      id: "3",
      title: "Garden Wedding Ceremony",
      embedId: "sMZ4bANrnyg",
    },
    {
      id: "4",
      title: "Beach Wedding Special",
      embedId: "ekq6Dd5eR18",
    },
    {
      id: "5",
      title: "Beach Wedding Special",
      embedId: "x4dPA6dQ6K4",
    },
  ],
  tvc: [
    {
      id: "6",
      title: "Brand Commercial - Tech Startup",
      embedId: "cjChNhR7BcI",
    },
    {
      id: "7",
      title: "Product Launch Campaign",
      embedId: "nBvXUCakE1U",
    },
    {
      id: "8",
      title: "Corporate Brand Story",
      embedId: "xvyohA0EoxA",
    },
    {
      id: "9",
      title: "Fashion Brand Commercial",
      embedId: "fyJGKMrgarY",
    },
    {
      id: "10",
      title: "Fashion Brand Commercial",
      embedId: "8kvvhxEXJ8s",
    },
    {
      id: "11",
      title: "Fashion Brand Commercial",
      embedId: "4zHrs4BNpKs",
    },
  ],
  recap: [
    {
      id: "12",
      title: "2023 Year in Review",
      embedId: "n2_h6csw-F8",
    },
    {
      id: "13",
      title: "Event Recap - Music Festival",
      embedId: "rsortqct0x0",
    },
    {
      id: "14",
      title: "Conference Highlights",
      embedId: "VH4NMVdFXwE",
    },
    {
      id: "15",
      title: "Behind the Scenes Recap",
      embedId: "-K7d_IJbPqY",
    },
  ],
}

export default function RecentWorks() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("wedding")

  const categories = [
    { key: "wedding" as const, label: "Wedding", description: "Beautiful wedding ceremonies and celebrations" },
    { key: "tvc" as const, label: "TVC", description: "Television commercials and brand campaigns" },
    { key: "recap" as const, label: "Recap", description: "Event highlights and behind-the-scenes content" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 opacity-40 animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 opacity-40 animate-bounce animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-500 opacity-40 animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-500 opacity-40 animate-bounce animation-delay-3000"></div>

        {/* Floating lines */}
        <div className="absolute top-1/3 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/recent-works" className="text-gray-700 hover:text-gray-900 transition-colors">
                Recent Works
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Recent Works
          </h1>
          <p className="text-xl text-gray-600 mb-8">Explore my latest video productions and creative projects</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 inline-block shadow-lg">
            <p className="text-lg text-gray-700 font-medium">
              {categories.find((cat) => cat.key === activeCategory)?.description}
            </p>
          </div>
        </div>

        {/* Video Gallery */}
        <VideoGallery videos={videoData[activeCategory]} />
      </main>
    </div>
  )
}
