const { default: ServiceLayout } = require("@/components/ServiceLayout");

const TYPES = [
  {
    title: "Orcal software and system",
    image: "/images/programs/1.png",
  },
  {
    title: "Microsoft and system",
    image: "/images/programs/2.png",
  },
  {
    title: "SAP software and system",
    image: "/images/programs/3.png",
  },
  {
    title: "Implementation and integration of institutional system",
    image: "/images/programs/4.png",
  },
  {
    title: "platform and application development",
    image: "/images/programs/5.png",
  },
  {
    title: "Information technology strategies",
    image: "/images/programs/6.png",
  },
  {
    title: "Business analysis and process engineering",
    image: "/images/programs/1.png",
  },
  {
    title: "Digital transformation strategies",
    image: "/images/programs/2.png",
  },
  {
    title: "Data science, machine learning and artificial intelligence",
    image: "/images/programs/3.png",
  },
  {
    title: "Advanced analytics",
    image: "/images/programs/4.png",
  },
  {
    title: "Develop and manage big data systems",
    image: "/images/programs/5.png",
  },
  {
    title: "Business intelligence",
    image: "/images/programs/6.png",
  },
  {
    title: "Data strategy and governance",
    image: "/images/programs/6.png",
  },
];

const page = () => {
  return <ServiceLayout types={TYPES} serviceTitle="Programs and systems" />;
};

export default page;
