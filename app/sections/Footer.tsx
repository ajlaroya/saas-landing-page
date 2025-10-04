import Image from "next/image";
import logo from "@/logosaas.png";
import SocialX from "@/social-x.svg";
import SocialInsta from "@/social-insta.svg";
import SocialLinkedIn from "@/social-linkedin.svg";
import SocialPin from "@/social-pin.svg";
import SocialYoutube from "@/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container mx-auto px-8">
        <div className="relative inline-flex before:absolute before:top-1 before:bottom-0 before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <Image src={logo} height={40} alt="Logo" className="relative" />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} Arthur Laroya, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
