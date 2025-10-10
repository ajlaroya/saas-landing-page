import productImage from "@/product-image.png";
import pyramidImage from "@/pyramid.png";
import tubeImage from "@/tube.png";
import Image from "next/image";

// 2:43:51

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, response, SaaS
            website in just minutes with this template
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Showcase" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid"
            height={262}
            width={262}
            className="absolute -top-32 -right-36 hidden md:block"
          />
          <Image
            src={tubeImage}
            alt="Tube"
            height={248}
            width={248}
            className="absolute bottom-24 -left-36 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
