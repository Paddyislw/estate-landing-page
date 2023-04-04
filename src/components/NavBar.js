import { Button, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as LogoB } from "../static/LogoBottom.svg";
import { ReactComponent as LogoT } from "../static/LogoTop.svg";
import BasicMenu from "./Menu";

const NavBar = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="flex justify-between items-center pt-3 px-8 border-b-2  border-b-gray-300">
      <div className="flex flex-col items-center space-y-2">
        <LogoT className="h-5"/>
        <LogoB className="pb-1"/>
      </div>
      <div className="md:hidden">
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          sx={{
            "& .MuiTabs-indicator": {
              height: "3px",
            },
           
          }}
        >
          {tabData.map((item, index) => (
            <Tab
              label={item.label}
              value={item.value}
              sx={{ fontSize: "10px", fontWeight: 800, margin: {lg:"0px 5px",md:'0px 0px'}, padding:{md:'0px',sm:'0px'} }}
            />
          ))}
        </Tabs>
      </div>
      <div className="md:hidden">
        <Button variant="contained" sx={{fontSize:{lg:'12px',sm:'10px'},width:{sm:120,lg:160}}}>Register Now</Button>
      </div>
      <div className="hidden md:block">
        <BasicMenu />
      </div>
    </div>
  );
};

const tabData = [
  { label: "Home", value: 1 },
  { label: "Our Offerings", value: 2 },
  { label: "Our Team", value: 3 },
  { label: "Contact Us", value: 4 },
  { label: "Blogs", value: 5 },
];

export default NavBar;
