export default function Organizers() {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-2">
      <p className="mt-8 text-3xl font-bold tracking-tight text-white-100 sm:text-4xl">
        Brought to you by
      </p>
      <div className="flex flex-wrap justify-center ">
        <div className="w-1/2 md:w-1/3 mb-2 px-4 flex items-center justify-center">
          <a href="https://zbd.gg" target="_blank" rel="noreferrer">
            <img
              className="w-64 h-64 object-contain"
              src="./zbd.png"
              alt="ZBD"
            />
          </a>
        </div>
        <div className="w-1/2 md:w-1/3 mb-2 px-4 flex items-center justify-center">
          <a href="https://dustup.gg" target="_blank" rel="noreferrer">
            <img
              className="w-64 h-64 object-contain"
              src="https://assets-global.website-files.com/64ff055ae6f88be0d9ae66af/6536b4f65615421a8694bee0_dustup-logo-allred.svg"
              alt="DustUp"
            />
          </a>
        </div>
        {/* Add more sponsor logos here */}
      </div>
    </div>
  );
}
