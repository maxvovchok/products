import {
  Box,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
  Grid,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ProductSlider } from "./ProductSlider";

type ProductDetails = {
  id: number;
  images: string[];
  title: string;
  discountPercentage: number;
  price: number;
  rating: number;
  category: string;
  description: string;
  stock: number;
};

type Props = {
  product: ProductDetails;
};

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      main: "#009688",
    },
    error: {
      main: "#F44336",
    },
  },
});

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? <StarIcon key={i} /> : <StarBorderIcon key={i} />);
  }
  return stars;
};

export const RenderProductDetails = ({ product }: Props) => {
  const {
    images,
    title,
    discountPercentage,
    price,
    rating,
    category,
    description,
    stock,
  } = product;

  const hasDiscount = discountPercentage > 0;
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {images.length > 1 ? (
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <ProductSlider images={images} />
              </Box>
            ) : (
              <img
                src={images[0]}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  maxHeight: "600px",
                }}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 2, color: "text.primary" }}>
              {title}
            </Typography>
            <Paper
              sx={{
                padding: 2,
                mb: 3,
                bgcolor: "background.paper",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              {hasDiscount && (
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "text.primary",
                      textDecoration: "line-through",
                      fontSize: "0.9rem",
                    }}
                  >
                    ${price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "error.main",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    ${discountedPrice}
                  </Typography>
                </>
              )}
              {!hasDiscount && (
                <Typography variant="body1" sx={{ color: "text.primary" }}>
                  ${price.toFixed(2)}
                </Typography>
              )}
              <Divider sx={{ my: 1 }} />
              <Typography
                variant="body1"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                {renderStars(rating)}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography
                variant="body1"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                {category}
              </Typography>
              <Divider sx={{ my: 1 }} />
              {hasDiscount && (
                <>
                  <Typography
                    variant="body1"
                    sx={{ mb: 1, color: "text.secondary" }}
                  >
                    -{discountPercentage}%
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </>
              )}
              <Typography
                variant="body1"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                {stock} in stock
              </Typography>
            </Paper>
            <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
              <strong>Description:</strong> {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
