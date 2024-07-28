import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme, Box } from "@mui/material";

type ProductSliderProps = {
  images: string[];
};

const Arrow = ({
  className,
  style,
  onClick,
  direction,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  direction: "next" | "prev";
}) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "50%",
      color: "white",
      zIndex: 1,
      cursor: "pointer",
      [direction === "next" ? "right" : "left"]: "10px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  />
);

const NextArrow = (props: any) => <Arrow {...props} direction="next" />;
const PrevArrow = (props: any) => <Arrow {...props} direction="prev" />;

export const ProductSlider = ({ images }: ProductSliderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      sx={{
        maxWidth: isMobile ? "278px" : "500px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                maxHeight: "500px",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};
