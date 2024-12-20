import { TodoListe } from "./features/todo/component/todoListe";

export function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white relative">
        {/* Background accents */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-16 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-20 w-96 h-96 bg-purple-700 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <section className="z-10 text-center space-y-8 px-4">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Bienvenue à <span className="text-pink-500">votre univers</span>
          </h1>
          <p className="text-lg lg:text-2xl text-gray-300">
            Explorez la beauté et la créativité dans un monde de contrastes et
            de nuances.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/about"
              className="bg-pink-500 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 transition duration-300"
            >
              En savoir plus
            </a>
            <a
              href="/contact"
              className="border border-pink-500 text-pink-500 font-medium px-6 py-3 rounded-lg hover:bg-pink-500 hover:text-gray-900 transition duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </section>
        <TodoListe />
      </main>
    </>
  );
}
