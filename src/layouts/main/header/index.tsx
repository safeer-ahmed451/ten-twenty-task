"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import OptimizeImage from "@/components/optimizeImage/optimizeImage";
import { usePathname } from "next/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add class when not at top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalize = (path: string) => path.replace(/\/$/, "");
  const isActive = (path: string) => normalize(pathname) === normalize(path);

  const links = [
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/services", label: "Services" },
    { href: "/our-team", label: "Our Team" },
    { href: "/make-enquiry", label: "Make Enquiry" },
  ];

  return (
    <header
      className={`${styles.headerOuter} ${isScrolled ? styles.showHeader : ""}`}
    >
      <nav className={styles.mainNav}>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? styles.active : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact-us"
          className={`${styles.contactUsBtn} ${
            isActive("/contact-us") ? styles.active : ""
          }`}
        >
          Contact us
          <OptimizeImage src="/assets/arrowRight.png" alt="arrow right" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
