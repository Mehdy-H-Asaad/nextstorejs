import IntroBackground from "@/Public/Assets/imgs/recycled-shoe-store-cta-image-bg.jpg";
const Intro = () => {
	return (
		<div
			className="h-screen w-full bg-center p-20 mt-20 lg:mt-0 bg-no-repeat flex items-center justify-center"
			style={{ backgroundImage: `url(${IntroBackground.src})` }}
		>
			<div className="text-white text-center">
				<h1 className="font-bold text-3xl mb-4 md:text-5xl">
					Better for People & the Planet
				</h1>
				<p className="max-w-[700px] mx-auto">
					Discover luxury and style at our boutique store. Explore curated
					collections of designer fashion, accessories, and home decor. Elevate
					your style effortlessly. Welcome to elegance.
				</p>
			</div>
		</div>
	);
};

export default Intro;
