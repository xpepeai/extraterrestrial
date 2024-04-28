import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="section-hero" className="hero">
      <h1 className="hero__title">ExtraTerrestrial</h1>
      <p className="hero__subtitle">
      The Intergalactic Crypto DEX App
      </p>
      <div className="btn-group">
        <Link passHref={true} href="">
          <motion.a
            className="btn btn-solid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Join Presale
          </motion.a>
        </Link>
        <Link passHref={true} href="#section-token">
          <motion.a
            className="btn btn-outline"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            How to buy
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
