import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full bg-[#003BE2] bg-hero-grid text-white pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 lg:pb-36 flex flex-col items-center justify-center relative overflow-hidden text-center px-4 sm:px-6">
      <div className="relative z-10 flex flex-col items-center max-w-[935px] mx-auto w-full">

        <div
          aria-hidden="true"
          className="text-404-gradient text-[180px] sm:text-[280px] md:text-[380px] lg:text-[460px] font-bold select-none pointer-events-none -mb-20 sm:-mb-32 md:-mb-44 lg:-mb-52"
        >
          404
        </div>

        <h1 className="font-poppins font-semibold text-[38px] sm:text-[54px] lg:text-[72px] text-white leading-[1.2] tracking-[-0.01em] max-w-[935px] relative z-20">
          The page you are looking
          <br className="hidden sm:inline" /> for doesn&apos;t exist
        </h1>
        <p className="mt-6 font-satoshi font-normal text-base sm:text-[18px] leading-[1.6] tracking-normal text-[#E5E6E8] max-w-[486px] relative z-20">
          Try to use a correct url or go back to homepage to start again
        </p>

        <div className="mt-8 relative z-20">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-satoshi font-medium text-base sm:text-[18px] leading-[1.2] tracking-normal transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
