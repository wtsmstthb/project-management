"use client";

import {
  Project,
  Task,
  useGetProjectsQuery,
  useGetTasksQuery,
} from "@/app/state/api";
import React, { useState } from "react";
import { useAppSelector } from "../redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "@/components/Header";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";




const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

type ChartName =
  | "Priority Bar"
  | "Priority Donut"
  | "Priority Trend"
  | "Priority Radar"
  | "Project Status";

const taskColumns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "priority", headerName: "Priority", width: 150 },
  { field: "dueDate", headerName: "Due Date", width: 150 },
];

const priorityLevels = ["Urgent", "High", "Medium", "Low"] as const;
type PriorityLevel = typeof priorityLevels[number];

export default function HomePage() {
  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useGetTasksQuery({ projectId: 1 });
  const {
    data: projects,
    isLoading: projectsLoading,
    isError: projectsError,
  } = useGetProjectsQuery();

  const isDark = useAppSelector((s) => s.global.isDarkMode);

  const [openCharts, setOpenCharts] = useState<Set<ChartName>>(new Set());

  const toggleChart = (chartKey: ChartName) => {
    setOpenCharts((prev) => {
      const updated = new Set(prev);
      updated.has(chartKey) ? updated.delete(chartKey) : updated.add(chartKey);
      return updated;
    });
  };

  if (tasksLoading || projectsLoading) return <div>Loading...</div>;
  if (tasksError || projectsError || !tasks || !projects)
    return <div>Error loading data</div>;

  const counts: Record<PriorityLevel, number> =
    Object.fromEntries(priorityLevels.map((lvl) => [lvl, 0])) as any;
  tasks.forEach((t) => {
    const p = t.priority as PriorityLevel;
    if (counts[p] !== undefined) counts[p]++;
  });

  const priorityData = priorityLevels.map((lvl) => ({
    name: lvl,
    count: counts[lvl],
  }));

  const trendData = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(Date.now() - (6 - i) * 86400000);
    const day = date.toISOString().slice(5, 10);
    return {
      day,
      Urgent: Math.floor(Math.random() * 3),
      High: Math.floor(Math.random() * 5),
      Medium: Math.floor(Math.random() * 4),
      Low: Math.floor(Math.random() * 2),
    };
  });

  const radarData = priorityLevels.map((lvl) => ({
    metric: lvl,
    value: counts[lvl],
  }));

  const statusCounts = { Active: 0, Completed: 0 };
  projects.forEach((p) => {
    const key = p.endDate ? "Completed" : "Active";
    statusCounts[key]++;
  });
  const statusData = Object.entries(statusCounts).map(([name, count]) => ({
    name,
    count,
  }));

  const chartColors = isDark
    ? { grid: "#303030", text: "#FFFFFF" }
    : { grid: "#E0E0E0", text: "#000000" };

  const ChartPanel = ({
    title,
    chartKey,
    children,
  }: {
    title: string;
    chartKey: ChartName;
    children: React.ReactNode;
  }) => {
    const isOpen = openCharts.has(chartKey);
    return (
      <div className="rounded-lg bg-white shadow dark:bg-dark-secondary transition-all">
        <div
          onClick={() => toggleChart(chartKey)}
          className="cursor-pointer select-none px-4 py-2 text-lg font-semibold dark:text-white border-b border-gray-200 dark:border-gray-700"
        >
          {title}
        </div>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <Header name="Project Management Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Row 1 */}
        <ChartPanel title="Task Priority Bar Chart" chartKey="Priority Bar">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="name" stroke={chartColors.text} />
              <YAxis stroke={chartColors.text} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count">
                {priorityData.map((e, i) => (
                  <Cell
                    key={i}
                    fill={
                      e.name === "Urgent"
                        ? "#dc2626"
                        : e.name === "High"
                        ? "#f97316"
                        : e.name === "Medium"
                        ? "#facc15"
                        : "#34d399"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartPanel>

        <ChartPanel title="Task Priority Donut Chart" chartKey="Priority Donut">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="count"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
                label
              >
                {priorityData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartPanel>

        {/* Row 2 */}
        <ChartPanel title="Priority Radar Chart" chartKey="Priority Radar">
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <Radar
                name="Tasks by Priority"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.5}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </ChartPanel>

        <ChartPanel title="Project Status Pie Chart" chartKey="Project Status">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="count"
                nameKey="name"
                label
                outerRadius={80}
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartPanel>
      </div>

      {/* Row 3 (full-width) */}
      <div className="mt-4">
        <ChartPanel title="Task Priority Trend (Line)" chartKey="Priority Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="day" stroke={chartColors.text} />
              <YAxis stroke={chartColors.text} />
              <Tooltip />
              <Legend />
              {priorityLevels.map((lvl, idx) => (
                <Line
                  key={lvl}
                  type="monotone"
                  dataKey={lvl}
                  stroke={COLORS[idx % COLORS.length]}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartPanel>
      </div>

      {/* Data Table */} 
      <div className="mt-6 rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
        <h3 className="mb-4 text-lg font-semibold dark:text-white">
          Your Tasks
        </h3>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={tasks}
            columns={taskColumns}
            checkboxSelection
            loading={tasksLoading}
            className={dataGridClassNames}
            sx={dataGridSxStyles(isDark)}
          />
        </div>
      </div>
    </div>
  );
}
