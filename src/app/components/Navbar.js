import Link from "next/link"
import { navLinks } from "../constants"


const Navbar = () => {
  return (
    <div className="hidden md:flex justify-center px-2 items-center gap-2 border-y-2 transition-all">
      {navLinks.map((d, i) => (
        <Link
          key={i}
          href={d.route}
          className="relative group px-2 py-2 transition-all"
        >
          <p className="flex cursor-pointer hover:bg-gray-200 items-center gap-2 text-black">
            <span>{d.label}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
