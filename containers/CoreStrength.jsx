import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
  return (
    <section
      id="section-core-strength"
      className="section-padding section-core-strength"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      </motion.div>

      <h3 className="subtitle">CORE ATTRIBUTES</h3>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={audit} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Security, Reimagined</span>
            <span className="card__content">
            Our innovative look at network security enables us to maintain high security without compromises on speed or decentralization. With our hybrid consensus mechanism, security is first priority and will always be the best in class with zero block wastage and strong cryptographic algorithms.
              <br />
              <br />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={charts} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Speed, Redefined</span>
            <span className="card__content">
            ET is the fastest PoW blockchain with confirmation speeds of 10 blocks per second. With high speed we can power up everything that comes our way, from high power DeFi protocols to flashy web3 browser and wallet you love.
              <br />
              <br />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={coinKromatika} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Coin Acquisition</span>
            <span className="card__content">
            Be a part of our project early on and witness your contribution increase in value as the project progresses. Upon listing on major exchanges, your early contributions will begin their journey as long-term assets.
              <br />
              <br />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrength;
