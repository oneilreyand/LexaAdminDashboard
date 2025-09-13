import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ data, labels, height = 300, colors = ['#9155fd', '#7183e8', '#10B981', '#F59E0B', '#EF4444'] }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    colors: colors,
    legend: {
      position: 'bottom'
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = data;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      height={height}
    />
  );
};

export default PieChart;
