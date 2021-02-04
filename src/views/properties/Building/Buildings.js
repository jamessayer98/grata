import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditBuilding from "./EditBuilding";
import { getBuildings, getBuilding, filterBuildings } from "../../../redux/actions/building";
import { CCard, CCardTitle, CCardHeader, CCardBody, CButton, CDataTable } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const Buildings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { buildings } = useSelector((state) => state.building);
  const { customer } = useSelector((state) => state.customer);
  const [handleBuildingModal, setHandleBuildingModal] = useState(false);

  useEffect(() => {
    if (customer && customer.id) {
      dispatch(getBuildings({ id: customer.id }));
    }
  }, [customer, dispatch]);

  const fields = [
    { key: "index", _style: { width: "5%" } },
    { key: "name", _style: { width: "10%" } },
    { key: "address", _style: { width: "20%" } },
    { key: "city", _style: { width: "10%" } },
    { key: "state", _style: { width: "10%" } },
    { key: "country", _style: { width: "15%" } },
    { key: "zip", _style: { width: "10%" } },
    { key: "create_date", _style: { width: "10%" } },
    { key: "edit", _style: { width: "10%" } },
  ];

  const handleAdd = () => {
    history.push("/properties/building/add");
  };

  const handleEdit = (index) => {
    dispatch(getBuilding(buildings[index]));
    setHandleBuildingModal(true);
  };

  const handleRowClick = (item, index, col, e) => {
    if (col !== "edit") {
      dispatch(getBuilding(buildings[index]));
      history.push("/properties/unit&amenities");
    }
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Building</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAdd} color="primary" className="mb-2">
          + Add Building
        </CButton>
        <CDataTable
          items={buildings || []}
          fields={fields}
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          onFilteredItemsChange={(val) => dispatch(filterBuildings(val))}
          onRowClick={handleRowClick}
          scopedSlots={{
            index: (item, index) => {
              return <td>{index + 1}</td>;
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
      <EditBuilding
        handleBuildingModal={handleBuildingModal}
        setHandleBuildingModal={setHandleBuildingModal}
      />
    </CCard>
  );
};

export default Buildings;
