"use client"
// import { useState } from "react";
// import { nanoid } from "nanoid";
// import BookList from "./BooksList";
import{ useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import "../app/globals.css"
// const genresData = [
//   { id: nanoid(), name: "Science Fiction", books: ["Book 1", "Book 2", "Book 3", "Book 4"] },
//   { id: nanoid(), name: "Mystery", books: ["Book 5", "Book 6", "Book 7", "Book 8"] },
//   { id: nanoid(), name: "Fantasy", books: ["Book 9", "Book 10", "Book 11", "Book 12"] },
//   { id: nanoid(), name: "Thriller", books: ["Book 13", "Book 14", "Book 15", "Book 16"] },
//   { id: nanoid(), name: "Romantic", books: ["Book 17", "Book 18", "Book 19", "Book 20"] },
//   { id: nanoid(), name: "Historical", books: ["Book 21", "Book 22", "Book 23", "Book 24"] },
//   { id: nanoid(), name: "Dramatic", books: ["Book 25", "Book 26", "Book 27", "Book 28"] },
//   { id: nanoid(), name: "Fantastic", books: ["Book 29", "Book 30", "Book 31", "Book 32"] },
// ];

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


  const product = { // Product Data
    id: 1,
    name: 'new macbook laptop',
    slug: 'new-luxury-laptop',
    photo: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1999,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!',
    images: [
      {
        src: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        src: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        src: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        src: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      // {
      //   src: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      // },
      {
        src: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      // {
      //   src: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      // },
      // {
      //   src: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      // },
      {
        src: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      // {
      //   src: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      // }
    ],
    colors: ["#2287fa", "#f71b1b", "green"],
    infos: [
      {
        title: "highlights",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni illum, sint explicabo esse temporibus! Dicta, voluptatum dolorem numquam deserunt, doloribus, voluptatem consequuntur praesentium deleniti nulla in repellendus eum vero."
      },
      {
        title: "materials",
        content: "materials"
      },
      {
        title: "how to use",
        content: "how to use"
      },
      {
        title: "pro tips",
        content: "pro tips"
      }
    ],
    discount: 20,
    sold: 52,
    category: 'laptop',
    brand: 'apple'
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <img src="${product.images[index].src}" alt="pagination-${index + 1}" class="w-8 h-8 object-cover">
        </span>`;
    },
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

      <div className='flex container mx-auto px-5 gap-9 mt-8'>
      <div className="mySwiper">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-2">${product.price}</p>
        <p className="text-gray-700 mt-4">{product.desc}</p>

        <div className="flex items-center mt-4">
          {product.colors.map((color, index) => (
            <div key={index} className="w-6 h-6 bg-gray-300 mr-2" style={{ backgroundColor: color }}></div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Product Information</h2>
          <ul>
            {product.infos.map((info, index) => (
              <li key={index} className="mb-2">
                <strong>{info.title}:</strong> {info.content}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-gray-700">
            <strong>Discount:</strong> {product.discount}%
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Sold:</strong> {product.sold} units
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Brand:</strong> {product.brand}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};


export default Header;