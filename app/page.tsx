import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Play,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500 opacity-30 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-500 opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-indigo-500 opacity-30 animate-float animation-delay-3000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/recent-works"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Recent Works
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Profile Image with enhanced styling */}
              <div className="mb-8 relative">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="rounded-full mx-auto shadow-2xl relative z-10 border-4 border-white w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Huỳnh Vy
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
                Creative Video Editor & Videographer
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">4+ Years</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold text-gray-800">
                    15+ Clients
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <Play className="h-6 w-6 text-pink-600" />
                  <span className="font-semibold text-gray-800">
                    100+ Videos
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/recent-works"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>View My Work</span>
                <Play className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experience Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Possess over 2 years of experience in editing diverse types of videos such as TV commercials, wedding videos, event recaps, and corporate films.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Skilled in creating diverse motion graphics and animations using Adobe After Effects.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Capable of performing professional color grading with DaVinci Resolve to enhance video quality and visual storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-lg font-semibold text-gray-900">
                      0339 603 512
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Hynhvyyy@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Follow My Journey
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/quy.nguyen.927758"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Facebook className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/hsea_yv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Instagram className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
