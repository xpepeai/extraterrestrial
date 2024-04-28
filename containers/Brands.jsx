import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tile } from '../components';
import { brands } from '../constants/brands';

const {
	cg2,
	uniswap,
	polygon,
	optimismHorizontal,
	chainlink,
	celer,
	arbitrum,
	dexguru,
	dextlogo,
	ethereum,
	vulkania,
	cmc,
	Adobe,
	applepay,
	Asus,
	Aviva,
	Binance,
	Bing,
	CoinStats,
	Ethereum,
	Fireblocks,
	Gemini,
	Github,
	Gmail,
	Google,
	GoogleAnalytics,
	gpay,
	Ledger,
	mastercard,
	Microsoft,
	MySQL,
	OpenAi,
	Telegram,
	Tether,
	Trust,
	visa
} = brands;

const poweredBy = [
	{ href: 'https://chain.link/', logo: chainlink },
	{ href: 'https://uniswap.org/', logo: uniswap },
	{ href: 'https://uniswap.org/', logo: OpenAi },
	{ href: 'https://uniswap.org/', logo: Gemini },
	{ href: 'https://uniswap.org/', logo: Asus },
	{ href: 'https://uniswap.org/', logo: Github },
	{ href: 'https://uniswap.org/', logo: Google },
	{ href: 'https://uniswap.org/', logo: Bing },
	{ href: 'https://uniswap.org/', logo: MySQL },
	{ href: 'https://uniswap.org/', logo: Adobe },
	{ href: 'https://uniswap.org/', logo: Tether },
	{ href: 'https://uniswap.org/', logo: Ethereum },
	{ href: 'https://uniswap.org/', logo: Binance },
	{ href: 'https://uniswap.org/', logo: Trust },
	{ href: 'https://uniswap.org/', logo: Fireblocks },
	{ href: 'https://uniswap.org/', logo: Aviva },
	{ href: 'https://uniswap.org/', logo: GoogleAnalytics },
	{ href: 'https://uniswap.org/', logo: Microsoft },
	{ href: 'https://uniswap.org/', logo: Ledger },
	{ href: 'https://uniswap.org/', logo: CoinStats },
	{ href: 'https://uniswap.org/', logo: Telegram },
	{ href: 'https://uniswap.org/', logo: Gmail },
	{ href: 'https://uniswap.org/', logo: visa },
	{ href: 'https://uniswap.org/', logo: mastercard },
	{ href: 'https://uniswap.org/', logo: gpay },
	{ href: 'https://uniswap.org/', logo: applepay },
];

const Brands = () => {
	return (
		<section id='section-brands' className='section-padding'>
			<div className='brands-wrapper'>
				{/* POWERED BY */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Powered By</h2>
					</motion.div>
					<div className='brands__links'>
						{poweredBy.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>

			</div>
		</section>
	);
};

export default Brands;
