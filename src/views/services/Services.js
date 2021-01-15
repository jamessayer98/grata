import React from "react";
import ServicesForm from "./ServicesForm";
import ServicesTable from "./ServicesTable";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const Services = () => {
  const dispatch = useDispatch();

  return (
    <div className="services">
      <ServicesTable />
      <ServicesForm />
    </div>
  );
};

export default Services;
