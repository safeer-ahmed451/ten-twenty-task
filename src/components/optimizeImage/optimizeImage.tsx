"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { OptimizeImageProps } from "@/types";

const OptimizeImage = ({
  src = "",
  alt = "",
  className = "",
}: OptimizeImageProps) => {
  return (
    <Image
      priority
      className={styles.optimizeImage + " " + className}
      fill
      src={src}
      alt={alt}
    />
  );
};

export default OptimizeImage;
