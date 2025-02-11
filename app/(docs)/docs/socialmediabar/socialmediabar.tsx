'use client'

import SocialMediaBar from '@/components/luminaui/socialmediabar';
import { useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdHomeMax } from 'react-icons/md';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi';

export default function SocialMedia() {

  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const iconData = [
        {
          icon: <FaLinkedinIn />,
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/murtaza-khan-58a44a25a/",
        },
        {
          icon: <SiGithub />,
          name: "GitHub",
          url: "https://github.com/MurtazaKhannn",
        },
        {
          icon: <FaXTwitter />,
          name: "Twitter",
          url: "https://x.com/murtazakhan1910?t=RX_qTiCkEGTHTwNGziAgow&s=09",
        },
        {
          icon: <SiLeetcode />,
          name: "Leetcode",
          url: "https://leetcode.com/",
        },
        {
          icon: <MdHomeMax />,
          name: "Home",
          url: "/",
        },
        {
          icon: <WiMoonAltWaxingCrescent2 />,
          name: "Theme",
          url: "#",
          onClick: toggleTheme,
        },
      ];

  return <SocialMediaBar iconData={iconData} />;
}
