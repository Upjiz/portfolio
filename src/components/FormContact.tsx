"use client";

import { useState } from "react";

type SubmitHandler = (data: {
  email: string;
  name: string;
  message: string;
}) => void;

const FormContact = ({ onSubmit }: { onSubmit: SubmitHandler }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email")?.toString() ?? "";
    const name = formData.get("name")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    await onSubmit({ email, name, message });

    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap -m-2 ">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >
              Nom
            </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        {isSubmitted && (
          <div className="p-2 w-full text-center text-green-500">
            Votre message a bien été envoyé !
          </div>
        )}
        <div className="p-2 w-full">
          <button
            type="submit"
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
