import { CgWebsite } from "react-icons/cg";

const features = [
  {
    name: "Création de sites web vitrine",
    description:
      "Des sites vitrines élégants et fonctionnels pour mettre en valeur votre entreprise en ligne.",
    icon: CgWebsite,
  },
  {
    name: "Création de site e-commerce",
    description:
      "Des sites e-commerce intuitifs et sécurisés pour booster vos ventes en ligne.",
    icon: CgWebsite,
  },
  {
    name: "Solution de gestion facture, devis, clients avec Notion",
    description:
      "Configuration de Notion pour centraliser et simplifier la gestion de vos factures, devis et clients.",
    icon: CgWebsite,
  },

  {
    name: "Refonte site internet existant",
    description:
      "Modernisation et optimisation de votre site existant pour améliorer son design et ses performances.",
    icon: CgWebsite,
  },
  {
    name: "Maintenance de site web",
    description:
      "Prise en charge de la maintenance de votre site pour assurer son bon fonctionnement et sa sécurité.",
    icon: CgWebsite,
  },
];

export default function Service() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Mes Services Web
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez une gamme complète de services web pour répondre à tous
            vos besoins en ligne, de la création à la maintenance de votre site.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
