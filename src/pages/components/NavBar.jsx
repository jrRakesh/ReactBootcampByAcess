import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();

   

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-serif font-bold text-green-800 dark:text-white">
            Don's Blogs
          </span>
        </a>

        {/* Button Group */}
        <div onClick={() => {
    navigate("/create/blog");}} className="flex items-center lg:order-2">
          <a
            className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Create New Blog
          </a>
          <button
            
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-gray-800 dark:text-white">
            {['Home', 'Company', 'Marketplace', 'Features', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-green-800 lg:p-0 dark:text-gray-300 dark:hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
