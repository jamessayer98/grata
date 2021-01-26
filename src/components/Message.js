import React from "react";
import { CAlert, CRow, CCol } from "@coreui/react";

const Message = (props) => {
  const { comment } = props;

  return (
    <CRow>
      {comment.user_type === "Resident" && <CCol xs="4"></CCol>}

      <CCol>
        <CAlert color="dark" style={{ padding: "0.1rem" }}>
          <span className="h10">
            {comment.first_name} {comment.last_name}, {comment.create_date}
          </span>
          <p className="h6">{comment.comment}</p>
        </CAlert>
      </CCol>
    </CRow>
  );
};

export default Message;
