import React from "react";
import CardWrapper from "./CardWrapper";
import { Button } from "@mui/material";
import { ReactComponent as Right } from "../static/rightArrow.svg";
import { ReactComponent as Callender } from "../static/callender.svg";

const BlogCard = ({ image }) => {
  return (
    <CardWrapper className={'space-y-2 mx-auto mb-10'}>
      <img alt="blog" src={image} />
      <p className="text-sm pt-2">Real Estate, Analysis</p>
      <div className="flex justify-between font-semibold">
        <div className="flex space-x-1">
          <Callender className="w-4"/>
          <p>09 jun 2022</p>
        </div>
        <p className="text-primary font-semibold">By Admin</p>
      </div>
      <p className="text-xl text-primary font-bold">Guide for personal property Buying</p>
      <p className="text-gray-600 pt-2 pb-3">
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
        eiusmod temp incididuut labore dolore magna aliqua do eiusmod...
      </p>
      <div>
        <Button
          variant="outlined"
          style={{ fontSize: "12px", fontWeight: 700 }}
          endIcon={<Right className="h-4" />}
        >
          View More
        </Button>
      </div>
    </CardWrapper>
  );
};

export default BlogCard;
