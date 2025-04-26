import React, { useRef, useState, useEffect } from 'react';
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { MdImageNotSupported } from "react-icons/md";
import gsap from 'gsap';

const StickyNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navR = useRef(null);

  const navItems = [
    { icon: <GoHomeFill />, label: 'Home', path: 'home' },
    { icon: <FaSearch />, label: 'Search', path: 'browse' },
    { icon: <SiYoutubekids />, label: 'Kids', path: 'kids' },
    { icon: <MdImageNotSupported />, label: 'Media', path: 'support' },
    { icon: 'FAQ', label: 'FAQ', path: 'faq' }
  ];

  useEffect(() => {
    if (navR.current) {
      gsap.fromTo(
        navR.current,
        { x: -100, opacity: 0 },
        { x: 0, duration: 0.8, opacity: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div
      ref={navR}
      className="fixed top-0 left-0 h-screen w-[80px] backdrop-blur-3xl z-50 flex flex-col items-center py-10 gap-12 shadow-xl"
    >
      {navItems.map((val, ind) => (
        <a
          href={`/${val.path}`}
          key={ind}
          onClick={() => setActiveIndex(ind)}
          className={`text-2xl transition-colors duration-300 ${
            activeIndex === ind ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {val.icon}
        </a>
      ))}
    </div>
  );
};

export default StickyNav;
