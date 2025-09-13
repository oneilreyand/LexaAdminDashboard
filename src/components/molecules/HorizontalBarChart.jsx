import React from "react";
import ReactApexChart from "react-apexcharts";

export function HorizontalBarChart({ data, height = 300 }) {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: "60%",
      },
    },
    colors: data.map((item) => item.color),
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff']
      },
      formatter: function(val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      }
    },
    xaxis: {
      categories: data.map((item) => item.name),
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: "hsl(var(--sidebar-text))",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "hsl(var(--border))",
      strokeDashArray: 3,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    annotations: {
      xaxis: data.map((item) => ({
        x: item.value,
        borderColor: '#ff4560',
        strokeDashArray: 4,
        borderWidth: 2,
        label: {
          borderColor: '#ff4560',
          style: {
            color: '#fff',
            background: '#ff4560',
          },
          text: `${item.value}%`,
        },
      })),
    },
    legend: { show: false },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
      },
    },
  };

  const series = [
    {
      data: data.map((item) => item.value),
    },
  ];

  return (
    <div className="w-full h-full">
      <ReactApexChart options={options} series={series} type="bar" height={height} />
    </div>
  );
}
