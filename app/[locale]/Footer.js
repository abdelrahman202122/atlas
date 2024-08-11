import Logo from "../../components/Logo";
import Link from "next/link";

const SOCIAL = ["Linked In", "Facbook", "Instgram", "Youtube"];
const NEWS = ["Tech Event .01", "Expo Event", "Rydr"];

const Footer = () => {
  return (
    <div className="bg-black py-20 px-8 lg:px-20  flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-24 ">
      <Logo />
      <div className="flex items-start justify-between flex-1 w-full">
        <div>
          <h3 className="text-lg font-semibold mb-6">Social Media</h3>
          <ul className="text-center text-gray-300 leading-relaxed">
            {SOCIAL.map((social, index) => (
              <li key={index}>
                <Link href="/">{social}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center flex flex-col gap-4 ">
          <h3 className="text-lg font-semibold ">Phone Number</h3>
          <Link href="/">+966 54 767 5050</Link>
          <h3 className="text-lg font-semibold ">Fax number</h3>
          <Link href="/">+966 54 767 5050</Link>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">News & Events</h3>
          <ul className="text-center text-gray-300 leading-relaxed">
            {NEWS.map((event, index) => (
              <li key={index}>
                <Link href="/">{event}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
