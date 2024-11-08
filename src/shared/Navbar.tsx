import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [state, setState] = useState(false); // For the mobile menu
    const [dropdown, setDropdown] = useState(false); // For the avatar dropdown menu
    const [isScrolled, setIsScrolled] = useState(false); // For scroll behavior
  
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true); // Scroll past 80px, navbar style changes
      } else {
        setIsScrolled(false);
      }
    };
  
    // Add scroll event listener when component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Toggle the dropdown visibility
    const toggleDropdown = () => setDropdown(!dropdown);
  
    // Replace javascript:void(0) path with your path
    const navigation = [
      { title: 'Customers', path: 'javascript:void(0)' },
      { title: 'Careers', path: 'javascript:void(0)' },
      { title: 'Guides', path: 'javascript:void(0)' },
      { title: 'Partners', path: 'javascript:void(0)' },
    ];
  return (
    <div><nav className="bg-[#004B6B] text-white w-full border-b md:border-0 md:static">
    <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        <a href="javascript:void(0)">
       {/*    <img
            src="https://www.floatui.com/logo.svg"
            width={120}
            height={50}
            alt="Logo"
          /> */}
          EduQuran
        </a>
        <div className="md:hidden">
          <button
            className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          state ? 'block' : 'hidden'
        }`}
      >
        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => {
            return (
              <li key={idx} className="text-white  hover:text-[#F4C542] transition duration-30">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:inline-block relative">
        {/* Avatar and Dropdown */}
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 text-white hover:text-indigo-600"
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png" // Replace with actual avatar URL
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 7l7 7 7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </nav></div>
  )
}
