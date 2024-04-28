import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="section-hero" className="hero">
      <h1 className="hero__title">Support Our Mission</h1>
      <p className="hero__subtitle">
      Every contribution, regardless of its size, has a meaningful impact for our team, together have the power to bring about lasting change and forge a brighter future for everyone involved. Our community thrives on collaboration and shared commitment.
	  <br></br>
	  <br></br>
	  The management of our community wallet rests in the capable hands of three elected members: XCat, Leopard Win, and Technix, who have earned the trust of the public through a democratic voting process. Operating as a multi-signature wallet, any spending transaction requires the authorization of at least two of these appointed Treasurers, ensuring a secure and transparent financial process.
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
            Make A Donation
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
