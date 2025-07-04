"use client";
import { useGetUsersQuery } from "@/app/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import Header from "@/components/Header";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import Image from "next/image";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 100 },
  { field: "username", headerName: "Username", width: 150 },
  {
    field: "profilePictureUrl",
    headerName: "Profile Picture",
    width: 100,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-9 w-9">
          <Image
            src={`https://pm-s3-images.s3.us-east-2.amazonaws.com/${params.value}`}
            alt={params.row.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
];

const Users = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    worksheet.columns = [
      { header: "User ID", key: "userId", width: 10 },
      { header: "Username", key: "username", width: 30 },
      { header: "Profile Picture", key: "profilePictureUrl", width: 50 },
    ];

    worksheet.addRows(users || []);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "users.xlsx");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>Error fetching users</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Users" />
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleExport}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Export to Excel
        </button>
      </div>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={users || []}
          columns={columns}
          getRowId={(row) => row.userId}
          pagination
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Users;
