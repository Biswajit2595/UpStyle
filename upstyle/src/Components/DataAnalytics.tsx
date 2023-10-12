import React from 'react';
import { useSelector } from 'react-redux';
// import { Doughnut } from 'react-chartjs-2';
import { productReducer } from '../Redux/productReducer/productReducer';
import { Pie,Doughnut, Radar, PolarArea, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from "chart.js/auto"
import { CategoryScale, Chart, registerables } from "chart.js";
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

// interface ProductCategory {
//   Category: string
//   Stock: number
//   // Other properties from your product type
// }
Chart.register(CategoryScale);
Chart.register(...registerables);

const DataAnalytics = () => {
  const { mens, womens } = useSelector((state: any) => ({
    womens: state.productReducer.womens,
    mens: state.productReducer.mens,
  }));

  const menData = new Set(mens.map((el: any) => el.Category));
  const womenData = new Set(womens.map((el: any) => el.Category));
  const mensCategories: any = Array.from(menData);
  const womensCategories: any = Array.from(womenData);

  const totalStockByCategoryMen: { [key: string]: number } = {};
  const totalStockByCategoryWomen: { [key: string]: number } = {};

  mens.forEach((product: any) => {
    if (totalStockByCategoryMen[product.Category]) {
      totalStockByCategoryMen[product.Category] += product.Stock;
    } else {
      totalStockByCategoryMen[product.Category] = product.Stock;
    }
  });

  womens.forEach((product: any) => {
    if (totalStockByCategoryWomen[product.Category]) {
      totalStockByCategoryWomen[product.Category] += product.Stock;
    } else {
      totalStockByCategoryWomen[product.Category] = product.Stock;
    }
  });

  const chartMen = {
    labels: Object.keys(totalStockByCategoryMen),
    datasets: [
      {
        label: 'Total Stock',
        data: Object.values(totalStockByCategoryMen),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(159, 55, 69)',
          // You can add more colors as needed
        ],
      },
    ],
  };
  const chartWomen = {
    labels: Object.keys(totalStockByCategoryWomen),
    datasets: [
      {
        label: 'Total Stock',
        data: Object.values(totalStockByCategoryWomen),
        backgroundColor: [
          'rgb(247, 34, 80)',
          'rgb(252, 39, 195)',
          'rgba(222, 155, 0, 0.895)',
          'rgb(20, 235, 217)',
          // You can add more colors as needed
        ],
      },
    ],
  };

  const chartWidth = useBreakpointValue({ base: '100%', sm: '50%', md: '50%', lg: '30%' });
  return (
      <Box p="10" borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md">
            <Heading as="h1" size="xl" textAlign="center" mb="4">
              Product Analytics
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" flexWrap="wrap" align="center">
              <Box width={chartWidth} mb="4">
                <Heading as="h2" size="lg" mb="2">
                  Men's Product in Stock
                </Heading>
                <PolarArea data={chartMen} options={{ responsive: true }} />
              </Box>
              <Box width={chartWidth} mb="4">
                <Heading as="h2" size="lg" mb="2">
                  Women's Product in Stock
                </Heading>
                <PolarArea data={chartWomen} options={{ responsive: true }} />
              </Box>
            </Flex>
          </Box>
  );
};

export default DataAnalytics;