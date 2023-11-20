export default function StarterKits() {
    return (
        <div className="flex items-center w-full flex-col sm:mt-10 mt-6">
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl mb-2">Templates and starter kits</p>
          <div className="flex flex-col sm:flex-row md:space-x-4 mt-4 mb-16">
          <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
                <img
                  className="w-full"
                  src="https://emeralize.s3.amazonaws.com/course/cover_images/zbd_course_image_2TBVj7H.png"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">Django Template</div>
                  <p className="text-gray-100 text-base">
                    Python developer? Get started with buidling with the ZBD API using our Django template. It's configured with our community Python SDK.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href="https://replit.com/@zantoshi/bitcoin-lightning-app"
                    className="inline-block bg-neon-green hover:bg-green-800 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                  >
                    View
                  </a>
                </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full"
                src="https://pbs.twimg.com/media/F2DDNroacAIKTlY?format=jpg&name=medium"
                alt="ZEBEDEE Next.js"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">Next.js Template</div>
                <p className="text-gray-200 text-base">
                  JavaScript Developer? Get started with our Nextjs template. It's preloaded with Next.js and our Node.js SDK.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://replit.com/@zantoshi/zbd-starter-code-nextjs"
                  className="inline-block bg-neon-green hover:bg-green-800 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 rounded shadow-lg bg-slate-600 rounded mb-4 sm:mb-0">
              <img
                className="w-full"
                src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcb60c3d8-676b-4d89-b19a-600b5e4d36b4_2400x1260.png"
                alt="ZBD Starter Playground Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">ZBD Starter Playground</div>
                <p className="text-gray-200 text-base">
                This starter kit also emcompasses a Dev Playground (see /pages/playground.js) where ZEBEDEE-enabled modules can be used / tested.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href="https://andreneves.xyz/p/bitcoin-payments-replit-zebedee-template-kit"
                  className="inline-block bg-neon-green hover:bg-green-800 rounded-full px-3 py-1 text-sm font-semibold rounded text-black focus:outline-none focus:shadow-outline mr-2 mb-2"
                >
                  View
                </a>
              </div>
            </div>
            

          </div>
        </div>
    );
  }
  