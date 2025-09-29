import Image from "next/image";
import ArrowIcon from "../../public/assets/arrow-right.svg";
import cogImage from "../../public/assets/cog.png";
import cylinderImage from "../../public/assets/cylinder.png";
import noodleImage from "../../public/assets/noodle.png";

export const Hero = () => {
  return (
    <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%,#fff)] pt-8 pb-20 md:pt-5 md:pb-10">
      <div className="container mx-auto px-8">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm">
              Version 2.0 is here
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your wins.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={cogImage}
              alt="Cog"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none"
            />
            <Image
              src={cylinderImage}
              alt="Cylinder"
              width={220}
              height={220}
              className="-top-8 -left-32 hidden md:absolute md:block"
            />
            <Image
              src={noodleImage}
              alt="Noodle"
              width={220}
              height={220}
              className="absolute top-[524px] left-[448px] hidden rotate-30 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
