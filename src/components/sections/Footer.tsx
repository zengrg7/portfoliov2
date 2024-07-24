import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px 0px 0px 0px", once: true }}
      className="pt-10 pb-10 lg:pb-20 flex">
      <p className="text-slate mx-auto">
        Developed by <span className="text-green">Bijen Gurung</span>
      </p>
    </motion.div>
  );
}
