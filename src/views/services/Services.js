import React from "react";
import ServicesForm from "./ServicesForm";
import ServicesTable from "./ServicesTable";

const Services = () => {
  return (
    <div className="services">
      <ServicesTable />
      <ServicesForm />
    </div>
  );
};

export default Services;
