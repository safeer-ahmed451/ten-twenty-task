import React from "react";
import OptimizeImage from "../optimizeImage/optimizeImage";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const clients = [
  {
    image: "/assets/product1.jpg",
    name: "Client 1",
    location: "Dubai, United Arab Emirates",
  },
  {
    image: "/assets/product2.jpg",
    name: "Client 2",
    location: "Doha, Qatar",
  },
  {
    image: "/assets/product3.jpg",
    name: "Client 3",
    location: "Riyadh, Saudi Arabia",
  },
  {
    image: "/assets/product1.jpg",
    name: "Client 3",
    location: "Riyadh, Saudi Arabia",
  },
  {
    image: "/assets/product2.jpg",
    name: "Client 3",
    location: "Riyadh, Saudi Arabia",
  },
  {
    image: "/assets/product3.jpg",
    name: "Client 3",
    location: "Riyadh, Saudi Arabia",
  },
];
export default function Products() {
  return (
    <div className={styles.productsOuter}>
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 1 }}
      >
        <h2>Quality Products</h2>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 1 }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="swiperContainer"
      >
        <Swiper
          className="swiperOuter"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={200}
          autoplay={{
            delay: 3500000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              spaceBetween: 40,
            },
            640: {
              spaceBetween: 60,
            },
            768: {
              spaceBetween: 100,
            },
            1024: {
              spaceBetween: 150,
            },
            1280: {
              spaceBetween: 200,
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {clients.map((client, index) => (
            <SwiperSlide className="swiperSlide" key={index}>
              <div className="slideImg">
                <OptimizeImage
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3>{client.name}</h3>
              <p>{client.location}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </div>
  );
}
