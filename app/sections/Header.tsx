import ArrowRight from "../../public/assets/arrow-right.svg";
import Logo from "../../public/assets/logosaas.png";
import MenuIcon from "../../public/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <nav className="py-5">
        <div className="container px-8">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5" />
          </div>
        </div>
      </nav>
    </header>
  );
};
