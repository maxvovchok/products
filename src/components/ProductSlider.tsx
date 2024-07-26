import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProductSliderProps = {
  images: string[];
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
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
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    ></div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
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
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    ></div>
  );
};

export const ProductSlider = ({ images }: ProductSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
