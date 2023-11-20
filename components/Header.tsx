import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/esports_logo.svg"
          className="sm:w-60 sm:h-8 w-48 h-12"
          width={299.41}
          height={32}
        />
        {/* <h1 className="hidden md:block sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          ZBD x PlebLab Hackathon
        </h1>
        <h1 className="md:hidden block sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          ZBD x PlebLab
        </h1> */}
      </Link>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-green-600 text-black px-5 py-2 text-sm shadow-md hover:bg-neon-green bg-neon-green font-medium transition"
        href="https://zbd.link/hcHi/h921f3b7"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Github /> */}
        <p>Get the ZBD App</p>
      </a>
    </header>
  );
}
