import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CButton,
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { getOffer, getOffers, filterOffers } from "../../redux/actions/offers";

const Offers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { offers } = useSelector((state) => state.offers);
  const [hanldeOfferModal, setHandleOfferModal] = useState(false);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "category", _style: { width: "20%" } },
    { key: "title", _style: { width: "30%" } },
    { key: "media", _style: { width: "10%" } },
    { key: "expires", _style: { width: "20%" } },
    { key: "edit", _style: { width: "10%" } },
  ];

  const handleRowClick = (item, index, col, e) => {
    if (col !== "edit") {
      dispatch(
        getOffer({
          id: offers[index].id,
        })
      );
      history.push(`/offers/${offers[index].id}`);
    }
  };

  const handleAdd = () => {
    history.push("/offers/add");
  };

  const handleEdit = (index) => {};

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Offers</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAdd} color="primary" className="mb-2">
          + Add Offer
        </CButton>
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
          onRowClick={handleRowClick}
          onFilteredItemsChange={(val) => dispatch(filterOffers(val))}
          scopedSlots={{
            index: (item, index) => {
              return <td>{index + 1}</td>;
            },
            media: (item, index) => {
              return (
                <td className="text-center">
                  <CImg src={item.media} width={140} height={90} />
                </td>
              );
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
