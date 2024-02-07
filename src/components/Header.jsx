"use client"
import { useState } from "react";
import { nanoid } from "nanoid";

const genresData = [
  { id: nanoid(), name: "Science Fiction" },
  { id: nanoid(), name: "Mystery" },
  { id: nanoid(), name: "Fantasy" },
  { id: nanoid(), name: "Thriller" },
  { id: nanoid(), name: "Romantic" },
  { id: nanoid(), name: "Historical" },
  { id: nanoid(), name: "Dramatic" },
  { id: nanoid(), name: "Fantastic" },
];

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    toggleSidebar();
  };

  return (
    <div className="relative">
      <header className="bg-gray-800 p-4 relative z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-white">LOGO</p>
            <button onClick={handleButtonClick} className="text-white focus:outline-none ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div onClick={closeSidebar} className="fixed top-0 left-0 bg-gray-800 bg-opacity-75 z-20 w-[250px] h-[99%] mt-14">
          <div className="container mx-auto p-4 bg-yellow-500 text-black h-full">
            <ul className="grid gap-2">
              {genresData.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
