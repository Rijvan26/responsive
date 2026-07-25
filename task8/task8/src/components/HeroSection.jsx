import { FiArrowUpRight } from "react-icons/fi";
import Slider from "./tamplates/Slider";

const defaultPath = "src/assets/store-card-13-";

const sliderItems = [
	{ img: defaultPath + "accessories-nav-202503.png", name: "Accessories" },
	{ img: defaultPath + "airpods-nav-202409.png", name: "AirPods" },
	{ img: defaultPath + "airtags-nav-202108.png", name: "AirTags" },
	{ img: defaultPath + "appletv-nav-202210.png", name: "Apple TV" },
	{
		img: defaultPath + "holiday-giftcards-asit-agc-nav-202111.png",
		name: "Gift Cards",
	},
	{ img: defaultPath + "homepod-nav-202301.png", name: "HomePod" },
	{ img: defaultPath + "ipad-nav-202405.png", name: "iPad" },
	{ img: defaultPath + "iphone-nav-202502_GEO_US.png", name: "iPhone" },
	{ img: defaultPath + "mac-nav-202503.png", name: "Mac" },
	{ img: defaultPath + "vision-pro-nav-202401.png", name: "Vision Pro" },
	{ img: defaultPath + "watch-nav-202409.png", name: "Apple Watch" },
];

function HeroSection() {
	return (
		<section className="w-full max-w-330 mx-auto lg:px-6 p-2 px-4 md:mt-16 mt-8 flex items-center justify-center flex-col">
			{/* Hero title */}
			<div className="lg:flex justify-between items-center w-full lg:px-26 md:mb-16 mb-8">
				{/* Hero Text */}
				<div className="max-w-162.5 mb-8">
					<h2 className="text-3xl md:text-5xl font-semibold text-zinc-500 font-sans md:leading-14">
						<span className="text-zinc-800">Store.</span>The best way to buy the
						products you love.
					</h2>
				</div>

				{/* section 2 */}

				<div className="p-4">
					<div className="flex gap-x-2 items-center mb-4">
						<img
							src="https://i.pinimg.com/736x/06/a3/d6/06a3d623c5b0cd54ea2bdb8924d93f06.jpg"
							alt="pfp"
							className="w-10 rounded-full border-2 border-white"
						/>
						<div>
							<span className="font-medium text-base -mb-2">
								Need Shopping help?
							</span>
							<br />
							<span className="flex gap-2 items-center text-sm text-blue-600 underline underline-offset-2">
								Ask Specialists <FiArrowUpRight />
							</span>
						</div>
					</div>

					<div className="flex gap-x-2 items-center">
						<img src="src/assets/default (6).svg" alt="pfp" className="w-10 " />
						<div>
							<span className="font-medium text-base -mb-2">
								Visit an Apple Store.
							</span>
							<br />
							<span className="flex gap-2 items-center text-sm text-blue-600 underline underline-offset-2">
								Find one near you <FiArrowUpRight />
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Slider */}
			<Slider>
				{sliderItems.map((item) => (
					<div
						key={item.img}
						className="pl-6 flex justify-center items-center gap-2 flex-col"
					>
						<img src={item.img} alt="item image" className="min-w-32" />
						<span className="hover:underline underline-offset-2">
							{item.name}
						</span>
					</div>
				))}
			</Slider>
		</section>
	);
}

export default HeroSection;
