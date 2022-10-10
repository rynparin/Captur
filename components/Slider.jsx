import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Image from 'next/image';

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent((current) => (current === length - 1 ? 0 : current + 1));
	};

	const prevSlide = () => {
		setCurrent((current) => (current === 0 ? length - 1 : current - 1));
	};

	if (!Array.isArray(slides) || slides.length === 0) {
		return null;
	}

	return (
		<div id="gallery" className="max-w-[1240px] mx-auto">
			<h1 className="text-2xl font-bold text-center p-4 mb-12">
				Gallery
			</h1>
			<div className="relative flex justify-center p-4">
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? 'opacity-[1] ease-in duration-1000'
									: 'opacity-0'
							}
						>
							<FaArrowAltCircleLeft
								onClick={prevSlide}
								size={50}
								className="absolute top-[50%] left-0 text-white/70 cursor-pointer select-none z-[2] translate-y-[-50%]
                                translate-x-[50%]"
							/>
							{index === current && (
								<Image
									src={slide.image}
									alt="/"
									width="1440"
									height="600"
									objectFit="cover"
								/>
							)}
							<FaArrowAltCircleRight
								onClick={nextSlide}
								size={50}
								className="absolute top-[50%]  right-0 text-white/70 cursor-pointer select-none z-[2]
                                    translate-y-[-50%]
                                    translate-x-[-50%]
                                    "
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
