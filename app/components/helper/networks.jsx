import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";

const Networks = ({ type }) => {
  if (!classes?.[type]) return null;

  return (
    <>
      <Link
        aria-label="network-github"
        href={personalData.github}
        target="_blank no-referrer no-opener"
        className={classes[type].link}
      >
        <BsGithub size={classes[type].size} className={classes[type].icon} />
      </Link>
      <Link
        aria-label="network-linkedIn"
        href={personalData.linkedIn}
        target="_blank no-referrer no-opener"
        className={classes[type].link}
      >
        <BsLinkedin size={classes[type].size} className={classes[type].icon} />
      </Link>
      <Link
        aria-label="network-facebook"
        href={personalData.facebook}
        target="_blank no-referrer no-opener"
        className={classes[type].link}
      >
        <FaFacebook size={classes[type].size} className={classes[type].icon} />
      </Link>
    </>
  );
};

export default Networks;

const classes = {
  hero: {
    link: "transition-all text-pink-500 hover:scale-125 duration-300",
    icon: "",
    size: 30,
  },
  contact: {
    link: "",
    icon: "bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer",
    size: 48,
  },
};
