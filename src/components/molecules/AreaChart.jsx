import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = ({ data, categories, height = 80, colors = ['#71DD37'] }) => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      lineCap: 'round'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.4,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark'
    },
    colors: colors,
    grid: {
      show: false
    }
  };

  const series = [{
    name: 'Orders',
    data: data
  }];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={height}
    />
  );
};

export default AreaChart;
