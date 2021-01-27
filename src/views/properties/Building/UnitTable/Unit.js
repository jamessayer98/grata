import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomUnits } from "../../../../redux/actions/unit";
import { CCard, CCardHeader, CCardBody, CButton, CDataTable, CCardTitle } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import { getUnit } from "../../../../redux/actions/unit";

const Unit = () => {
  const { building } = useSelector((state) => state.building);
  const { units } = useSelector((state) => state.unit);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (building && building.id) {
      dispatch(getCustomUnits({ id: building.id }));
    }
  }, [dispatch, building]);

  const fields = [
    { key: "index", _style: { width: "5%" } },
    { key: "building_id", _style: { width: "10%" } },
    { key: "unit_num", _style: { width: "10%" } },
    { key: "bedrooms", _style: { width: "20%" } },
    { key: "bathrooms", _style: { width: "10%" } },
    { key: "area", _style: { width: "15%" } },
    { key: "owned", _style: { width: "10%" } },
    { key: "create_date", _style: { width: "10%" } },
    { key: "edit", _style: { width: "10%" } },
  ];

  const handleAdd = () => {
    history.push("/properties/unit/add");
  };

  const handleEdit = (index) => {
    dispatch(getUnit(units[index]));
    history.push("/properties/unit/edit");
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Units</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAdd} color="primary" className="mb-2">
          + Add Unit
        </CButton>
        <CDataTable
          items={units}
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

export default Unit;
