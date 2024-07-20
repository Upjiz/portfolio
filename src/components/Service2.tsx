import { RiNotionFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";

import { FaPaintBrush } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import { SiMinutemailer } from "react-icons/si";

const iconRender = (val: string) => {
  const icons: { [key: string]: JSX.Element } = {
    notion: <RiNotionFill />,
    vitrine: <BsGraphUpArrow />,
    ecommerce: <FaCreditCard />,
    brush: <FaPaintBrush />,
    setting: <IoMdSettings />,
    mail: <SiMinutemailer />,
  };

  return icons[val] || null;
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
        {iconRender(icon)}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-[#4F46E5]/80 rounded-full" />
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Création de sites web vitrine",
    description:
      "Des sites vitrines élégants et fonctionnels pour mettre en valeur votre entreprise en ligne.",
    icon: "vitrine",
  },
  {
    id: 2,
    title: "Création de site e-commerce",
    description:
      "Des sites e-commerce intuitifs et sécurisés pour booster vos ventes en ligne.",
    icon: "ecommerce",
  },
  {
    id: 3,
    title: "Solution de gestion facture, devis, clients avec Notion",
    description:
      "Configuration de Notion pour centraliser et simplifier la gestion de vos factures, devis et clients.",
    icon: "notion",
  },
  {
    id: 4,
    title: "Refonte site internet existant",
    description:
      "Modernisation et optimisation de votre site existant pour améliorer son design et ses performances.",
    icon: "brush",
  },
  {
    id: 5,
    title: "Maintenance de site web",
    description:
      "Prise en charge de la maintenance de votre site pour assurer son bon fonctionnement et sa sécurité.",
    icon: "setting",
  },
  {
    id: 6,
    title: "Email marketing",
    description:
      "Boostez vos ventes et engagez votre audience avec notre service de mail marketing automatisé.",
    icon: "mail",
  },
];
const Services = () => {
  return (
    <section className="py-20  dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-6">
            Mes Services Web
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Tout ce dont vous avez besoins.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Découvrez une gamme complète de services web pour répondre à tous
            vos besoins en ligne, de la création à la maintenance de votre site.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
