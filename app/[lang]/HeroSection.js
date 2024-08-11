import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getDictionary } from "./locals";

const HeroSection = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <main className="relative h-screen w-full flex flex-col justify-center px-40 ">
      <Image src="/images/hero-image.png" alt="hero" fill />
      <div className="relative  text-white z-10 flex flex-col gap-14 items-start">
        <h1 className="text-4xl font-bold capitalize">
          We create your <span className="text-secondary">digital feature</span>
        </h1>
        <Button variant="outline" className={cn("rounded-full px-20")}>
          {dict.discover}
        </Button>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="enter your e-mail"
            className={cn("rounded-full text-black")}
          />
          <Button type="submit" className={cn("bg-secondary rounded-full")}>
            Sent your Quota
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
