"use client"
import { useState } from "react";
import { nanoid } from "nanoid";
import BookList from "./BooksList";

const genresData = [
  { id: nanoid(), name: "Science Fiction", books: ["Book 1", "Book 2", "Book 3", "Book 4"] },
  { id: nanoid(), name: "Mystery", books: ["Book 5", "Book 6", "Book 7", "Book 8"] },
  { id: nanoid(), name: "Fantasy", books: ["Book 9", "Book 10", "Book 11", "Book 12"] },
  { id: nanoid(), name: "Thriller", books: ["Book 13", "Book 14", "Book 15", "Book 16"] },
  { id: nanoid(), name: "Romantic", books: ["Book 17", "Book 18", "Book 19", "Book 20"] },
  { id: nanoid(), name: "Historical", books: ["Book 21", "Book 22", "Book 23", "Book 24"] },
  { id: nanoid(), name: "Dramatic", books: ["Book 25", "Book 26", "Book 27", "Book 28"] },
  { id: nanoid(), name: "Fantastic", books: ["Book 29", "Book 30", "Book 31", "Book 32"] },
];

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hoverGenre, setHoverGenre] = useState(null);

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

  const handleGenreHover = (genre) => {
    setHoverGenre(genre);
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
                <li key={genre.id} onMouseEnter={() => handleGenreHover(genre)}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {hoverGenre && (
        <div className=" fixed top-0 right-0 bg-gray-800 bg-opacity-75 z-20 w-[83%] h-[99%] mt-14">
          <div className="container mx-auto p-4 bg-green-500 text-black h-full">
            <BookList books={hoverGenre.books} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
