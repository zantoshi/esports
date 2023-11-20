import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";

export default function Hero() {
  return (
    <>
      <div
        // href="https://tabconf.com"
        // target="_blank"
        // rel="noreferrer"
        className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm transition duration-300 ease-in-out"
      >
        <span className="text-neon-green">Winter Invitational</span> - Coming
        Soon.
      </div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
        {/* The Future of Esports */}
        <br />
        <span className="relative whitespace-nowrap text-neon-green">
          <SquigglyLines />
          <span className="relative">
            The Future <br />
            of Esports
          </span>
        </span>
        {/* <br />
        Hackathon 2023 */}
      </h1>
      <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Step into the thrilling world of competitive gaming and empower yourself
        to leave a mark on the future of esports.
      </h2>

      <h1 className="mx-auto max-w-4xl font-display text-2xl font-bold tracking-normal text-gray-300 sm:text-5xl my-10">
        Seeking Sponsorships 🏆
      </h1>
      <div className="grid gap-2 grid-cols-2">
        <Link
          href="https://zbd.one/zbd-esports-discord"
          className="bg-neon-green hover:bg-green-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Join Discord
        </Link>
        <Link
          href="https://blog.zbd.gg/p/bf617107-d361-4ad8-9580-dbee20827e4b/"
          className="border border-neon-green text-white hover:text-black hover:bg-green-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Learn More
        </Link>
      </div>
    </>
  );
}
