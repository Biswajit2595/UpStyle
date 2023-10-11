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




// import React from 'react';
// import { useSelector } from 'react-redux';
// import { productReducer } from '../Redux/productReducer/productReducer'; // Replace with your actual product type

// interface ProductCategory {
//   Category: string;
//   Stock: number;
//   // Other properties from your product type
// }

// type ReduceType = (accumulator: number, product: ProductCategory) => number;

// const DataAnalytics = () => {
//   const { mens, womens } = useSelector((state: any) => ({
//     womens: state.productReducer.womens,
//     mens: state.productReducer.mens,
//   }));

//   const menData = new Set(mens.map((el: any) => el.Category));
//   const womenData = new Set(womens.map((el: any) => el.Category));
//   const mensCategories: any = Array.from(menData);
//   const womensCategories: any = Array.from(womenData);

//   const totalStockByCategory: { [key: string]: number } = {};

//   mens.forEach((product:any) => {
//     if (totalStockByCategory[product.Category]) {
//       totalStockByCategory[product.Category] += product.Stock;
//     } else {
//       totalStockByCategory[product.Category] = product.Stock;
//     }
//   });
  
//   console.log('Total stock by category:', totalStockByCategory);

// //   console.log(`Total stock for ${targetCategory}: ${totalStockForCategory}`);
//   console.log("Men's Categories", mensCategories);
//   console.log("Women's Categories", womensCategories);
//   console.log("Men's Products", mens);
//   console.log("Women's Products", womens);

//   const chart = {
//     labels: Object.keys(totalStockByCategory),
//     datasets: [
//       {
//         label: 'Total Stock',
//         data: Object.values(totalStockByCategory),
//         backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(54, 162, 235)',
//           'rgb(255, 205, 86)',
//           // You can add more colors as needed
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   };
//   const config={
//     type:"pie",
//     data: chart
//   }


//   return (
//     <div>
//       <h1>Data Analytics</h1>

//     </div>
//   );
// };

// export default DataAnalytics;
