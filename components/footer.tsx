"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "./icon";
import { Button } from "./ui/button";

const footerAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background dark:bg-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-0" />
      </div>

      <motion.div
        className="container relative mx-auto"
        variants={footerAnimations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between backdrop-blur-sm bg-white/80 dark:bg-transparent rounded-2xl border border-zinc-200 dark:border-gray-800/10 p-8"
          variants={footerAnimations.item}
        >
          <motion.div className="mb-8 md:mb-0" variants={footerAnimations.item}>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.img
                src="/logomain.png"
                width={25}
                height={25}
                alt="logo"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h2
                className="text-lg font-bold text-zinc-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Lumina UI
              </motion.h2>
            </Link>
            <div className="mt-2">
              <Link href="https://x.com/compose/tweet?text=I%27ve%20been%20using%20%23LuminaUI%20share%20yourtought%20%40rohitk131">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="secondary"
                    className="bg-white/80 dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-white/10 border border-zinc-200 dark:border-gray-800"
                  >
                    Share Your Thoughts On
                    <Icons.twitter className="icon-class ml-1 w-3.5 text-zinc-800 dark:text-white" />
                  </Button>
                </motion.div>
              </Link>
            </div>
            <motion.p
              className="text-sm text-zinc-600 dark:text-gray-400 mt-5"
              variants={footerAnimations.item}
            >
              © {new Date().getFullYear()} Lumina UI. All rights reserved.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            variants={footerAnimations.item}
          >
            <div>
              <motion.h3
                className="font-semibold mb-4 text-zinc-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Pages
              </motion.h3>
              <ul className="space-y-2">
                {["Docs", "Components", "Examples", "Pricing", "Blog"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={
                          item.toLowerCase() === "blog"
                            ? ""
                            : `/${item.toLowerCase()}`
                        }
                        className="text-zinc-600 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <div>
              <motion.h3
                className="font-semibold mb-4 text-zinc-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Socials
              </motion.h3>
              <ul className="space-y-2">
                {[
                  {
                    name: "Github",
                    url: "https://github.com/rohitk131/luminaui",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/rohitk131",
                  },
                  { name: "X", url: "https://x.com/rohitk131" },
                ].map((social) => (
                  <motion.li
                    key={social.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={social.url}
                      className="text-zinc-600 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      {social.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h3
                className="font-semibold mb-4 text-zinc-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Legal
              </motion.h3>
              <ul className="space-y-2">
                {[
                  { name: "Privacy Policy", url: "/privacy-policy" },
                  { name: "Terms of Service", url: "/tos" },
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.url}
                      className="text-zinc-600 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
