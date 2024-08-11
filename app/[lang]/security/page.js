const { default: ServiceLayout } = require("@/components/ServiceLayout");

const TYPES = [
  {
    title:
      "Works and connects all types of internal and external surveillance cameras",
    image: "/images/programs/1.png",
  },
  {
    title: "Works and connections of thermal surveillance cameras",
    image: "/images/programs/2.png",
  },
  {
    title:
      "Works and creates smart systems for managing parking lots in cities",
    image: "/images/programs/3.png",
  },
  {
    title:
      "Supply, implementation and supervision of fire and alarm systems work",
    image: "/images/programs/4.png",
  },
  {
    title: "Design and redesign of enterprise security",
    image: "/images/programs/5.png",
  },
  {
    title: "Guard awareness training",
    image: "/images/programs/6.png",
  },
];

const page = () => {
  return <ServiceLayout types={TYPES} serviceTitle="Security Services" />;
};

export default page;
