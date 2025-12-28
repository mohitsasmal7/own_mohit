"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiFlutter,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const techIcons = [
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiFlutter,
  SiGithub,
];

export const ProjectsSection = () => {
  const controls = useAnimation();

  // Start animation initially
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 35, // slow scroll
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      {/* TECH SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Technologies I've Worked With
        </motion.h2>

        <div
          className="relative flex overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-100%"],
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 35,
              },
            })
          }
        >
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={controls}
          >
            {[...techIcons, ...techIcons].map((Icon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 rounded-xl bg-muted border border-border shadow hover:scale-110 transition"
              >
                <Icon className="w-10 h-10" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out anytime — I’d love to connect!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://instagram.com/mohitsasmal1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border shadow hover:scale-105 hover:bg-accent transition"
          >
            <SiInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mohitsasmal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border shadow hover:scale-105 hover:bg-accent transition"
          >
            <SiLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/mohitsasmal7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border shadow hover:scale-105 hover:bg-accent transition"
          >
            <SiGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:mohitsasmal@outlook.in"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border shadow hover:scale-105 hover:bg-accent transition"
          >
            <MdEmail className="w-6 h-6" />
            <span>Email</span>
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
};
