import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomBuildings, getBuilding } from "../../../redux/actions/building";
import {
  CCard,
  CCardTitle,
  CCardHeader,
  CCardBody,
  CButton,
  CDataTable,
  CRow,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { useHistory } from "react-router-dom";

const Building = () => {
  const { buildings } = useSelector((state) => state.building);
  const { customer } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!customer.id) history.push("/properties/customer");
  }, [customer, history]);

  useEffect(() => {
    if (customer && customer.id) {
      dispatch(getCustomBuildings({ id: customer.id }));
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

  const handleAdd = (index) => {
    history.push("/properties/building/add");
  };

  const handleEdit = (index) => {
    dispatch(getBuilding(buildings[index]));
    history.push("/properties/building/edit");
  };

  const handleRemove = () => {};

  const handleRowClick = (item, index, col, e) => {
    if (col !== "edit") {
      dispatch(getBuilding(buildings[index]));
      history.push("/properties/unit");
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
          items={buildings}
          fields={fields}
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          onRowClick={handleRowClick}
          scopedSlots={{
            index: (item, index) => {
              return <td>{index + 1}</td>;
            },
            edit: (item, index) => {
              return (
                <td>
                  <CRow className="">
                    <CCol col="6" className="text-right">
                      <CButton onClick={() => handleEdit(index)} size="sm" color="info">
                        <CIcon content={freeSet.cilPencil} />
                      </CButton>
                    </CCol>
                    <CCol col="6" className="text-left">
                      <CButton onClick={() => handleRemove(index)} size="sm" color="danger">
                        <CIcon content={freeSet.cilTrash} />
                      </CButton>
                    </CCol>
                  </CRow>
                </td>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default Building;
