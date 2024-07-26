import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import { RenderProductDetails } from "../components/RenderProductDetails";
import { getProductsLimit } from "../services/getProducts";

type Product = {
  id: number;
  images: any;
  title: string;
  discountPercentage: number;
  price: number;
  rating: number;
  category: string;
  description: string;
  stock: number;
};

export const SelectedProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams<{ productId: string }>();
  const id = Number(productId);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const pageIndex = Math.floor((id - 1) / itemsPerPage);
        const skip = pageIndex * itemsPerPage;

        const data = await getProductsLimit(skip, itemsPerPage);

        if (data && data.products) {
          const productIndex = (id - 1) % itemsPerPage;
          const fetchedProduct = data.products[productIndex];
          if (fetchedProduct) {
            setProduct(fetchedProduct);
            Notiflix.Loading.remove();
          } else {
            Notiflix.Notify.failure("Product not found.");
          }
        } else {
          Notiflix.Notify.failure("Failed to fetch products.");
        }
      } catch (error) {
        Notiflix.Notify.failure("Error fetching product details.");
        console.error("Error in fetchProduct:", error);
      }
    }

    Notiflix.Loading.standard();
    fetchProduct();
  }, [id]);

  return product ? <RenderProductDetails product={product} /> : null;
};
