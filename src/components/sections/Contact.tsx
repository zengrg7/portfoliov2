import React from "react";
import Button from "../ui/Button";
import { PiHandWavingBold } from "react-icons/pi";
import TitleTwo from "../ui/TitleTwo";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      id="contact"
      className="pt-10 lg:pt-20 flex flex-col items-center gap-10">
      <TitleTwo name="Get in Touch" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px 0px 0px 0px", once: true }}
        className="w-[90%] lg:w-3/5 text-center text-slate text-lg">
        If you have any questions or concerns, please don&rsquo;t hesitate to
        contact me. I am open to any work opportunities that align with my
        skills and interests.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px 0px 0px 0px", once: true }}>
        <Button
          link="mailto:bijeng695@gmail.com"
          name="Send Greetings"
          icon={<PiHandWavingBold />}
        />
      </motion.div>
    </div>
  );
}
