import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";

function ChartsOverviewDemo() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/events`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Ensure events have been fetched before rendering the chart
  if (events.length === 0) return null;

  // Sort events by due_date
  events.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

  // Divide events into quarters
  const firstQuarterEvents = events.filter(
    (event) => new Date(event.due_date).getMonth() < 3
  );
  const secondQuarterEvents = events.filter(
    (event) =>
      new Date(event.due_date).getMonth() >= 3 &&
      new Date(event.due_date).getMonth() < 6
  );
  const thirdQuarterEvents = events.filter(
    (event) =>
      new Date(event.due_date).getMonth() >= 6 &&
      new Date(event.due_date).getMonth() < 9
  );

  // Calculate total budget for each quarter
  const firstQuarterBudget = firstQuarterEvents.reduce(
    (total, event) => total + parseFloat(event.budget),
    0
  );
  const secondQuarterBudget = secondQuarterEvents.reduce(
    (total, event) => total + parseFloat(event.budget),
    0
  );
  const thirdQuarterBudget = thirdQuarterEvents.reduce(
    (total, event) => total + parseFloat(event.budget),
    0
  );

  // Prepare data for the bar chart
  const data = [firstQuarterBudget, secondQuarterBudget, thirdQuarterBudget];

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
