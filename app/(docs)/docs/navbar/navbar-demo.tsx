'use client';
import { useState, useEffect } from 'react';
import { SunMoon, BellDot, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const userDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      } px-6 bg-white/10 backdrop-blur-md z-50 rounded-b-xl`}
    >
      <div className="flex items-center justify-between mx-auto w-full max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center gap-4 z-10">
          <img
            src="https://i.ibb.co/0cgtyj9/logomain.png"
            width={40}
            height={40}
            alt="logo"
            className="rounded-lg animate-pulse"
          />
          <h1 className="text-white text-2xl font-bold tracking-wider">Lumina UI</h1>
        </div>

        {/* Center Navigation Menu */}
        <div className="hidden lg:flex gap-8 items-center z-10">
          {[
            { label: 'Products', items: ['New Arrivals', 'Best Sellers', 'Discounts'] },
            { label: 'Analytics', items: ['Overview', 'Sales Report', 'User Insights'] },
            { label: 'Settings', items: ['Profile', 'Account', 'Privacy'] },
          ].map((menu) => (
            <div className="relative group" key={menu.label}>
              <button
                onClick={() => toggleDropdown(menu.label)}
                className="text-white flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-white/10 transition duration-200"
              >
                {menu.label}
                <ChevronDown
                  className={`w-4 h-4 ${
                    activeDropdown === menu.label ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                />
              </button>
              <div
                className={`absolute mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg py-2 z-10 transition-all duration-200 ${
                  activeDropdown === menu.label
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {menu.items.map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 z-10">
          {/* Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <SunMoon className="w-5 h-5 text-white cursor-pointer hover:animate-pulse transition-all duration-300" />
            <BellDot className="w-5 h-5 text-white cursor-pointer hover:animate-pulse transition-all duration-300" />
          </div>

          {/* User Profile */}
          <div className="relative group">
            <button onClick={userDropdownToggle} className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/G2ZwZHB/x8aaxbjh8r6a1-modified.png"
                alt="Avatar"
                className="w-9 h-9 rounded-full object-cover border-2 border-white/30 group-hover:border-white/70 transition-all duration-200"
              />
              <div className="hidden md:block text-left">
                <h1 className="text-white font-medium">Tony Stark</h1>
                <p className="text-sm text-gray-400">starktony@gmail.com</p>
              </div>
              <ChevronDown className="text-white group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div
              className={`absolute right-0 top-12 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg py-2 z-10 transition-all duration-200 ${
                isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition duration-200">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition duration-200">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition duration-200">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
