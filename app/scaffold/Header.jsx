import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-40 pt-10 w-full pb-5 mx-auto absolute top-0 z-50">
      <nav className="flex justify-between">
        <Image src="/media/logo.svg" width={171} height={44} />
        <div className="flex items-center justify-between w-[60%]">
          <div className="flex justify-between w-[60%]">
            <Link
              href="#"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              Timeline
            </Link>
            <Link
              href="#"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              Overview
            </Link>
            <Link
              href="#"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:text-transparent"
            >
              Contact
            </Link>
          </div>
          <Link href="#">
            <button>Register</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
