"use client";

import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="section bg-theme-dark"
    >
      <div className="container text-center">
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <Social source={social} className="social-icons mb-8" />
        {markdownify(copyright, "p", "text-light")}
      </div>
    </motion.footer>
  );
};

export default Footer;
