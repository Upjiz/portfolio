const PricingCard = (
  title: string,
  description: string,
  price: number,
  feature1: string,
  feature2: string,
  feature3: string,
  feature4: string,
  feature5: string
) => {
  return (
    <div className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-md">
      <div className="p-6 md:py-8 md:px-9">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2.5 text-sm text-gray-600">{description}</p>

        <div className="flex items-end mt-5">
          <div className="flex items-start">
            <p className="text-6xl font-medium tracking-tight">{price}</p>
            <span className="text-xl font-medium text-black"> € </span>
          </div>
          <span className="ml-0.5 text-lg text-gray-600 hidden"> / month </span>
        </div>

        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-gray-900 transition-all duration-200 bg-transparent border-2 rounded-full border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white focus:text-white focus:bg-fuchsia-600"
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
              {feature1}{" "}
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
              {feature2}{" "}
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
              {feature3}{" "}
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
            <del className="text-base font-medium text-gray-400">
              {" "}
              {feature4}{" "}
            </del>
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
            <del className="text-base font-medium text-gray-400">
              {" "}
              {feature5}{" "}
            </del>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
