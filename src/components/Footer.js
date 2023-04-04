import React from "react";
import { ReactComponent as LogoB } from "../static/LogoBottom.svg";
import { ReactComponent as LogoT } from "../static/LogoTop.svg";
import { ReactComponent as Mail } from "../static/mail.svg";
import { ReactComponent as Phone } from "../static/phone.svg";
import { ReactComponent as Facebook } from "../static/facebook.svg";
import { ReactComponent as Twitter } from "../static/twitter.svg";
import { ReactComponent as Instagram } from "../static/instagram.svg";
import { ReactComponent as Linkedin } from "../static/linkedin.svg";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className="bg-primary py-10 px-[7.5%] space-y-10 sm:px-[2%] ">
      <div className=" flex justify-between sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex flex-col items-center space-y-2">
          <LogoT className="h-5 text-white" />
          <LogoB className="pb-1 text-white" />
        </div>
        {footerItems.map((e, i) => (
          <FooterItem key={i} item={e} />
        ))}
        <div className="text-white space-y-4">
          <div className="flex space-x-2 items-center sm:space-x-1">
            <Mail className=" sm:hidden" />
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-sm text-gray-200">support@inreglobal.com</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center sm:space-x-1">
            <Phone className="w-6 sm:hidden" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-sm text-gray-200">+91 | 7019305889</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white sm:flex-col sm:space-y-2">
        <div className="sm:text-center">
          Copyright 2023. Designed by INRE Global
        </div>
        <div className="flex space-x-8 sm:space-x-3  sm:justify-center">
          {socials.map((e, i) => (
            <Social item={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

const footerItems = [
  {
    name: "Company",
    items: ["Home", "Our Offerings", "Our Team", "Contact Us"],
  },
  { name: "Useful Link", items: ["Blogs", "FAQ's"] },
];

const socials = [
  { svg: <Linkedin className="w-5" />, name: "Linkedin" },
  { svg: <Facebook className="w-5" />, name: "Facebook" },
  { svg: <Twitter className="w-5" />, name: "Twitter" },
  { svg: <Instagram className="w-5" />, name: "Instagram" },
];

const FooterItem = ({ item }) => (
  <div
    className={clsx("text-white", item.name === "Useful Link" && "sm:mx-auto")}
  >
    <p className="font-bold pb-2">{item.name}</p>
    <div className="space-y-1">
      {item.items.map((e, i) => (
        <p className="text-sm text-gray-300" key={i}>
          {e}
        </p>
      ))}
    </div>
  </div>
);

const Social = ({ item }) => (
  <div className="flex space-x-1 items-center sm:space-x-0">
    {item.svg}
    <p className="sm:text-sm">{item.name}</p>
  </div>
);

export default Footer;
