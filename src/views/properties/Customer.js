import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CCardBody, CButton, CDataTable, CRow, CCol } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getCustomer } from "../../redux/actions/customer";
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
    { key: "name", _style: { width: "10%" } },
    { key: "email", _style: { width: "20%" } },
    { key: "contact", _style: { width: "20%" } },
    { key: "create_date", _style: { width: "20%" } },
    { key: "edit", _style: { width: "20%" } },
  ];

  const handleAdd = () => {
    history.push("/properties/customer/add");
  };

  const handleEdit = (index) => {
    dispatch(getCustomer(customers[index]));
    history.push("/properties/customer/edit");
  };

  const handleRemove = (index) => {
    // dispatch(getCustomer(customers[index]));
  };

  return (
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
        scopedSlots={{
          index: (item, index) => {
            return <td>{index + 1}</td>;
          },
          edit: (item, index) => {
            return (
              <td>
                <CRow className="">
                  <CCol col="6" className="text-right">
                    <CButton
                      onClick={() => handleEdit(index)}
                      size="sm"
                      color="info"
                    >
                      <CIcon content={freeSet.cilPencil} />
                    </CButton>
                  </CCol>
                  <CCol col="6" className="text-left">
                    <CButton
                      onClick={() => handleRemove(index)}
                      size="sm"
                      color="danger"
                    >
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
  );
};

export default Customer;