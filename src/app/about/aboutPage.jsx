export function AboutPage() {
  return  (
  <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white relative">
  {/* Background accents */}
  <div className="absolute inset-0 opacity-40 pointer-events-none">
    <div className="absolute top-20 left-16 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-16 w-72 h-72 bg-purple-700 rounded-full blur-3xl"></div>
    <div className="absolute bottom-40 left-40 w-48 h-48 bg-yellow-500 rounded-full blur-2xl"></div>
  </div>

  {/* Content */}
  <section className="z-10 text-center max-w-3xl space-y-8 px-4">
    <h1 className="text-5xl lg:text-6xl font-extrabold text-pink-400">
      Moi, une femme, une légende !
    </h1>
    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
      Je suis une développeuse et designeuse qui jongle avec du code, des croquis et des rêves. 
      Quand je ne suis pas en train de créer des interfaces élégantes, vous pouvez me trouver :
    </p>
    <ul className="list-disc text-left text-gray-300 space-y-2 mx-auto">
      <li>À dévorer une tablette de chocolat (parce que le cacao, c'est de l'amour solide).</li>
      <li>À chevaucher une licorne imaginaire vers des mondes fantastiques.</li>
      <li>À me perdre dans un bon livre, probablement avec une tasse de thé.</li>
      <li>À bricoler des créations d'art manuel qui, parfois, ressemblent à des œuvres d’art. Parfois.</li>
      <li>À cueillir des fleurs (et à me demander si elles aiment mon vase autant que je les aime).</li>
    </ul>
    <p className="text-lg lg:text-xl text-gray-300">
      Mais surtout, je suis passionnée par le design et le développement. Créer des expériences numériques qui enchantent et émerveillent, c'est ma façon de laisser une trace dans ce monde.
    </p>

    <div className="mt-6">
      <a
        href="/contact"
        className="bg-pink-500 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 transition duration-300"
      >
        Travaillons ensemble !
      </a>
    </div>
  </section>

</main>
);
  
}