"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/components/homeHeroSection";
import Loading from "@/components/preLoader";
import Products from "@/components/products";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeroBanner />
          <Products />
        </>
      )}
    </>
  );
}
