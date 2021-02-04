import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAmenities, getAmenities, getAmenity } from "../../../../redux/actions/amenities";
import { CCard, CCardHeader, CCardBody, CCardTitle, CButton, CDataTable } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import EditAmenities from "./EditAmenities";

const Amenities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { amenities } = useSelector((state) => state.amenities);
  const [handleAmenitiesModal, setHandleAmenitiesModal] = useState(false);

  useEffect(() => {
    dispatch(getAmenities());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "20%" } },
    { key: "type", _style: { width: "20%" } },
    { key: "description", _style: { width: "40%" } },
    { key: "edit", _style: { width: "20%" } },
  ];

  const handleAdd = () => {
    history.push("/properties/amenities/add");
  };

  const handleEdit = (index) => {
    dispatch(getAmenity(amenities[index]));
    setHandleAmenitiesModal(true);
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Amenities</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAdd} color="primary" className="mb-2">
          + Add Amenities
        </CButton>
        <CDataTable
          items={amenities}
          fields={fields}
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          onFilteredItemsChange={(val) => dispatch(filterAmenities(val))}
          scopedSlots={{
            index: (item, index) => {
              return <td>{index + 1} </td>;
            },
            edit: (item, index) => {
              return (
                <td className="text-center">
                  <CButton onClick={() => handleEdit(index)} size="sm" color="info">
                    <CIcon content={freeSet.cilPencil} />
                  </CButton>
                </td>
              );
            },
          }}
        />
      </CCardBody>
      <EditAmenities
        handleAmenitiesModal={handleAmenitiesModal}
        setHandleAmenitiesModal={setHandleAmenitiesModal}
      />
    </CCard>
  );
};

export default Amenities;
