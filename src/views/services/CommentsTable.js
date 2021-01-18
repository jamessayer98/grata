import React from "react";
import { useSelector } from "react-redux";
import { CDataTable } from "@coreui/react";

const CommentsTable = () => {
  const { comments } = useSelector((state) => state.services);

  const fields = [
    { key: "index", _style: { width: "10%" } },
    { key: "first_name", _style: { width: "10%" } },
    { key: "last_name", _style: { width: "10%" } },
    { key: "comment", _style: { width: "45%" } },
    { key: "user_type", _style: { width: "10%" } },
    { key: "create_date", _style: { width: "15%" } },
  ];

  return (
    <CDataTable
      items={comments}
      fields={fields}
      scopedSlots={{
        index: (item, index) => {
          return <td>{index + 1}</td>;
        },
      }}
    />
  );
};

export default CommentsTable;
