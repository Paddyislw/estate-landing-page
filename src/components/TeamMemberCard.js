import React from "react";
import CardWrapper from "./CardWrapper";

const TeamMemberCard = ({ image, title, des }) => {
  return (
    <CardWrapper>
      <img alt="card" src={image} />
      <p className="text-primary font-bold text-xl mt-4 mb-1">{title}</p>
      <p className="grow mb-2">{des}</p>
      <p className="text-right">View More</p>
    </CardWrapper>
  );
};

export default TeamMemberCard;
