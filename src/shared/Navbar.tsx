import React, { useEffect, useState } from 'react'

interface routerName{
    title:string,
    path:string

}
export const Navbar = () => {
    const [state, setState] = useState<boolean>(false); // For the mobile menu
    const [dropdown, setDropdown] = useState<boolean>(false); // For the avatar dropdown menu
    const [isScrolled, setIsScrolled] = useState<boolean>(false); // For scroll behavior
  
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
    const handleAvatarClick = () => {
      setDropdown(!dropdown);  // Toggle dropdown visibility
    };
    // Toggle the dropdown visibility
    const toggleDropdown = () => setDropdown(!dropdown);
  
    // Replace javascript:void(0) path with your path
    const navigation:routerName[] = [
      { title: 'Home', path: '/' },
      { title: 'Ebtedaye', path: '/ebtedaye' },
      { title: 'Dakhil', path: 'Dakhil' },
      { title: 'Contact', path: 'javascript:void(0)' },
    ];
  return (
    <div>

 
<div className="bg-[#004B6B] text-white">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/images/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            {navigation.map((item, idx) => (
              <li className="text-gray-200" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
            <li>
              {/* Avatar */}
              <div className="relative">
                <button
                  onClick={handleAvatarClick}
                  className="flex items-center text-gray-200"
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/22.jpg"  // Replace with actual avatar image
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                    <ul className="py-2">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="block px-4 py-2 text-sm"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <button
                        
                          className="block px-4 py-2 text-sm w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One page Template for
            <span className="text-indigo-400"> Digital agency</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12 lg:w-full"
          />
        </div>
      </section>
    </div>
  
     </div>
  )
}
