import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

const {
	metamaskLogo,
	arbitrumLogo,
	optimismLogo,
	polygonLogo,
	coinKromatika,
	coinsKromatika,
	circulatingSupply,
	coinsStash,
	goldLock,
} = images;

const Token = () => {
	return (
		<section id='section-token' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>ExtraTerrestrial</h2>
			</motion.div>
			<div className='token'>
				<motion.div
					initial={{ x: -100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
					className='motion-div'>
					<figure className='token__figure'>
						<Image src={coinsKromatika} alt='Coins' className='token__img' />
					</figure>
				</motion.div>
				<div className='token__content'>
					<h3>What is $ET?</h3>
					<p>
						ET is the utility token of the ExtraTerrestrial DEX, a decentralized exchange platform. It serves as a credential and basis for users to participate in ecosystem development, governance, and features. ET plays a crucial role in ecosystem development as an economic foundation and circulation hub. Users enjoy transaction fee discounts, VIP customer rights and privileges, first mining bonuses, project decision-making rights, and more.
						<br />
						<br />
						ET is the utility token of the ExtraTerrestrial DEX, a decentralized exchange platform. By using ET tokens, users can pay the service fee to unlock the limit order feature of the ExtraTerrestrial protocol. This means that not only do users gain access to cost-efficient limit orders on the DEX, but they also receive liquidity provider (LP) fees on every trade, thanks to the innovative approach to providing liquidity
						<br />
						<br />
						The use of ET as the utility token for paying fees on the ExtraTerrestrial DEX provides a convenient and efficient way for users to access and utilize the platform's services.
						<br />
					</p>
				</div>
			</div>
			{/* CARDS UNDER TOKEN SECTION */}
			<div className='token__content is-vcetared'>=
					<h3>ET - ExtraTerrestrial token has a total supply of 150 billion coins, with a tokenomics that reflects its commitment to community, presale investors, and team members!</h3>
					</div>
			<div className='cards-wrapper'>
	

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={circulatingSupply} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__title'>Circulating Supply</span>
						<span className='card__content'>
							<p>
							Community Allocation: 26% of the total supply is allocated to the community, reflecting the project's commitment to decentralization and user engagement. This allocation will be distributed among community members through airdrops, staking rewards, and other incentives.
							</p>
						</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={coinsStash} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__content'>
							<p>
							Presale Allocation: 33% of the total supply is allocated to presale investors. This allocation will be distributed among early investors who participate in the presale event, providing them with an opportunity to purchase tokens at a discounted rate before they are made available to the general public.
							</p>
						</span>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={goldLock} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__content'>
							<p>
							Team Allocation: 1% of the total supply is allocated to the team, with a lock-up period to ensure long-term commitment and alignment of incentives. This allocation will be distributed among team members who contribute to the project's development and success.
							</p>
							<p>Liquidity Pool Allocation: 40%</p>
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Token;
