import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedCard from "./AnimatedCard";

const ServiceLayout = ({ serviceTitle, types }) => {
  return (
    <div className="relative h-full w-full">
      <Image src={HeroImage} alt="hero" fill className="object-cover" />
      <div className="z-10 relative py-20">
        <div className="flex w-3/4 m-auto justify-between mb-20">
          <h1 className="text-5xl font-bold">{serviceTitle}</h1>
          <Button
            className={cn(
              "bg-white text-primary hover:bg-slate-300 hover:text-primary"
            )}
          >
            <Link href={"/"}>Home</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 gap-10">
          {types.map((type, index) => (
            <AnimatedCard key={index} image={type.image} title={type.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
