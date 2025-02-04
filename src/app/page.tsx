import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header y contenido principal se mantienen igual... */}
      <header className="bg-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-40 md:w-48">
            <img
              src="/Polkadot_Logo_Pink-Black.svg"
              alt="Polkadot Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow bg-[#DCE2E9]">
        {/* ... contenido principal previo ... */}
        <div className="container mx-auto px-6 py-12">
          <section className="max-w-4xl mx-auto">
            {/* <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Polkadot Asia Community
            </h1> */}

            <div className="space-y-8">
              {/* Building Web3 section */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#FF2670] mb-4">
                  Building Web3 in Asia
                </h2>
                <p className="text-black mb-4">
                  Join the growing Polkadot ecosystem in Asia. We're fostering
                  innovation, collaboration, and growth across the region
                  through community-driven initiatives and events.
                </p>
              </div>

              {/* Events section */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#FF2670] mb-4">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#FF2670] pl-4">
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/Polkadot-BKK.png"
                        alt="Bangkok Meetup Banner"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg">Bangkok Meetup</h3>
                    <p className="text-black mb-2">
                      February 21st, 2025 at 5:00 PM
                    </p>
                    <p className="text-gray-600 mb-4">
                      Join us for beers and pizza! Network with fellow Polkadot
                      enthusiasts in a casual atmosphere.
                    </p>
                    <a
                      href="#register"
                      className="inline-block bg-[#FF2670] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#FF2670]/90 transition-colors shadow-md"
                    >
                      Register for Event
                    </a>
                  </div>
                  <p className="text-black mt-4">
                    Stay tuned for more upcoming meetups and events across major
                    Asian cities.
                  </p>
                </div>
              </div>

              {/* Get Involved section con enlaces sociales actualizados */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#FF2670] mb-4">
                  Get Involved
                </h2>
                <p className="text-black mb-4">
                  Whether you're a developer, creator, or enthusiast, there's a
                  place for you in the Polkadot DAO. Join us in building the
                  future of Web3.
                </p>
                <div className="space-y-4">
                  {/* Discord Link */}
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-[#FF2670]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <a
                      href="https://discord.com/invite/polkadot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF2670] hover:text-[#FF2670]/80 transition-colors font-medium"
                    >
                      Join our Discord Community
                    </a>
                  </div>
                  {/* X (Twitter) Link */}
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-[#FF2670]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <a
                      href="https://x.com/Polkadot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF2670] hover:text-[#FF2670]/80 transition-colors font-medium"
                    >
                      Follow us on X
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="font-medium">Wario - Polkadot Lead Ambassador</p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <a
                  href="https://t.me/wario_mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF2670] transition-colors"
                >
                  @wario_mx
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
