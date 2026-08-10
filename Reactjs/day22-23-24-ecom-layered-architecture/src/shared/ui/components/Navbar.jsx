import React, { useState } from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart, ClipboardList, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-red-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/main"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
              <Box className="h-5 w-5 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight text-white">
              Shop<span className="text-red-500">Kart</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <NavLink to="/main" className={navLinkClass} end>
              Home
            </NavLink>

            <NavLink to="/main/product" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/main/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink
              to="/main/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </NavLink>

            <NavLink
              to="/main/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <ClipboardList className="h-4 w-4" />
              Orders
            </NavLink>

            <button
              type="button"
              className="ml-3 rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-800 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink to="/main" onClick={closeMenu} className={navLinkClass} end>
                Home
              </NavLink>

              <NavLink
                to="/main/product"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Shop
              </NavLink>

              <NavLink
                to="/main/about"
                onClick={closeMenu}
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/main/cart"
                onClick={closeMenu}
                className={navLinkClass}
              >
                <span className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Cart
                </span>
              </NavLink>

              <NavLink
                to="/main/orders"
                onClick={closeMenu}
                className={navLinkClass}
              >
                <span className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Orders
                </span>
              </NavLink>

              <button
                type="button"
                className="mt-3 w-full rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
