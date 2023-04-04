import React from "react";
import home from "../static/home.png";
import hero from "../static/hero.png";
import { Button } from "@mui/material";
import {ReactComponent as Right} from '../static/rightArrow.svg'

const HeroSection = () => {
  return (
    <div className="mt-10">
      <div className="flex mb-10 sm:flex-col">
        <div className="bg-primary text-white text-3xl font-semibold flex justify-end items-center w-[40%] sm:w-full sm:justify-center sm:py-8">
          <p className="leading-[1.3] tracking-wider">
            Making your <span className="text-[#faff00]">real</span> <br />{" "}
            <span className="text-[#faff00]">estate</span> purchase <br />
            journey faster and <br />
            transparent
          </p>
        </div>
        <img alt="hero" src={hero} className="h-[350px] w-full bg-primary xl:h-[300px] xl:w-[60%] sm:w-full " />
      </div>
      <div className="flex bg-[#e6eaee] p-4 rounded-lg space-x-7 sm:flex-col sm:space-x-0">

        <img alt="home" src={home} className="w-[40%] lg:w-[40%] sm:w-full" />

        <div className="py-2 pr-4">
          <p className="text-xl font-bold mb-2 sm:text-center sm:mt-2 sm:mb-2">Who We Are</p>
          <p className="sm:text-center">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>
          <div className="flex sm:justify-center">
          <Button
            variant="outlined"
            sx={{
              marginTop: "30px",
              fontSize: "12px",
              fontWeight: 700,
              padding: "6px 16px",
            }}
            endIcon={<Right className="h-4"/>}
          >
            Contact Now
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
