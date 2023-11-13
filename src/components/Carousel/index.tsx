import React, { CSSProperties, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../../styles/carousel.module.css";

import { Navigation, Pagination } from "swiper";
import { ContinentImage } from "../ContinentImage";






export function Carousel() {

  const dados = [
    {
      id: 1,
      urlImage: 'europa.png',
      link: 'europa',
      name: 'Europa',
      description: 'O Continente mais antigo'
    },
    {
      id: 2,
      urlImage: 'africa.jpg',
      link: 'africa',
      name: 'Africa',
      description: 'O terceiro continente mais extenso'
    },
    {
      id: 3,
      urlImage: 'asia.jpg',
      link: 'asia',
      name: 'Asia',
      description: 'O maior dos continentes'
    },
  ]


  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
        } as CSSProperties}
        navigation={true} pagination={true} modules={[Navigation, Pagination]} className={styles.swiper}>

        {dados.map(dado => {
          return (
            <SwiperSlide key={dado.id}><ContinentImage urlImage={dado.urlImage} link={dado.link} name={dado.name} description={dado.description} /></SwiperSlide>
          )
        })}


      </Swiper>
    </>
  );
}