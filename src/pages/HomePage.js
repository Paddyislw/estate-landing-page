import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import OfferingsSection from "../components/OfferingsSection";
import TeamMembersSection from "../components/TeamMembersSection";
import BlogSection from "../components/BlogSection";
import FormSection from "../components/FormSection";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="px-[7.5%] sm:px-[2%] lg:px-[5%]">
          <HeroSection />
          <OfferingsSection />
          <TeamMembersSection />
        </div>
        <div className=" bg-[#f2f4f6] mt-6 py-10 sm:px-[2%] lg:px-[5%]">
          <BlogSection />
        </div>
        <div className="px-[7.5%] sm:px-[2%] lg:px-[5%]">
          <FormSection />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
