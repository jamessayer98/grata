import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers, getAvatar, filterUsers } from "../../redux/actions/user";
import { CButton, CDataTable } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const UsersTable = (props) => {
  const { setHandleEditModal } = props;
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const fields = [
    { key: "index", _style: { width: "5%" } },
    { key: "first_name", _style: { width: "5%" } },
    { key: "last_name", _style: { width: "5%" } },
    { key: "email", _style: { width: "10%" } },
    { key: "role_id", _style: { width: "10%" } },
    { key: "cell_phone", _style: { width: "10%" } },
    { key: "home_phone", _style: { width: "10%" } },
    { key: "type_id", _style: { width: "10%" } },
    { key: "level", _style: { width: "5%" } },
    { key: "building_id", _style: { width: "5%" } },
    { key: "create_date", _style: { width: "10%" } },
    { key: "edit", _style: { width: "15%" } },
  ];

  const handleEdit = (index) => {
    dispatch(getUser(users[index]));
    dispatch(getAvatar({ id: users[index].avatar }));
    setHandleEditModal(true);
  };

  return (
    <CDataTable
      items={users}
      fields={fields}
      columnFilter
      tableFilter
      cleaner
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      onFilteredItemsChange={(val) => dispatch(filterUsers(val))}
      scopedSlots={{
        index: (item, index) => {
          return <td>{index + 1}</td>;
        },
        role_id: (item) => {
          if (item.role_id === 1) {
            return <td>User</td>;
          } else if (item.role_id === 2) {
            return <td>Manager</td>;
          } else if (item.role_id === 3) {
            return <td>Admin</td>;
          } else {
            return <td>Super Admin</td>;
          }
        },
        type_id: (item) => {
          if (item.type_id === 1) {
            return <td>Resident</td>;
          } else if (item.type_id === 2) {
            return <td>Co-Resident</td>;
          } else if (item.type_id === 3) {
            return <td>Building Manager</td>;
          } else {
            return <td>Admin</td>;
          }
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
  );
};

export default UsersTable;
