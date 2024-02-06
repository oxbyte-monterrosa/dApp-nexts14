// Navbar.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';
import { navLinks } from '@/constants';
import { ConnectButtomCustom } from '@/components';
import styles from '@/CustomStyles';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('Home');

  return (
        <div className="sticky z-50 top-0 inset-x-0 h-16 xl:max-w-[1280px] w-full sm:px-16 px-26 bg-primary">
          <header className="relative">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={132} height={32} />
                  </Link>
                </div>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-dimWhite'
                      } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center ml-10">
                  <ConnectButtomCustom />
                </div>
              </div>
            </div>
          </header>
        </div>
  );
};

export default Navbar;
