const { default: ServiceLayout } = require("@/components/ServiceLayout");

const TYPES = [
  {
    title:
      "Works, connecting and extending the computer network, internal cabling and infrastructure",
    image: "/images/programs/1.png",
  },
  {
    title:
      "Work and delivery of internal Internet services, maintenance and technical support",
    image: "/images/programs/2.png",
  },
  {
    title: "Works, connecting and extending fiber optic networks",
    image: "/images/programs/3.png",
  },
  {
    title:
      "Works on exchanges, telephones (main telephone system) and communication networks",
    image: "/images/programs/4.png",
  },
  {
    title:
      "Established and operated call centers with call recording and call evaluation",
    image: "/images/programs/5.png",
  },
  {
    title: "Customer service solutions with all means of communication",
    image: "/images/programs/6.png",
  },
  {
    title: "Providing communications, Internet and networks via VSAT satellite",
    image: "/images/programs/1.png",
  },
  {
    title:
      "Established correspondence systems for government and large sectors",
    image: "/images/programs/2.png",
  },
  {
    title:
      "Works on attendance and departure devices and entry and exit control devices",
    image: "/images/programs/3.png",
  },
  {
    title:
      "Supply and installation of digital screens, IPTV, projectors and Videowall. threea.net",
    image: "/images/programs/4.png",
  },
  {
    title:
      "Works, connects the internal and external wireless network, maintains it and support",
    image: "/images/programs/5.png",
  },
  {
    title: "Network connection and branch connection workst",
    image: "/images/programs/6.png",
  },
  {
    title: "Self-service machines business",
    image: "/images/programs/6.png",
  },
  {
    title: "Create more orders on WhatsApp",
    image: "/images/programs/6.png",
  },
];

const page = () => {
  return (
    <ServiceLayout types={TYPES} serviceTitle="Networks & Communications" />
  );
};

export default page;
