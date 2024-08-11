import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import Image from "next/image";
import abouUSImage from "../../public/images/about-us-image.png";

const AboutUs = () => {
  return (
    <div id="about" className="w-full flex h-screen ">
      <div className="w-1/3 bg-primary py-20"></div>
      <div className="flex flex-col w-2/3 justify-center items-start pl-12 pr-8 sm:pl-36 md:pl-48 lg:pl-80 gap-14 relative">
        <h2 className="text-black text-4xl font-bold">About Us</h2>
        <p className="text-black leading-loose">
          Golden Applications Information Technology Company was established to
          provide services for developing and managing big data systems, data
          strategies, governance, and many technical services. A golden
          information technology application company, we aim to enable
          organizations to use their data effectively to make informed strategic
          decisions and achieve competitive excellence.
        </p>
        <Button className={cn("bg-primary px-20")}>Learn more</Button>
        <div className="h-5/6 w-1/2 left-0 sm:block hidden -translate-x-1/2 absolute">
          <Image
            src={abouUSImage}
            alt="about us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
