import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialChart = ({ value, label, height = 200, color = '#9155fd' }) => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: color,
            offsetY: 10,
            formatter: function (val) {
              return val + '%'
            }
          }
        }
      }
    },
    colors: [color],
    labels: [label],
  };

  const series = [value];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={height}
    />
  );
};

export default RadialChart;
