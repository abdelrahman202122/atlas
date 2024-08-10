import ServiceLayout from "@/components/ServiceLayout";

const TYPES = [
  {
    title: "Perimeter and network security",
    image: "/images/programs/1.png",
  },
  {
    title: "Application and data security",
    image: "/images/programs/2.png",
  },
  {
    title: "Computational security",
    image: "/images/programs/2.png",
  },
  {
    title: "Manage identity access and authentication",
    image: "/images/programs/2.png",
  },
  {
    title: "Performance monitoring",
    image: "/images/programs/2.png",
  },
  {
    title: "Security surveillance and big data",
    image: "/images/programs/2.png",
  },
  {
    title: "MFA and password management",
    image: "/images/programs/3.png",
  },
  {
    title: "User and endpoint management",
    image: "/images/programs/3.png",
  },
  {
    title: "Security tests and evaluations",
    image: "/images/programs/3.png",
  },
  {
    title: "Threat Intelligence and Threat Management",
    image: "/images/programs/3.png",
  },
  {
    title: "Network scanning and monitoring",
    image: "/images/programs/3.png",
  },
  {
    title: "Endpoint protection",
    image: "/images/programs/3.png",
  },
  {
    title: "Application security and access",
    image: "/images/programs/3.png",
  },
  {
    title: "Rights management and data classification",
    image: "/images/programs/3.png",
  },
  {
    title: "File integrity and security governance",
    image: "/images/programs/4.png",
  },
  {
    title: "Automation and planning",
    image: "/images/programs/5.png",
  },
  {
    title: "Security Gatesatbs.sa",
    image: "/images/programs/6.png",
  },
];

const page = () => {
  return <ServiceLayout serviceTitle="Cyber Security" types={TYPES} />;
};

export default page;
