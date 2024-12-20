export function Footer() {
  return  (
    <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Section gauche - Copyright */}
      <div className="text-center md:text-left">
        <p>&copy; 2024 Mon Projet Noël. Tous droits réservés à moi.</p>
      </div>

      {/* Section droite - Liens sociaux */}
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 2.04c-5.522 0-10 4.478-10 10 0 5.022 3.662 9.254 8.501 9.92v-7h-2.558v-2.92h2.558v-2.09c0-2.492 1.463-3.88 3.772-3.88 1.088 0 2.227.195 2.227.195v2.46h-1.253c-1.207 0-1.585.747-1.585 1.507v1.92h2.673l-.427 2.92h-2.246v7.01c4.839-.666 8.5-4.898 8.5-9.92 0-5.522-4.478-10-10-10z" />
          </svg>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M23.643 4.937c-.885.39-1.835.653-2.828.773 1.016-.607 1.794-1.569 2.163-2.724-.951.56-2.007.97-3.127 1.193-.894-.955-2.172-1.55-3.594-1.55-2.714 0-4.92 2.208-4.92 4.922 0 .385.043.76.127 1.12-4.092-.205-7.72-2.165-10.15-5.145-.424.728-.665 1.57-.665 2.47 0 1.7.866 3.2 2.18 4.08-.804-.026-1.56-.247-2.228-.616-.001.02-.001.039-.001.058 0 2.385 1.693 4.373 3.948 4.827-.414.113-.849.172-1.296.172-.317 0-.628-.031-.934-.088.629 1.96 2.446 3.385 4.598 3.425-1.68 1.315-3.798 2.1-6.1 2.1-.396 0-.79-.023-1.176-.068 2.185 1.396 4.786 2.21 7.548 2.21 9.057 0 14.02-7.51 14.02-14.017 0-.213-.004-.425-.014-.636.962-.694 1.8-1.56 2.45-2.548z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
  );
}