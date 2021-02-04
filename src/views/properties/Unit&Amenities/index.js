import React from "react";
import Amenities from "./Amenities/Amenities";
import Unit from "./Unit/Unit";
import { CContainer, CRow, CCol } from "@coreui/react";

const UnitAmenities = () => {
  return (
    <CContainer>
      <CRow>
        <CCol>
          <Amenities />
          <Unit />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default UnitAmenities;
