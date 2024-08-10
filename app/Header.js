import Logo from "@/components/Logo";
import Navigations from "@/components/Navigations";
import HeaderButtons from "@/components/HeaderButtons";
import HamMenu from "@/components/HamMenu";

const Header = () => {
  return (
    <div className="flex gap-12 items-center absolute top-0 justify-center mt-10  w-full z-10">
      <Logo />
      <div className="sm:hidden lg:block">
        <Navigations />
      </div>
      <HeaderButtons />
      <div className="lg:hidden">
        <HamMenu />
      </div>
    </div>
  );
};

export default Header;
