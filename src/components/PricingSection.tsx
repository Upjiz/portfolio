import { IoIosCheckboxOutline } from "react-icons/io";

function FeatureItem({ text }: { text: string }) {
  return (
    <>
      <div className="inline-flex items-center justify-start gap-3">
        <IoIosCheckboxOutline className="stroke-blue-600" />
        <p className="text-sm">{text}</p>
      </div>
    </>
  );
}

function PricingCard({
  theme,
  name,
  description,
  price,

  features,
}: {
  theme: string;
  name: string;
  description: string;
  price: string;

  features: string[];
}) {
  return (
    <div
      className={`flex max-w-md flex-1 flex-col items-start justify-between gap-16 overflow-hidden rounded-2xl border border-slate-200 p-6 md:min-h-[520px] md:gap-12 ${
        theme === "dark"
          ? "bg-slate-950 text-white border-transparent"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="inline-flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="text-lg font-semibold text-[#1C4ED8] underline">
            {name}
          </p>
          <p className="text-sm leading-tight">{description}</p>
        </div>
        <div
          className={`flex flex-col gap-6 ${
            theme === "dark" ? "text-white" : "text-slate-600"
          }`}
        >
          <div className="flex flex-col items-start justify-start gap-4">
            {features.map((text) => (
              <FeatureItem key={text} text={text} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6">
        <p className="inline-flex items-end justify-start gap-2">
          <div className="flex items-center">
            <span className="text-sm font-semibold ">A partir de : </span>
          </div>
          <span className="text-center text-5xl font-medium">{price}</span>
          <span
            className={`text-sm leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-600"
            }`}
          ></span>
        </p>
        <button className="w-full rounded-full bg-blue-600 px-4 py-2 text-white">
          Choisir
        </button>
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <div className=" rounded-3xl mx-10">
      <section className="flex flex-col items-center gap-12  2xl:py-16  m-auto w-full  sm:px-8 lg:px-16 xl:px-32 max-w-screen-xl mx-auto px-8 py-20 rounded-3xl mb-4">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-4xl underline font-semibold text-white">
            Tarifs
          </h2>
          <p className="text-sm text-slate-600">
            Découvrez nos offres adaptées à vos besoins. Que vous ayez besoin
            d&apos;un site vitrine élégant, d&apos;une boutique en ligne
            performante ou d&apos;un développement web sur-mesure, nous avons la
            solution parfaite pour vous. Choisissez le forfait qui correspond le
            mieux à vos objectifs et faites passer votre présence en ligne au
            niveau supérieur.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            theme="light"
            name="Site web vitrine"
            description="Présentez votre entreprise avec un site vitrine élégant et moderne, idéal pour renforcer votre image de marque et attirer de nouveaux clients."
            price="799€"
            features={[
              "10 pages",
              "Design moderne et responsive : Adapté à tous les appareils (ordinateurs, tablettes, smartphones).",
              "Navigation intuitive : Facilite l'accès aux informations essentielles.",
              "SEO optimisé : Améliore votre visibilité sur les moteurs de recherche.",
              "Pages personnalisées : Présentez vos services, équipe, et réalisations.",
              "Intégration des réseaux sociaux : Connectez votre site à vos comptes sociaux.",
              "Formulaire de contact : Permet aux visiteurs de vous contacter facilement.",
            ]}
          />
          <PricingCard
            theme="light"
            name="Site E-commerce"
            description="Vendez en ligne avec une boutique e-commerce optimisée pour le SEO, sécurisée et facile à gérer. Transformez vos visiteurs en clients fidèles."
            price="999€"
            features={[
              "15 produits",
              "Paiement sécurisé : Intégration des solutions de paiement en ligne fiables.",
              "Panier et commande : Expérience d'achat fluide pour vos clients.",
              "Gestion des stocks : Suivi et gestion de vos inventaires en temps réel.",
              "Optimisation SEO : Boostez votre boutique en ligne dans les résultats de recherche.",
              "Rapports et analyses : Suivez vos ventes et performances avec des tableaux de bord détaillés.",
              "Support client intégré : Chat en ligne et assistance pour vos clients.",
            ]}
          />
          <PricingCard
            theme="light"
            name="100% dev"
            description="Optez pour un site entièrement personnalisé avec notre service de développement sur-mesure. Solutions uniques, performantes et adaptées à vos besoins spécifiques."
            price="1599€"
            features={[
              "Développement sur-mesure : Fonctions et caractéristiques personnalisées selon vos besoins.",
              "Performance et sécurité : Optimisé pour des performances élevées et une sécurité maximale.",
              "Scalabilité : Conçu pour évoluer avec votre entreprise.",
              "Intégration API : Connectez vos systèmes internes et services externes facilement.",
              "Back-end puissant : Gestion efficace de votre contenu et de vos utilisateurs.",
              "Support et maintenance : Assistance continue pour garantir le bon fonctionnement du site.",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
