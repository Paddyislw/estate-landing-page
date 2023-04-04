import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const OfferingTabs = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="flex justify-center mb-10 mt-4">
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        sx={{
          "& .MuiTabs-indicator": {
            height: "3px",
          },
          "& .Mui-selected":{
            backgroundColor:'#ccd3dc'
          }
        }}
      >
        {tabsData.map((e, i) => (
          <Tab
            value={e.value}
            label={e.name}
            icon={e.icon()}
            iconPosition="start"
            sx={{
              backgroundColor: "#f2f4f6",
              margin:{ lg:"0px 10px",md:'0px 4px',sm:'0px 2px',xs:'0px 2px'},
              width: {lg:600,md:280,sm:200,xs:100},
              fontSize:{xs:'10px'}
            }}

          >
            <div>
              <p>{e.value}</p>
              <p>{e.label}</p>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

const tabsData = [
  { name: <p className="font-semibold py-2">Pre-Booking</p>, value: 1, icon: () => <Icon val={1} /> },
  {
    name: (
      <p className="font-semibold  py-2">
        Post-Booking & <br /> Pre-Registration
      </p>
    ),
    value: 2,
    icon: () => <Icon val={2} />,
  },
  { name: <p className="font-semibold  py-2">Post-Registration</p>, value: 3, icon: () => <Icon val={3} /> },
];

const Icon = ({ val }) => (
  <p className="bg-white py-[5px] px-[11px] rounded-full mr-2 text-black sm:px-[5px] sm:py-[2px] sm:hidden">
    {val}
  </p>
);

export default OfferingTabs;
