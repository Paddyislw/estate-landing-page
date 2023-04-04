import React from "react";
import Form from "./Form";
import formImage from "../static/formImage.png";

const FormSection = () => {
  return (
    <div className="mt-16 flex justify-between items-center mb-16 sm:flex-col">
      <Form />
      <div>
      <img alt="" src={formImage} className="w-[350px]"/>
      </div>
    </div>
  );
};

export default FormSection;
