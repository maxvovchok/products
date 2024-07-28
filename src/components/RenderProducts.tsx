import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
} from "@mui/material";

interface Products {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
}

interface RenderProductsProps {
  products: Products[];
}

export const RenderProducts: React.FC<RenderProductsProps> = ({ products }) => {
  const location = useLocation();
  console.log("productPage", location);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <Link
                to={`/${product.id}`}
                state={{ from: location }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  image={product.thumbnail}
                  alt={product.title}
                  sx={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: 1 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginBottom: 1 }}
                  >
                    {product.category}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 1 }}>
                    {product.brand}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    {product.discountPercentage > 0 && (
                      <Chip
                        label={`-${product.discountPercentage}%`}
                        color="error"
                        sx={{ marginRight: 1 }}
                      />
                    )}
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", flexGrow: 1 }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Rating: {product.rating} ⭐
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
