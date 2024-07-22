import React from "react";
import Button from "../ui/Button";
import { PiHandWavingBold } from "react-icons/pi";
import TitleTwo from "../ui/TitleTwo";

export default function Contact() {
  return (
    <div
      id="contact"
      className="pt-20 w-full flex flex-col items-center gap-10">
      <TitleTwo name="Get in Touch" />
      <p className="w-3/5 text-center text-slate text-lg">
        If you have any questions or concerns, please don&rsquo;t hesitate to
        contact me. I am open to any work opportunities that align with my
        skills and interests.
      </p>
      <Button
        link="mailto:bijeng695@gmail.com"
        name="Send Greetings"
        icon={<PiHandWavingBold />}
      />
    </div>
  );
}
