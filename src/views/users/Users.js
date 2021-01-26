import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CCardHeader, CCardTitle, CCardBody, CButton, CCard } from "@coreui/react";
import EditUser from "./EditUser";
import UsersTable from "./UsersTable";

const Users = () => {
  const [handleEditModal, setHandleEditModal] = useState(false);
  const history = useHistory();

  const handleAddUser = () => {
    history.push("/users/adduser");
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Users</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton onClick={handleAddUser} color="primary" className="mb-2">
          + Add User
        </CButton>
        <UsersTable setHandleEditModal={setHandleEditModal} />
        <EditUser handleEditModal={handleEditModal} setHandleEditModal={setHandleEditModal} />
      </CCardBody>
    </CCard>
  );
};

export default Users;
