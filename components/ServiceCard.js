import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { icon, title, desc, page } = service;

  return (
    <div className="bg-white text-primary px-6 py-8 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="relative w-12 h-12">
          <Image src={icon} alt="programs" fill className="object-cover" />
        </div>
        <p className="text-xl text-center font-semibold  text-[#ff4848]">
          {title}
        </p>
      </div>
      <p className="text-xs">{desc}</p>
      <Button>
        <Link href={page}>Learn more</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
