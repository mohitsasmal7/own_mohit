import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        A multidisciplinary strategist operating at the convergence of technology, finance, and public policy. With over three years of hands-on experience as a Full Stack Flutter Developer, I possess the unique ability to translate complex technical realities into robust government affairs and public policy frameworks. My expertise extends to Financial and Risk Management, allowing me to evaluate the economic viability and regulatory impact of digital initiatives. I am deeply committed to fostering international cooperation and regional development, evidenced by my role as a delegate facilitating dialogue between India and the Netherlands at the Global Technology Summit Innovation Dialogue 2025, and representing India at the Rising Northeast Summit 2025. I am a modern civic leader dedicated to drafting policies that are technologically sound, financially sustainable, and socially impactful.
      </p>
      <Separator />
    </motion.div>
  );
};
