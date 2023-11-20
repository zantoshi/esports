export default function Learn() {
    return (
        <div className="flex items-center w-full flex-col sm:mt-10 mt-6">
        <p className="mt-2 text-3xl font-bold tracking-tight text-black-100 sm:text-4xl">Learn</p>
          <div className="flex flex-col sm:flex-row md:space-x-4 mt-4 mb-16">
          <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full"
                src="https://emeralize.s3.amazonaws.com/course/cover_images/zbd_course_image_2TBVj7H.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">Lightning Course</div>
                <p className="text-gray-200 text-base">
                  New to Bitcoin and the Lightning Network? Learn all about Lightning, LNURL, and wallets. You'll be a pro in no time at all.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://emeralize.app/course/2/"
                  className="inline-block bg-neon-green hover:bg-green-500 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full"
                src="https://pbs.twimg.com/media/F2DDTXbakAAyHFu?format=png&name=small"
                alt="Developer Dashboard Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">Get Started with the ZBD API</div>
                <p className="text-gray-200 text-base">
                Create projects to get access to API keys for the ZEBEDEE API, manage Bitcoin Lightning wallets, perform payment actions.                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://twitter.com/zebedeeio/status/1679915860759019527"
                  className="inline-block bg-neon-green hover:bg-green-500 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full border border-black"
                src="./orange_pl.svg"
                alt="PlebLab Card Image for PlebBook"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">PlebBook</div>
                <p className="text-gray-200 text-base">
                PlebBook is a community resource for aspiring developers and builders to learn and get involved with the Bitcoin Lightning ecosystem. Kinda like a builders manual for Bitcoin and Lightning.                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://book.pleblab.com/"
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
  