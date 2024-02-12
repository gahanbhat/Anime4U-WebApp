import React from "react";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-neutral-700 bg-neutral-800 rounded-b-lg border-b-4  text-sm py-6 sm:py-0 ">
      <nav
        class="relative max-w-7xl w-full mx-auto py-7 flex items-center justify-center sm:px-6 lg:px-2"
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 items-center ">
          <img className="w-12  drop-shadow-md " src={Logo} alt="Anime logo" />
          <div class="flex items-center justify-between">
            <a
              class="flex-none text-5xl  text-amber-400 drop-shadow-md "
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
