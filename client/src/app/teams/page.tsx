"use client";
import { useGetTeamsQuery } from "@/app/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import Header from "@/components/Header";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  { field: "productOwnerUsername", headerName: "Product Owner", width: 200 },
  { field: "projectManagerUsername", headerName: "Project Manager", width: 200 },
];

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Teams");

    worksheet.columns = [
      { header: "Team ID", key: "id", width: 10 },
      { header: "Team Name", key: "teamName", width: 30 },
      { header: "Product Owner", key: "productOwnerUsername", width: 30 },
      { header: "Project Manager", key: "projectManagerUsername", width: 30 },
    ];

    worksheet.addRows(teams || []);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "teams.xlsx");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !teams) return <div>Error fetching teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
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
          rows={teams || []}
          columns={columns}
          pagination
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Teams;
