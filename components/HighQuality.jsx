import { Container } from "@mui/material";
import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item/Item";

const HighQuality = ({ data }) => {
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 4,
    navigation: false,
  };

  return (
    <Container>
      <Swiper {...swiperProps}>
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default HighQuality;
