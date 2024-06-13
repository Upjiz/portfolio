import React from "react";
import PricingCard from "@/components/ui/PricingCard";

const Pricing = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-center text-indigo-600">
            Tarifs
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
            Différentes offres selon vos projets
          </h1>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-6 mx-auto md:grid-cols-3 mt-14 md:gap-9">
          {/* Debut Card 1 */}
          <div className="overflow-hidden bg-white border-2 border-transparent rounded-md">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">
                Site web vitrine
              </h3>
              <p className="mt-2.5 text-sm text-gray-600">
                Présentez votre entreprise avec un site vitrine élégant et
                moderne, idéal pour renforcer votre image de marque et attirer
                de nouveaux clients.
              </p>

              <div className="flex items-end mt-5">
                <div className="flex items-end">
                  <span className="ml-0.5 text-lg text-gray-600">
                    {" "}
                    A partir de :{" "}
                  </span>
                  <p className=" ml-2 text-6xl font-medium tracking-tight">
                    799
                  </p>
                  <span className="text-xl font-medium text-black"> € </span>
                </div>
              </div>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role=""
              >
                Choisir cette offre
              </a>

              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    10 pages{" "}
                  </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Nom de domaine & Hébergement offert pendant 1 an{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Design personnalisé{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Optimisation SEO{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    6 mois de support offert{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Fin Card 1 */}
          {/* Debut Card 2 */}
          <div className="overflow-hidden bg-white border-2 border-transparent rounded-md">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">
                Site E-commerce
              </h3>
              <p className="mt-2.5 text-sm text-gray-600">
                Vendez en ligne avec une boutique e-commerce optimisée pour le
                SEO, sécurisée et facile à gérer. Transformez vos visiteurs en
                clients fidèles.
              </p>

              <div className="flex items-end mt-5">
                <div className="flex items-end">
                  <span className="ml-0.5 text-lg text-gray-600">
                    {" "}
                    A partir de :{" "}
                  </span>
                  <p className=" ml-2 text-6xl font-medium tracking-tight">
                    1199
                  </p>
                  <span className="text-xl font-medium text-black"> € </span>
                </div>
              </div>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role=""
              >
                Choisir cette offre
              </a>

              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    15 produits{" "}
                  </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Intégration paiment sécurisé{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Configuration méthode de livraison{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Nom de domaine & hébergement offert pendant 1 an{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    6 mois support offert{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Fin Card 2 */}
          {/* Debut Card 3 */}

          <div className="overflow-hidden bg-white border-2 border-transparent rounded-md">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">100% dev</h3>
              <p className="mt-2.5 text-sm text-gray-600">
                Optez pour un site entièrement personnalisé avec notre service
                de développement sur-mesure. Solutions uniques, performantes et
                adaptées à vos besoins spécifiques.
              </p>

              <div className="flex items-end mt-5">
                <div className="flex items-end">
                  <span className="ml-0.5 text-lg text-gray-600">
                    {" "}
                    A partir de :{" "}
                  </span>
                  <p className="text-6xl ml-2 font-medium tracking-tight">
                    2399
                  </p>
                  <span className="text-xl font-medium text-black"> € </span>
                </div>
              </div>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role=""
              >
                Choisir cette offre
              </a>

              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Conception sur mesure{" "}
                  </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Utilisation de frameworks modernes (React, Vue.js, Angular){" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Développement de fonctionnalités spécifiques (systèmes de
                    réservation, e-commerce, etc.){" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Structure du site optimisée pour le référencement{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Connexion avec des API tierces (services de paiement, CRM,
                    etc.){" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Fin Card 3 */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
