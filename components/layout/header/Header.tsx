"use client";
import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavbarData from "@/public/data/navbar-data";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";
import Logo from "public/images/logo.png";
import LogoLight from "public/images/logo-three.png";
import Search from "./Search";
import SidebarCart from "./SidebarCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  let logoSrc = Logo;

  const pathname = usePathname();
  if (pathname === "/index-five" || pathname === "/index-six") {
    logoSrc = LogoLight;
  }

  const handleCart = () => {
    setIsCartOpen(true);
  };

  const handleSearch = () => {
    setIsSearchOpen(true);
  };

  const handleOffCanvas = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    const parentItems = document.querySelectorAll(
      ".navbar__item--has-children"
    );

    parentItems.forEach((parentItem) => {
      const childItems = parentItem.querySelectorAll(".active-sub");

      if (childItems.length > 0) {
        parentItem.classList.add("active-parent");
      }
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className={"primary-navbar" + (scrolled ? " navbar-active" : " ")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__menu">
                    <ul className="navbar__list">
                    &#10029;&nbsp;&nbsp;Welcome to John Rashid Personal Website.&nbsp;&nbsp;&#10029;
                      {NavbarData.map((item, index) => {
                        return <MenuItem key={index} item={item} />;
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </header>
      <SidebarCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <OffcanvasInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;

// menu item
const MenuItem = ({ item }: any) => {
  const pathname = usePathname();
  return item.submenu ? (
    <li className="navbar__item navbar__item--has-children nav-fade">
      <button aria-label="dropdown menu" className="navbar__dropdown-label">
        {item.title}
      </button>
      <ul className="navbar__sub-menu">
        {item.submenu?.map((subItem: any, index: number) => {
          return (
            <Fragment key={index}>
              {subItem.subInSub ? (
                <SubDropdown subItem={subItem} key={index} />
              ) : (
                <li key={index}>
                  <Link
                    href={`${subItem.path}`}
                    className={pathname === subItem.path ? " active-sub" : " "}
                  >
                    {subItem.title}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </li>
  ) : (
    <li className="navbar__item nav-fade">
      <Link
        href={`${item.path}`}
        className={pathname === item.path ? " active-it" : " "}
      >
        {item.title}
      </Link>
    </li>
  );
};

// sub dropdown
const SubDropdown = ({ subItem }: any) => {
  const pathname = usePathname();
  return (
    <li className="navbar__item navbar__item--has-children">
      <button
        aria-label="dropdown menu"
        className="navbar__dropdown-label navbar__dropdown-label-sub"
      >
        {subItem.title}
      </button>
      <ul className="navbar__sub-menu navbar__sub-menu__nested">
        {subItem.subInSub?.map((subInSubItem: any, index: number) => (
          <li key={index}>
            <Link
              href={subInSubItem.path}
              className={pathname === subInSubItem.path ? " active-sub" : " "}
            >
              {subInSubItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
