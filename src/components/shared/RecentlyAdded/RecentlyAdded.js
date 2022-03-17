import React from "react";
import Slider from "react-slick";
import CardProduct from "../CardProduct/CardProduct";

function RecentlyAdded() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div>
      <h3>Recently Added</h3>
      <Slider {...settings}>
        {new Array(10).fill(10).map((e) => (
          <CardProduct />
        ))}
      </Slider>
    </div>
  );
}

export default RecentlyAdded;
