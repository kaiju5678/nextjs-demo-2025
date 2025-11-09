"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {

    try {
      const res = await fetch("https://dummyjson.com/products")

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const allProduct = await res.json();
      setProducts(allProduct.products);
      setFilteredProducts(allProduct.products);

    } catch (error) {
      setProducts([]);
      setFilteredProducts([]);
      console.error("Error fetching products:", error);
    }

  }
  console.log("--[products]--", products);
  console.log("--[filteredProducts]--", filteredProducts);

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (Text) => {
    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(Text.toLowerCase()));
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <Header />
      <FormComponent onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {filteredProducts.map((item) => (
          <div key={item.id} className="flex flex-col items-center border border-gray-300 rounded-3xl hover:shadow-lg cursor-pointer"
            onClick={() => router.push(`/products/${item.id}`)}>
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.name}</h2>
            <p className="text-[16px] font-bold">{item.title}</p>
            <p className="text-[16px] ">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}