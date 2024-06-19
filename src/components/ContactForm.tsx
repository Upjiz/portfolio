import FormContact from "./FormContact";
import { IoLogoInstagram } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { RaycastMagicLinkEmail } from "../emails/MagicLink";
import { resend } from "@/lib/resend";
const ContactForm = () => {
  const handleSubmit = async ({
    email,
    name,
    message,
  }: {
    email: string;
    name: string;
    message: string;
  }) => {
    "use server";
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "upizweb@gmail.com",
      subject: "Nouvelle entrée formulaire !",
      react: RaycastMagicLinkEmail({
        magicLink: "https://upizweb.com",
        message: message?.toString() ?? undefined,
        email: email?.toString() ?? undefined,
        name: name?.toString() ?? undefined,
      }),
    });
  };
  return (
    <div id="contact">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contactez moi ! 🚀
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Vous avez un projet de site web en tête ou des questions sur mes
              services ? Je suis là pour vous aider ! Je suis à votre écoute
              pour discuter de vos besoins et vous offrir des solutions
              personnalisées. Remplissez le formulaire ci-dessous et je vous
              répondrai dans les plus brefs délais.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <FormContact onSubmit={handleSubmit} />
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:upizweb@gmail.com" className="text-indigo-500">
                upizweb@gmail.com
              </a>
              <div className="flex items-center justify-center mt-4 gap-4">
                <a href="https://www.instagram.com/upizweb/">
                  <IoLogoInstagram size={24} />
                </a>
                <a href="mailto:upizweb@gmail.com">
                  <IoMailOutline size={24} />
                </a>
                <a href="https://twitter.com/upizweb">
                  <BsTwitterX size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
