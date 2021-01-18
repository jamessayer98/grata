import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CDataTable } from "@coreui/react";
import { getServices, getService } from "../../redux/actions/services";

const ServicesTable = () => {
  const dispatch = useDispatch();
  const { servicesList } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "5%" } },
    { key: "firstname", _style: { width: "5%" } },
    { key: "lastname", _style: { width: "5%" } },
    { key: "category", _style: { width: "15%" } },
    { key: "subject", _style: { width: "25%" } },
    { key: "status", _style: { width: "10%" } },
    { key: "create_date", _style: { width: "15%" } },
    { key: "update_date", _style: { width: "15%" } },
    { key: "time_slot", _style: { width: "5%" } },
  ];

  return (
    <CCard>
      <CCardBody className="services-table">
        <CDataTable
          items={servicesList}
          fields={fields}
          columnFilter
          itemsPerPage={5}
          hover
          sorter
          pagination
          onRowClick={(item, index, col, e) => {
            dispatch(getService({ id: item.id }));
          }}
          onPageChange={(val) => console.log("new page:", val)}
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
