// src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Navbar from "@/pageComponet/Navbar";
import Footer from "./pageComponet/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
     
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-sm">
        
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Optional footer */}
      <Footer />
    </div>
  );
}
