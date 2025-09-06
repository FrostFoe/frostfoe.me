"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchModal = dynamic(() => import("@layouts/partials/SearchModal"), {
  ssr: false,
});

const Header = () => {
  const { main } = menu;

  const [navFixed, setNavFixed] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-body py-2 transition-all ${
          navFixed ? "shadow" : "pt-4 md:pt-8"
        }`}
      >
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0">
            <Logo />
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center md:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          </label>
          {/* /navbar toggler */}

          <ul
            id="nav-menu"
            className="navbar-nav order-3 hidden w-full md:order-1 md:flex md:w-auto md:space-x-2"
          >
            {main.map((menu, i) => (
              <li key={`menu-${i}`} className="nav-item">
                <Link href={menu.url} className="nav-link block">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="order-1 ml-auto md:order-2 md:ml-0">
            <div
              className="cursor-pointer p-2 text-dark hover:text-primary"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <Search className="h-6 w-6" />
            </div>
          </div>

          <SearchModal
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
