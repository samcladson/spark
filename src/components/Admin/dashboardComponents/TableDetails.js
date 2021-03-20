import React from "react";
import { Table, Typography } from "antd";

const { Text } = Typography;
const TableDetails = ({ todayData }) => {
  const columns = [
    { title: "Name", dataIndex: "Name", width: 120, ellipsis: true },
    { title: "Date", dataIndex: "Date" },
    {
      title: "Status",
      dataIndex: "Status",
      render: (Status) =>
        Status === "Present" ? (
          <Text type="success" style={{ fontWeight: 600 }}>
            {Status}
          </Text>
        ) : (
          <Text type="danger" style={{ fontWeight: 600 }}>
            {Status}
          </Text>
        ),
      filters: [
        { text: "Present", value: "Present" },
        { text: "Absent", value: "Absent" },
      ],
      onFilter: (value, record) => record.Status.indexOf(value) === 0,
    },

    {
      title: "Checkin",
      dataIndex: "Check_in_Time",
      render: (Check_in_Time) =>
        Check_in_Time ? (
          <Text type="success" style={{ fontSize: 12, fontWeight: 600 }}>
            {Check_in_Time}
          </Text>
        ) : (
          "--"
        ),
    },
    {
      title: "Checkout",
      dataIndex: "Check_out_Time",
      render: (Check_out_Time) =>
        Check_out_Time ? (
          <Text type="danger" style={{ fontSize: 12, fontWeight: 600 }}>
            {Check_out_Time}
          </Text>
        ) : (
          "--"
        ),
    },
    {
      title: "Total Hours",
      dataIndex: "Working_Hours",
      render: (Working_Hours) =>
        Working_Hours ? (
          <Text type="secondary" style={{ fontSize: 12, fontWeight: 600 }}>
            {Working_Hours}
          </Text>
        ) : (
          "--"
        ),
    },
  ];
  const data =
    todayData &&
    todayData.todayAttendance.map((key, val) => ({
      key: val,
      ...key,
    }));

  return <Table size="small" dataSource={data} columns={columns} />;
};

export default TableDetails;
