import React, { useState } from "react";
import Building from "./BuildingTable/Building";
import Unit from "./UnitTable/Unit";

const Org = () => {
  const [handleUnit, setHandleUnit] = useState(false);

  return (
    <>
      <Building setHandleUnit={setHandleUnit} />
      {handleUnit ? <Unit /> : null}
    </>
  );
};

export default Org;
