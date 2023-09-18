import React from "react";

export const Navbar = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full    border-transparent  bg-gradient-to-b from-teal-100     text-sm py-6 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        class="relative max-w-7xl w-full mx-auto py-7 sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-2"
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 items-center ">
          <img
            className="w-14 drop-shadow-md "
            src="src\assets\logo.png"
            alt="Anime logo"
          />
          <div class="flex items-center justify-between">
            <a
              class="flex-none text-5xl  dark:text-white drop-shadow-md"
              href="#"
              aria-label="Brand"
            >
              nime4U
            </a>
            <div class="flex items-center justify-between"></div>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        ></div>
      </nav>
    </header>
  );
};
