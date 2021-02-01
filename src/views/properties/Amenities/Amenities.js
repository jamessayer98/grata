import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAmenities, getAmenities } from "../../../redux/actions/amenities";
import { CCard, CCardHeader, CCardBody, CCardTitle, CButton, CDataTable } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const Amenities = () => {
  const dispatch = useDispatch();
  const { amenities } = useSelector((state) => state.amenities);

  useEffect(() => {
    dispatch(getAmenities());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "20%" } },
    { key: "type_id", _style: { width: "20%" } },
    { key: "type", _style: { width: "20%" } },
    { key: "description", _style: { width: "20%" } },
    { key: "edit", _style: { width: "20%" } },
  ];

  const handleEdit = (index) => {};

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Amenities</CCardTitle>
      </CCardHeader>
      <CCardBody>
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
    </CCard>
  );
};

export default Amenities;
