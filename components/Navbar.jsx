import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="fixed w-[100vw] bg-gray-50 bg-opacity-60 shadow z-40 backdrop-blur-sm">
      <nav className="flex justify-between max-w-7xl mx-auto items-center py-6 text-md ">
        <Link href="/">
          <a className="font-bold text-lg">Active Cellular</a>
        </Link>

        <div className="flex space-x-4 ">
          <Link href="#">
            <a>Overview</a>
          </Link>
          <Link href="#">
            <a>Switching to iPhone</a>
          </Link>
          <Link href="#">
            <a>Tech Specs</a>
          </Link>
          <Link href="#" passHref>
            <button className="px-6 py-1 bg-sky-600 hover:bg-sky-700 hover:shadow text-white rounded shadow-md text-xs">
              Buy
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
