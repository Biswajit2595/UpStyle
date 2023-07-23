import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  VStack,
  HStack,
  Heading,
  Divider,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import { useSearchParams } from "react-router-dom";


export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialColor = searchParams.getAll("Brand");
  const initialOrder = searchParams.get("order");
  const initialCategory = searchParams.getAll("Category");

  const [brand, setBrand] = useState(initialColor || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    const params: any = {
      Brand: brand,
      Category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [brand, category, order]);

  const handlebrand = (e: any) => {
    const { value } = e.target;
    let newBrand = [...brand];

    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => {
        return el !== value;
      });
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleCategory = (e: any) => {
    const { value } = e.target;
    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => {
        return el !== value;
      });
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);
  };

  const handleSort = (e: any) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };

  console.log(brand);
  console.log(category);

  const handleClick = () => {
    setBrand([]);

    setCategory([]);
    setOrder("");
  };

  return (
    <VStack p={4} spacing={4} align="stretch" maxW="300px">
      {((order)||(brand.length>0)||(category.length>0))?
      <Button
        onClick={handleClick}
        variant="outline"
        size="md"
        background="#DE6737"
        _hover={{bg:"#DE6737"}}
      >
        Clear All
      </Button>
      :""}

      <Heading fontSize="md" fontWeight="bold" color="black">
        Filter By Brand
      </Heading>
      <VStack align="start">
        <Checkbox
          value="Puma"
          isChecked={brand.includes("Puma")}
          onChange={handlebrand}
        >
          Puma
        </Checkbox>
        <Checkbox
          value="Addidas"
          isChecked={brand.includes("Addidas")}
          onChange={handlebrand}
        >
          Addidas
        </Checkbox>
        <Checkbox
          value="Nike"
          isChecked={brand.includes("Nike")}
          onChange={handlebrand}
        >
          Nike
        </Checkbox>
        <Checkbox
          value="Raymonds"
          isChecked={brand.includes("Raymonds")}
          onChange={handlebrand}
        >
          Raymonds
        </Checkbox>
      </VStack>

      <Divider />

      <Heading fontSize="md" fontWeight="bold">
        Filter By Category
      </Heading>
      <VStack align="start">
        <Checkbox
          value="Jeans"
          isChecked={category.includes("Jeans")}
          onChange={handleCategory}
        >
          Jeans
        </Checkbox>
        <Checkbox
          value="Shirt"
          isChecked={category.includes("Shirt")}
          onChange={handleCategory}
        >
          Shirt
        </Checkbox>
        <Checkbox
          value="Jacket"
          isChecked={category.includes("Jacket")}
          onChange={handleCategory}
        >
          Jacket
        </Checkbox>
        <Checkbox
          value="Shorts"
          isChecked={category.includes("Shorts")}
          onChange={handleCategory}
        >
          Shorts
        </Checkbox>
      </VStack>

      <Divider />

      <Heading fontSize="md" fontWeight="bold">
        Sort by Price
      </Heading>

      <div>
        <input
          type="radio"
          name="order"
          value={"asc"}
          checked={order === "asc"}
          onChange={handleSort}
        />
        <label>Ascending</label>
      </div>
      <div>
        <input
          type="radio"
          name="order"
          value={"desc"}
          checked={order === "desc"}
          onChange={handleSort}
        />
        <label>Descending</label>
      </div>
    </VStack>
  );
};
