import { Button } from "@mui/material";
import React from "react";
import CardWrapper from "./CardWrapper";
import {ReactComponent as Right} from '../static/rightArrow.svg'

const OfferingCard = ({ image, title, des }) => {
  return (
    <CardWrapper className="min-h-[460px] ">
      <img alt="card" src={image} />
      <p className="text-primary font-bold text-xl mt-4 mb-1">{title}</p>
      <p className="grow mb-2">{des}</p>
      <div>
        <Button variant="outlined" style={{fontSize:'12px',fontWeight:700}} endIcon={<Right className="h-4"/>}>
          Contact us
        </Button>
      </div>
    </CardWrapper>
  );
};

export default OfferingCard;
