import React from 'react';
import { useSelector } from 'react-redux';
// import { Doughnut } from 'react-chartjs-2';
import { productReducer } from '../Redux/productReducer/productReducer';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs } from "chart.js/auto"

interface ProductCategory {
  Category: string;
  Stock: number;
  // Other properties from your product type
}

const DataAnalytics = () => {
  const { mens, womens } = useSelector((state: any) => ({
    womens: state.productReducer.womens,
    mens: state.productReducer.mens,
  }));

  const menData = new Set(mens.map((el: any) => el.Category));
  const womenData = new Set(womens.map((el: any) => el.Category));
  const mensCategories: any = Array.from(menData);
  const womensCategories: any = Array.from(womenData);

  const totalStockByCategory: { [key: string]: number } = {};

  mens.forEach((product: any) => {
    if (totalStockByCategory[product.Category]) {
      totalStockByCategory[product.Category] += product.Stock;
    } else {
      totalStockByCategory[product.Category] = product.Stock;
    }
  });

  const chartData = {
    labels: Object.keys(totalStockByCategory),
    datasets: [
      {
        label: 'Total Stock',
        data: Object.values(totalStockByCategory),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          // You can add more colors as needed
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Data Analytics</h1>
      {/* <Pie data={chartData} options={{ responsive: true }}/> */}
      {/* <Doughnut data={chartData} options={{ responsive: true }} /> */}
    </div>
  );
};

export default DataAnalytics;