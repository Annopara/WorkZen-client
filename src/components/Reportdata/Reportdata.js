import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const events = [
  {
    event_name: "Birthday Party",
    client_name: "John Smith",
    status: "Ongoing",
    due_date: "2024-03-15",
    location: "123 Main Street, Cityville",
    budget: 1500,
    attendance: 50,
  },

  {
    event_name: "Birthday Party",
    client_name: "John Smith",
    status: "Ongoing",
    due_date: "2024-03-15",
    location: "123 Main Street, Cityville",
    budget: 1500,
    attendance: 50,
  },

  {
    event_name: "Birthday Party",
    client_name: "John Smith",
    status: "Ongoing",
    due_date: "2024-03-15",
    location: "123 Main Street, Cityville",
    budget: 1500,
    attendance: 50,
  },
  // Add other objects here
];

function ChartsOverviewDemo() {
  // Calculate total budget
  const totalBudget = events.reduce((total, event) => total + event.budget, 0);

  // Divide total budget into three quarters
  const quarter = totalBudget / 3;

  // Prepare data for the bar chart
  const data = [quarter, quarter, quarter];

  // Define background colors for each quarter
  const bgColors = ["#FFCDD2", "#C5E1A5", "#81D4FA"];

  return (
    <BarChart
      series={[{ data }]}
      height={290}
      xAxis={[
        { data: ["Quarter 1", "Quarter 2", "Quarter 3"], scaleType: "band" },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      // Apply different background colors to each bar
      colors={bgColors}
    />
  );
}

export default ChartsOverviewDemo;
