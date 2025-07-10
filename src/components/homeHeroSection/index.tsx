"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/assets/heroSilde1.jpg",
    text: "From our Farms to your hands",
  },
  {
    id: 2,
    image: "/assets/heroSilde2.jpg",
    text: "From our Farms to your hands",
  },
  {
    id: 3,
    image: "/assets/heroSilde3.jpg",
    text: "From our Farms to your hands",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black rounded-2xl">
      {/* All slides layered */}
      {slides.map((slide, i) => {
        const isCurrent = i === index;
        const isPrevious = i === prevIndex;

        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={
              isCurrent
                ? { rotateY: 0, opacity: 1, zIndex: 20 }
                : isPrevious
                ? { rotateY: 90, opacity: 0, zIndex: 10 }
                : { opacity: 0, zIndex: 0 }
            }
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transformStyle: "preserve-3d",
              height: "100%",
              width: "100%",
            }}
          />
        );
      })}

      {/* Neon grid overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(#00fff7_1px,transparent_1px)] bg-[size:22px_22px] mix-blend-overlay opacity-10" />

      {/* Black veil */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Caption */}
      <motion.div
        key={`caption-${slides[index].id}`}
        className={styles.caption}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.1 }}
      >
        {slides[index].text}
      </motion.div>

      {/* Next Slide Preview with Time-Based Border */}
      <div
        className={styles.sliderPreview}
        onClick={() => {
          setPrevIndex(index);
          setIndex((prev) => (prev + 1) % slides.length);
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${
              slides[(index + 1) % slides.length].image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            key={`top-${index}`}
            className="absolute top-0 left-0 h-[8px] bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.75, ease: "linear" }}
            style={{ background: "#fff", top: 0, left: 0 }}
          />
          {/* Right border */}
          <motion.div
            key={`right-${index}`}
            className="absolute top-0 right-0 w-[8px] bg-cyan-400"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ delay: 1.75, duration: 1.75, ease: "linear" }}
            style={{ background: "#fff", top: 0, right: 0 }}
          />
          {/* Bottom border */}
          <motion.div
            key={`bottom-${index}`}
            className="absolute bottom-0 right-0 h-[8px] bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 3.5, duration: 1.75, ease: "linear" }}
            style={{ background: "#fff", bottom: 0, right: 0 }}
          />
          {/* Left border */}
          <motion.div
            key={`left-${index}`}
            className="absolute bottom-0 left-0 w-[8px] bg-cyan-400"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ delay: 5.25, duration: 1.75, ease: "linear" }}
            style={{ background: "#fff", bottom: 0, left: 0 }}
          />
        </div>
      </div>
      <div className={styles.slideCounter}>
        {String(index + 1).padStart(2, "0")} <span></span>{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
