import React from "react";
import teamMember1 from "../static/teamMember1.png";
import teamMember2 from "../static/teamMember2.png";
import teamMember3 from "../static/teamMember3.png";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembersSection = () => {
  return (
    <div className="mt-16">
      <p className="text-primary font-bold text-2xl mx-auto text-center border-b-[4px] border-primary pb-1 mb-2 w-56">
        Our Team Members
      </p>
      <div className="flex justify-between mt-6 md:flex-col md:items-center md:space-y-4 lg:flex-wrap lg:gap-4 lg:items-center  md:flex ">
        {teamMemberCardData.map((e, i) => (
          <TeamMemberCard key={i} image={e.image} title={e.title} des={e.des} />
        ))}
      </div>
    </div>
  );
};

const teamMemberCardData = [
  {
    image: teamMember1,
    title: "Brajesh Pathak",
    des: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",
  },
  {
    image: teamMember2,
    title: "Deepak Shukla",
    des: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11...",
  },
  {
    image: teamMember3,
    title: "Alok Kumar Singh",
    des: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capita...",
  },
];

export default TeamMembersSection;
