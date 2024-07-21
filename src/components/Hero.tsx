"use client";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  return (
    <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40 dark:bg-gray-950">
      <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
        <div className="flex items-center min-w-max">
          <Link href="#" className="font-semibold flex items-center gap-x-2">
            <span className="text-lg text-gray-700 dark:text-gray-300">
              <Image
                className=""
                src="/Logo.png"
                alt="UpizWeb"
                width={100}
                height={30}
              />
            </span>
          </Link>
        </div>
        <div
          className={`
                absolute top-full  left-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none lg:w-max lg:space-x-16 lg:top-0 lg:relative  lg:flex duration-300 lg:transition-none ease-linear
                ${
                  openNavbar
                    ? "translate-y-0 opacity-0 visible"
                    : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
                }
            `}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
            <li>
              <Link
                href="https://instagram.com/upizweb"
                className="px-2 transition-colors  py-2.5 hover:text-[#4F46E5] "
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://thread.com/upizweb"
                className="px-2 transition-colors  py-2.5 hover:text-[#4F46E5] "
              >
                <FaSquareThreads />
              </Link>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
            <Link
              href="#contact"
              className="flex items-center justify-center w-full sm:w-auto h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-[#4F46E5] dark:text-gray-300 border border-gray-200 dark:border-gray-800"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => {
              toggleNavbar();
            }}
            aria-label="Toggle navbar"
            className="outline-none border-l border-l-gray-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex"
          >
            <span
              aria-hidden="true"
              className={`
                                    h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                    ${
                                      openNavbar
                                        ? "rotate-45 translate-y-[0.33rem]"
                                        : ""
                                    }
                                `}
            />
            <span
              aria-hidden="true"
              className={`
                                    mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                    ${
                                      openNavbar
                                        ? "-rotate-45 -translate-y-[0.33rem]"
                                        : ""
                                    }
                                `}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="min-h-max  dark:bg-gray-950">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-[#4F46E5] to-violet-400 rounded-full opacity-50 blur-2xl"></div>
        <div className="relative mx-auto pt-32 pb-24 mt-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
          <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-6xl/tight">
            Elevez votre présence en ligne
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
            Votre partenaire de confiance pour la création de sites web sur
            mesure et l&apos;accompagnement de vos projets digitaux. Nous
            allions créativité et expertise technique pour donner vie à votre
            présence en ligne. Ensemble, faisons de vos idées une réalité
            concrète et performante.
          </p>
          <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
            <Link
              href="#contact"
              className="flex items-center h-12 px-6 rounded-full mb-2 bg-[#4F46E5] text-white border border-purple-600"
            >
              Contactez moi 🚀
            </Link>
          </div>
          <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
            <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0 ">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                  30+
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Plus de 30 clients satisfaits partout en France 🇫🇷
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-gray-900 dark:text-white mb-2 font-semibold text-lg">
                  Mes outils de travail
                </h2>
                <div className="text-sm font-normal mt-2 flex gap-3 ">
                  <Image
                    title="Shopify"
                    src={"/Shopify.svg"}
                    alt="Shopify"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    title="Wordpress"
                    src={"/Wordpress.svg"}
                    alt="Shopify"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    title="NextJS"
                    src={"/NextJS.svg"}
                    alt="Shopify"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    title="Notion"
                    src={"/Notion.svg"}
                    alt="Shopify"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    title="Tailwind"
                    src={"/Tailwindcss.svg"}
                    alt="Shopify"
                    width={25}
                    height={25}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                  Suivi personalisé
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Un suivis personnalisé et une attention particulière pour
                  chacun de mes projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

console.log(
  "%cCodé avec amour par UpizWeb",
  "font-size:20px;color:#ff0000;background-color:black;display:inline-block;padding:5px 10px; border-radius:50px; border:2px solid #ff0000;"
);
