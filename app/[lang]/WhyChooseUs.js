import { FaCheckCircle } from "react-icons/fa";

const REASONS = [
  "The ability of our company (Atlas Top) to manage major projects in several government sectors in the Kingdom and achieve many success stories with our client partners through enhanced vision of potential risks, risk mitigation and emergency strategies.",
  "Our systems trust the importance of implementing all project requirements in accordance with the terms and specifications booklet, which was reflected in the formation of high-quality work teams.",
  "We are pleased to provide our consulting services as sustainable and long-term solutions, which are based on the best international ISO standards, ISO 9001 Quality Management System, and are specifically designed according to the project’s specific needs.",
  "We follow a results-oriented approach to mission preparation and implementation, and we continuously monitor and evaluate project achievements for the project supervising entity.",
  "At Atlas Top, we believe in the importance of the targeted data and the importance of the confidentiality of that data. We provide the project supervising party with a data confidentiality agreement at the beginning of the project. Our systems trust the importance of implementing all project requirements in accordance with the terms and specifications booklet, which was reflected in the formation of high-quality work teams.",
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 text-black px-40  flex flex-col gap-12">
      <h2 className="text-4xl font-semibold flex-1 capitalize">
        Chooses Atlas Top
      </h2>
      <div className="flex flex-col gap-4 divide-dashed divide-y divide-black ">
        {REASONS.map((reason, index) => (
          <p className="text-xs font-normal pt-2" key={index}>
            <FaCheckCircle color="#0000ff" size={12} className="inline-flex" />{" "}
            {reason}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
