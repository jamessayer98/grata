import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CButton, CDataTable, CCard, CCardBody, CCardHeader, CCardTitle } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { getOffers, filterOffers } from "../../redux/actions/offers";

const Offers = () => {
  const dispatch = useDispatch();
  const { offers } = useSelector((state) => state.offers);

  // useEffect(() => {
  //   getOffers();
  // }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "building_id", _style: { width: "10%" } },
    { key: "category_id", _style: { width: "10%" } },
    { key: "title", _style: { width: "10%" } },
    { key: "content", _style: { width: "10%" } },
    { key: "media", _style: { width: "10%" } },
    { key: "expire_date", _style: { width: "15%" } },
    { key: "create_date", _style: { width: "15%" } },
    { key: "edit", _style: { width: "10%" } },
  ];

  const handleEdit = (index) => {};

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Offers</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          items={offers}
          fields={fields}
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          onFilteredItemsChange={(val) => dispatch(filterOffers(val))}
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

export default Offers;
