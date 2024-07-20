import Link from "next/link";

const Timeline = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-5 py-20 rounded-3xl ">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Prise de contact
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Si ce n&apos;est pas déjà fait, cliquez sur le bouton ci dessous
              📧
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              La première étape est cruciale pour comprendre vos attentes et les
              spécificités de votre projet. Lors de cette prise de contact, nous
              discutons ensemble de vos objectifs, de l&apos;identité de votre
              marque, et des fonctionnalités que vous souhaitez intégrer à votre
              site. Nous vous demandons également les éléments graphiques et
              textuels nécessaires (logos, images, contenus, etc.) afin de
              commencer à travailler sur une base solide. Cette phase nous
              permet de définir clairement vos besoins et de poser les
              fondations de notre collaboration.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 me-2.5 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              Prendre contact
            </Link>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-300">
              Maquetage
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2e étape
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Une fois vos besoins bien définis, nous passons à la phase de
              maquetage. Nous créons une maquette visuelle de votre futur site
              web, qui sert de guide pour le design final. Cette maquette vous
              donne un aperçu de la structure et de l&apos;apparence de votre
              site, vous permettant de visualiser le résultat final avant même
              le début du développement. Nous prenons en compte vos préférences
              et nous nous assurons que le design est en adéquation avec votre
              identité visuelle et vos objectifs.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-300">
              Révision
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              3e étape
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Après la présentation de la maquette, nous entrons dans la phase
              de révision. C&apos;est à ce moment-là que vous avez
              l&apos;opportunité de donner votre feedback et de demander des
              modifications. Nous ajustons la maquette en fonction de vos
              retours pour nous assurer qu&apos;elle correspond parfaitement à
              vos attentes. Cette étape peut inclure plusieurs allers-retours
              jusqu&apos;à ce que vous soyez entièrement satisfait du design.
            </p>
          </li>
          <li className=" mt-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-300">
              Finalisation et formation
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              4e étape
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Une fois la maquette approuvée, nous procédons à la finalisation
              du site web. Cela inclut le développement complet du site,
              l&apos;intégration des contenus, et la mise en place des
              fonctionnalités demandées. Après les derniers tests et
              vérifications, votre site est prêt à être lancé. Nous vous offrons
              également une formation pour vous familiariser avec le système de
              gestion de contenu (CMS), vous permettant ainsi de gérer et mettre
              à jour votre site en toute autonomie. Nous restons à votre
              disposition pour toute assistance post-lancement.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
