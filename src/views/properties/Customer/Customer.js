import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCustomers, getCustomer } from "../../../redux/actions/customer";
import { setUnitFlag } from "../../../redux/actions/unit";
import { CCard, CCardTitle, CCardHeader, CCardBody, CButton, CDataTable } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const Customer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { customers } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "name", _style: { width: "20%" } },
    { key: "email", _style: { width: "20%" } },
    { key: "contact", _style: { width: "20%" } },
    { key: "create_date", _style: { width: "20%" } },
    { key: "edit", _style: { width: "10%" } },
  ];

  const handleAdd = () => {
    history.push("/properties/customer/add");
  };

  const handleEdit = (index) => {
    dispatch(getCustomer(customers[index]));
    history.push("/properties/customer/edit");
  };

  const handleClick = (item, index, col, e) => {
    if (col !== "edit") {
      dispatch(getCustomer(customers[index]));
      dispatch(setUnitFlag(false));
      history.push("/properties/building");
    }
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Customer</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAdd} color="primary" className="mb-2">
          + Add Customer
        </CButton>
        <CDataTable
          items={customers}
          fields={fields}
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          onRowClick={handleClick}
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
    </CCard>
  );
};

export default Customer;
