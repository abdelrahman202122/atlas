import TeamCard from "../../components/TeamCard";

const ROLES = [
  { id: 1, title: "Design", icon: "/icons/icon-1.png" },
  { id: 2, title: "Development", icon: "/icons/icon-2.png" },
  { id: 3, title: "Marketing", icon: "/icons/icon-3.png" },
  { id: 4, title: "Consultant", icon: "/icons/icon-4.png" },
];

const Team = () => {
  return (
    <div
      id="team"
      className="items-center py-20 bg-primary px-40 flex flex-col gap-12"
    >
      <h2 className="text-4xl underline font-bold">Team</h2>
      <p className="text-center">
        our work team is an integrated group of distinguished experts in the
        fields of product management, engineering, design, sales and technical
        support, committed to innovation and providing high-quality technical
        solutions that meet customer needs and exceed their expectations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-12">
        {ROLES.map((role) => (
          <TeamCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
};

export default Team;
