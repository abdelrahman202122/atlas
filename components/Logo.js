import Image from "next/image";
import LogoImage from "@/public/images/logo.png";

const Logo = () => {
  return <Image src={LogoImage} alt="logo" width={213} height={125} />;
};

export default Logo;
