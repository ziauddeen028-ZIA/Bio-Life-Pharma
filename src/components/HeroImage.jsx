import React from "react";
import { motion } from "motion/react";
import heroImg from "../assets/images/Hero-img.png";

export default function HeroImage() {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={heroImg}
        alt="Pharmaceutical Healthcare Background"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />

      {/* Green overlay for better readability */}
      <div className="absolute inset-0 bg-emerald-900/50"></div>

    </div>
  );
}

