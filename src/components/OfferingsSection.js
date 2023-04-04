import React from "react";
import OfferingTabs from "./OfferingTabs";
import offCard1 from "../static/offCard1.png";
import offCard2 from "../static/offCard2.png";
import offCard3 from "../static/offCard3.png";
import OfferingCard from "./OfferingCard";

const OfferingsSection = () => {
  return (
    <div className="mt-16">
      <p className="text-primary font-bold text-2xl mx-auto text-center border-b-[4px] border-primary pb-1 mb-2 w-40">
        Our Offerings
      </p>
      <p className="text-center mb-2">
        This whole purchase journey can be devided into three stages. For more
        details, <span className="font-semibold text-primary">Click Here</span>
      </p>
      <OfferingTabs />
      <div className="flex justify-between md:flex-col md:items-center md:space-y-4 lg:flex-wrap lg:gap-4 lg:items-center  md:flex">
        {offeringCardData.map((e, i) => (
          <OfferingCard image={e.image} des={e.des} title={e.title} key={i} />
        ))}
      </div>
    </div>
  );
};

const offeringCardData = [
  {
    image: offCard1,
    title: "Background verification",
    des: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
  },
  {
    image: offCard2,
    title: "Virtual site visit",
    des: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
  },
  {
    image: offCard3,
    title: "Title diligence",
    des: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
  },
];

export default OfferingsSection;
