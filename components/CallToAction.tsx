export default function CallToAction() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-6">
          <p className="mt-2 text-3xl font-bold tracking-tight text-black-100 sm:text-4xl">Stay Engaged</p>
          <div className="flex flex-wrap justify-center gap-3 my-4">

            <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full"
                src="./zbd-discord.png"
                alt="ZBD Dev Discord Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">ZBD Dev Discord</div>
                <p className="text-gray-200 text-base">
                    Stay up to date with our latest courses, tutorials, guides, documentation, conference presentations, and news in the industry. Make some new friends and build something cool.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://discord.gg/syB923FuP7"
                  className="inline-block bg-neon-green hover:bg-green-500 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full border border-black"
                src="./legends-of-lightning.png"
                alt="Bolt.fun Remote Hackathon"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">Bolt.Fun (Remote Option)</div>
                <p className="text-gray-200 text-base">
                    Can't make it to TABconf? Join in on the fun and compete in the BOLT.fun Legends of Lightning hackathon. It's our online option.
                    </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://bolt.fun/"
                  className="inline-block bg-neon-green hover:bg-green-500 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>
            

          </div>
        </div>
    );
  }
  