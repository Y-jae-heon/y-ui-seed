"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 400,
      duration: 1000,
    });
  }, []);

  return <></>;
}
