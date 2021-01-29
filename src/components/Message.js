import React from "react";
import { useSelector } from "react-redux";
import { CAlert, CRow, CCol } from "@coreui/react";

const Message = (props) => {
  const { comment } = props;
  const { role } = useSelector((state) => state.auth);

  return (
    <CRow>
      {role !== "1" && <CCol xs="4"></CCol>}
      <CCol>
        <CAlert color="dark" style={{ padding: "0.1rem" }}>
          <span className="h6">
            {comment.first_name} {comment.last_name}, {comment.create_date}
          </span>
          <p className="h6">{comment.comment}</p>
        </CAlert>
      </CCol>
    </CRow>
  );
};

export default Message;
