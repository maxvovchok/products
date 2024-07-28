import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Notiflix from "notiflix";
import { Button, Box, Typography, Container } from "@mui/material";
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

  const location = useLocation();

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

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Link
            to={location.state?.from || "/"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "1rem",
              }}
            >
              Go Back
            </Button>
          </Link>
        </Box>
        {product ? (
          <RenderProductDetails product={product} />
        ) : (
          <Typography variant="h6" color="textSecondary">
            Product not found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};
