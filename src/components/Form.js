import { Button, FormGroup, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <div>
      <p className="text-xl font-bold mb-2 sm:text-center">Get in Touch With Us To Connect</p>
      <p className="font-semibold sm:text-center">Contact Us</p>
      <div className="mt-6">
        <FormGroup>
          <div className="space-x-6 mb-8 2xl:space-x-0  2xl:space-y-6 sm:flex sm:flex-col sm:items-center">
            <TextField
              label="Full name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter Full Name"
              sx={{ width: { xs: 320 ,lg:380} }}
              helperText="Not more than 50 characters"
            />
            <TextField
              label="Email address"
              type="email"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Elorem@gmail.com"
              sx={{ width: { xs: 320 ,lg:380} }}
              helperText="Please enter a valid email address"
            />
          </div>
          <div className="space-x-6 mb-8 2xl:space-y-6 2xl:space-x-0 sm:space-x-0 sm:flex sm:flex-col sm:items-center">
            <TextField
              label="Mobile Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="+91 9876543210"
              sx={{ width: { xs: 320 ,lg:380} }}
            />
            <TextField
              label="Country"
              select
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Banglore"
              sx={{ width: { xs: 320 ,lg:380} }}
              value={"Banglore"}
            />
          </div>
          <div className="mb-6 sm:flex sm:flex-col sm:items-center">
            <TextField
              label="Stages"
              select
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="I have booked but registration is not done"
              sx={{ width: { xs: 320 ,lg:380} }}
            />
          </div>
          <div className="flex sm:justify-center sm:mb-6">
            <Button variant="contained" sx={{ width: 300 }} type="submit">
              Submit
            </Button>
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Form;
