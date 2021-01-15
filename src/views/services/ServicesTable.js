import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CCard,
  CCardBody,
  CButton,
  CDataTable,
  CRow,
  CCol,
} from "@coreui/react";
import { getServices } from "../../redux/actions/services";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const ServicesTable = () => {
  const dispatch = useDispatch();
  const { servicesList } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, []);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "firstname", _style: { width: "15%" } },
    { key: "lastname", _style: { width: "15%" } },
    { key: "category", _style: { width: "15%" } },
    { key: "subject", _style: { width: "15%" } },
    { key: "status", _style: { width: "10%" } },
    { key: "create_date", _style: { width: "20%" } },
  ];

  return (
    <CCard>
      <CCardBody className="services-table">
        <CDataTable
          items={servicesList}
          fields={fields}
          columnFilter
          // tableFilter
          // cleaner
          // itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          // loading
          // onRowClick={(item,index,col,e) => console.log(item,index,col,e)}
          // onPageChange={(val) => console.log('new page:', val)}
          // onPagesChange={(val) => console.log('new pages:', val)}
          // onPaginationChange={(val) => console.log('new pagination:', val)}
          // onFilteredItemsChange={(val) => console.log('new filtered items:', val)}
          // onSorterValueChange={(val) => console.log("new sorter value:", val)}
          // onTableFilterChange={(val) => console.log('new table filter:', val)}
          // onColumnFilterChange={(val) => console.log('new column filter:', val)}
          scopedSlots={{
            index: (item, index) => {
              return <td>{index + 1}</td>;
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default ServicesTable;
