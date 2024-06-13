import { AlignTopIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-black text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">Upiz Web</div>
          <button className="bg-transparent border border-white py-1 px-4 rounded-full text-white">
            Contact
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <nav className="flex justify-center items-center mb-8">
          <Image
            src={"/MiniLogo.svg"}
            alt="Logo"
            width={150}
            height={150}
          ></Image>
        </nav>
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Elevez votre présence en ligne
          </h1>
          <p className="text-gray-600 mb-8">
            Transformez vos idées en projets digitaux concret grace à mon
            expertise
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded-full">
              Contactez moi 🚀
            </button>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-8 rounded-lg flex items-center justify-center text-4xl font-bold">
            <div>
              <p>20+</p>
              <p className="text-sm font-normal mt-2">
                Projets réalisé pour mes clients à travers la France 🇫🇷
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg flex items-center justify-center text-4xl font-bold text-white">
            <div>
              <p>Mes outils</p>
              <div className="text-sm font-normal mt-2 flex gap-3">
                <Image
                  src={"/Shopify.svg"}
                  alt="Shopify"
                  width={25}
                  height={25}
                ></Image>
                <Image
                  src={"/Wordpress.svg"}
                  alt="Shopify"
                  width={25}
                  height={25}
                ></Image>
                <Image
                  src={"/NextJS.svg"}
                  alt="Shopify"
                  width={25}
                  height={25}
                ></Image>
                <Image
                  src={"/Notion.svg"}
                  alt="Shopify"
                  width={25}
                  height={25}
                ></Image>
                <Image
                  src={"/Tailwindcss.svg"}
                  alt="Shopify"
                  width={25}
                  height={25}
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
