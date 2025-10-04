import ArrowRight from "@/arrow-right.svg";
import starImage from "@/star.png";
import springImage from "@/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container mx-auto px-8">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <Image
            src={starImage}
            alt="Star"
            width={360}
            className="absolute -top-[137px] -left-[350px]"
          />
          <Image
            src={springImage}
            alt="Spring"
            width={360}
            className="absolute -top-[19px] -right-[331px]"
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 gap-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
