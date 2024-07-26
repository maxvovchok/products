import { useState, useEffect } from "react";
import { getProductsLimit } from "../services/getProducts";

export const usePagination = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchLimitedProducts(skip: number, limit: number) {
      const data = await getProductsLimit(skip, limit);
      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      }
    }
    fetchLimitedProducts((currentPage - 1) * itemsPerPage, itemsPerPage);
  }, [itemsPerPage, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    products,
    nextPage,
    prevPage,
    goToPage,
  };
};
