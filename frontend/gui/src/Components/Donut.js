import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Donut = () => {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ],
    labels: ["To Do", "In Progress", "Completed"]
  });

  return (
    
    <Doughnut
      data={data}
      width={250}
      height={250}
      options={{
        responsive: true,
        maintainAspectRatio: false
      }}
    />
  );
};

export default Donut;
