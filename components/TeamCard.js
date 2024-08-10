import Image from "next/image";
import React from "react";

const TeamCard = ({ role }) => {
  const { icon, title } = role;

  return (
    <div className="h-60 w-60">
      <div className="bg-[#001640] h-2/3 flex justify-center items-center p-10 text-xl font-semibold ">
        {title}
      </div>
      <div className=" h-1/3 w-full relative">
        <Image src={icon} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
};

export default TeamCard;
