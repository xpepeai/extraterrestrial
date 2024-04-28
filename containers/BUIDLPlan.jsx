import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: ' Launch Phase: Crypto Presale and Foundation Setting',
		goals: [
			{
				status: false,
				goal: 'Set and publicize the initial valuation of ET',
			},
			{
				status: false,
				goal: 'Develop and deploy the ET smart contract.',
			},
			{
				status: false,
				goal: 'Conduct a thorough audit of the ET coin.',
			},
			{
				status: false,
				goal: 'Initiate targeted marketing campaigns across digital platforms to attract global investors.',
			},
			{
				status: false,
				goal: 'Roll out a 10% bonus referral scheme.',
			},
		],
	},
	{
		title: 'Development Phase: Presale Growth, LP Pool and DAPP',
		goals: [
			{
				status: false,
				goal: 'Maintain momentum in the presale, paralleled with beginning Mainnet development.',
			},
			{
				status: false,
				goal: 'Liquidity Pool deploying',
			},
			{
				status: false,
				goal: 'Adding gasless market swap feature.',
			},
			{
				status: false,
				goal: 'CEX listing.',
			},
			{
				status: false,
				goal: 'Regularly update the ET community on progress for transparency and trust-building.',
			},
			{
				status: false,
				goal: 'ET v2 (new features, modern UI, hybrid DEX).',
			},
		],
	},
	{
		title: 'Pre-Launch Phase & Final Phase: Presale Momentum and Mainnet Refinement',
		goals: [
			{
				status: false,
				goal: 'Keep up the presale drive, securing continuous investments.',
			},
			{
				status: false,
				goal: 'Dedicate efforts to Mainnet development, focusing on extensive testing for reliability.',
			},
			{
				status: false,
				goal: 'Select early adopters for Mainnet beta testing, collecting constructive feedback.',
			},
			{
				status: false,
				goal: 'Enhance security measures for robust network protection.',
			},
			{
				status: false,
				goal: 'Gas refund program on Optimism.',
			},
			{
				status: false,
				goal: 'Conclude the presale, finalizing the investment batch.',
			},
			{
				status: false,
				goal: 'ET DAO governance launch',
			},
			{
				status: false,
				goal: 'Create ET/OP liquidity pool.',
			},
			{
				status: false,
				goal: 'Liquidity mining program for ET/OP.',
			},
			{
				status: false,
				goal: 'Implement fiat on-ramp service.',
			},
			{
				status: false,
				goal: 'Implement cross-chain bridge solution.',
			},
		],
	},
];

const BUIDLPlan = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>ROADMAP</h2>
			</motion.div>
			<p className={'buidl-plan'}>
			<strong>Build the Future with BDAG coins</strong>.
			</p>
			<div className='roadmap container'>
				{quarters.map((quarter, i) => (
					<Fragment key={i}>
						<Quarter quarter={quarter} />
						<span className='checkpoint' />
					</Fragment>
				))}
				<Divider type='vertical' h='58rem' w='0' />
			</div>
		</section>
	);
};

export default BUIDLPlan;
