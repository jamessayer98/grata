import React from "react";
import { useSelector } from "react-redux";
import Building from "./BuildingTable/Building";
import Unit from "./UnitTable/Unit";

const Org = () => {
  const { unitFlag } = useSelector((state) => state.unit);

  return (
    <>
      <Building />
      {unitFlag ? <Unit /> : null}
    </>
  );
};

export default Org;
