import React, { useState, useEffect } from "react";
import logo from "../../assets/haywaylogo2.png";
import { Collapse, Dropdown, Ripple, initTWE } from "tw-elements";
import "./Navbar.css";
import { useLocation } from 'react-router-dom';
import logo2 from "../../assets/logo2blanco.png"


const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    initTWE({ Collapse, Dropdown, Ripple });
  }, []);

  return (
    <div className="navContainer">
      <nav
        className="bgnav relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 position:fixed"
        data-twe-navbar-ref
        style={{
          position: "fixed",
          zIndex: "100",
        }}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3 gap-8">
          <div className="ms-2">
            <img src={logo2} alt="" width="100px" />
          </div>
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li
                className="texto my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/" ? "textoverde" : ""
                  }`}
                  aria-current="page"
                  href={`/`}
                  data-twe-nav-link-ref
                >
                  Inicio
                </a>
              </li>

              <li
                className="text mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/nosotros" ? "textoverde" : ""
                  }`}
                  href={`/nosotros`}
                  data-twe-nav-link-ref
                >
                  Nosotros
                </a>
              </li>
              <li
                className="text mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/centro" ? "textoverde" : ""
                  }`}
                  href={`/centro`}
                  data-twe-nav-link-ref
                >
                  Centro de Investigación <br />y Desarrollo
                </a>
              </li>
              <li
                className="text my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
                data-twe-dropdown-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/informacion" ? "textoverde" : ""
                  }`}
                  href={`/informacion`}
                  type="button"
                  id="dropdownMenuButton1"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                  data-twe-nav-link-ref
                >
                  Información
                  <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div
                  class="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding data-[twe-dropdown-show]:block dark:bg-surface-dark"
                  aria-labelledby="dropdownMenuButton1"
                  data-twe-dropdown-menu-ref
                >
                  <div class="px-6 py-5 lg:px-8">
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <p class="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white">
                          Plantas
                        </p>
                        <a
                          href={`/hojas`}
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Hojas
                        </a>
                        <a
                          href={`/`}
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Amet consectetur
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Adipisicing elit
                        </a>
                      </div>
                      <div>
                        <p class="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white">
                          Explit voluptas
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Perspiciatis quo
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Laudantium maiores
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Provident dolor
                        </a>
                      </div>
                      <div>
                        <p class="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white">
                          Iste quaerato
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Est iure
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Praesentium
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Laboriosam
                        </a>
                      </div>
                      <div>
                        <p class="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white">
                          Cras justo odio
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Saepe
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Vel alias
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Sunt doloribus
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          class="block w-full bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        >
                          Cum dolores
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="text mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/legales" ? "textoverde" : ""
                  }`}
                  href={`/legales`}
                  data-twe-nav-link-ref
                >
                  Legales
                </a>
              </li>
              <li
                className="text mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/colaboraciones" ? "textoverde" : ""
                  }`}
                  href={`/colaboraciones`}
                  data-twe-nav-link-ref
                >
                  Colaboraciones
                </a>
              </li>
              <li
                className="text mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className={`texto p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ${
                    location.pathname === "/contacto" ? "textoverde" : ""
                  }`}
                  href={`/contacto`}
                  data-twe-nav-link-ref
                >
                  Contacto
                </a>
              </li>
              {/* <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-link-ref
              >
                <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
