import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";

const CarouselComponent = ({ dots, SlidesData }) => {
    const navigate = useNavigate();

    const navigateToNextPage = (path, state) => {
        path ? navigate(path, state) : navigate('/');
    };

    const NextArrow = ({ onClick }) => {
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    color: "black",
                    zIndex: 1,
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    color: "black",
                    zIndex: 1,
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>
        );
    };

    const settings = {
        dots: true,  // Show dots below the carousel
        infinite: true,  // Looping
        speed: 2000,  // Transition speed
        slidesToShow: 5,  // Show 5 slides at a time
        slidesToScroll: 1,  // Scroll one slide at a time
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000,  // Interval between slides in autoplay mode
        centerMode: true,  // Enable centering
        centerPadding: '20px',  // Adjust padding for centered items
        nextArrow: <NextArrow />,  // Add custom next arrow
        prevArrow: <PrevArrow />,  // Add custom previous arrow
        responsive: [
            {
                breakpoint: 900,  // For screens wider than 900px
                settings: {
                    slidesToShow: 3,  // Show 3 slides at a time
                    slidesToScroll: 1,  // Scroll one slide at a time
                    autoplay: true,  // Enable autoplay
                    autoplaySpeed: 2000,  // Interval between slides in autoplay mode
                    centerPadding: '15px',  // Adjust padding for centered items
                },
            },
            {
                breakpoint: 480,  // For screens narrower than 480px
                settings: {
                    slidesToShow: 1,  // Show 1 slide at a time
                    autoplay: true,  // Enable autoplay
                    autoplaySpeed: 2000,  // Interval between slides in autoplay mode
                    slidesToScroll: 1,  // Scroll one slide at a time
                    centerPadding: '10px',  // Adjust padding for centered items
                },
            },
        ],
    };

    return (
        <div style={{ width: '90vw', margin: '0 auto', position: 'relative' }}>
            <Slider {...settings}>
                {SlidesData.map((e, i) => (
                    <Stack sx={{ width: '100%', justifyContent: 'center' }} key={i}>
                        <CategoryCard
                            CategoryImage={e.image}
                            CategoryName={e.name}
                            CategoryId={e.code}
                        />
                    </Stack>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
