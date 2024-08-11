import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

const SERVICES = [
  {
    id: 1,
    icon: "/icons/software-engineer.png",
    title: "Programs and systems",
    desc: "technical services include a wide range of services related to technology, including technical support , maintenance , development,technical consulting and others",
    page: "/programs",
  },
  {
    id: 2,
    icon: "/icons/research.png",
    title: "cyber security",
    desc: "Administrative services include a wide range of activities that support the daily operations of organizations and companies these services help in organizing and managing resources and achieving high efficiency",
    page: "/cyber",
  },
  {
    id: 3,
    icon: "/icons/research.png",
    title: "security services",
    desc: "Administrative services include a wide range of activities that support the daily operations of organizations and companies these services help in organizing and managing resources and achieving high efficiency",
    page: "/security",
  },
  {
    id: 4,
    icon: "/icons/methodology.png",
    title: "networks and communications",
    desc: "Project management is the process of planning organizing, executing controlling and closing work to achieve specific objectives according to certian standerds of time, cost and quality",
    page: "/network",
  },
];

const Services = () => {
  return (
    <div id="services" className="relative px-40 py-20">
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold pb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <Image src="/images/services-bg.png" alt="services image" fill />
    </div>
  );
};

export default Services;
