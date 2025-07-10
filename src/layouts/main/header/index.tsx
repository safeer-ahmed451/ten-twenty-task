import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import OptimizeImage from "@/components/optimizeImage/optimizeImage";

function Header() {
  return (
    <header className={styles.headerOuter}>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/news"}>News</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          <li>
            <Link href={"/make-enquiry"}>Make Enquiry</Link>
          </li>
        </ul>
        <Link href={"/contact-us"} className={styles.contactUsBtn}>
          Contact us{" "}
          <OptimizeImage src={"/assets/arrowRight.png"} alt={"arrow right"} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
