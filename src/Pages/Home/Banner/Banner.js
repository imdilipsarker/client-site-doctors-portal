import React from 'react';
import chairImage from '../../../assets/images/chair.png';
import backgroundImage from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
	return (
		<div
			className="hero"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={chairImage}
					alt="chair"
					className="lg:w-1/2 rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-4xl font-medium">
						Make your perfect smile event better!
					</h1>
					<p className="py-6">
						Protect your smile and keep it healthy, with the largest network of
						dentist nationwide, quick service and personalized service.
					</p>
					<p className="py-6"></p>
					<PrimaryButton>Get Started</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Banner;
