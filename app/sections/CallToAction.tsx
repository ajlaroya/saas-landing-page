"use client";

import ArrowRight from "@/arrow-right.svg";
import starImage from "@/star.png";
import springImage from "@/spring.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container mx-auto px-8">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <motion.img
            src={starImage.src}
            alt="Star"
            width={360}
            className="absolute -top-[137px] -left-[350px]"
            style={{ y: translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring"
            width={360}
            className="absolute -top-[19px] -right-[331px]"
            style={{ y: translateY }}
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
