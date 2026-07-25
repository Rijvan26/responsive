import { MdDraw, MdOutlineCurrencyExchange } from "react-icons/md";
import Slider from "./tamplates/Slider";
import { IoLogoAppleAppstore } from "react-icons/io5";

const slider1 = [
	{
		icon: <MdOutlineCurrencyExchange className="size-8 md:size-12" />,
		text: "Trade in your current device.\n Get credit toward a new one",
	},
	{
		icon: <MdDraw className="size-8 md:size-12" />,
		text: "Make them yours. Engrave a mix of emoji, names and numbers",
	},
	{
		icon: <IoLogoAppleAppstore className="size-8 md:size-12" />,
		text: "Get a personalized shopping experience in the Apple Store app.",
	},
];

function Section4() {
	return (
		<section className="w-full max-w-330 mx-auto lg:px-6 p-2 px-4 md:pt-8 md:mt-12 mt-8 overflow-x-hidden min-h-screen flex items-center justify-center flex-col">
			<div className="lg:flex justify-between items-center w-full lg:px-26 mb-6">
				<div className="w-full">
					<h3 className="text-xl md:text-3xl font-semibold text-zinc-500">
						<span className="text-zinc-800">The Apple Store difference.</span>{" "}
						Even more reasons to shop with us.
					</h3>
				</div>
			</div>

			{/* Cards */}

			<Slider>
				{slider1.map((slider, idx) => (
					<div className="p-4 px-2" key={idx}>
						<div
							className="bg-white rounded-3xl flex flex-col overflow-hidden p-4 px-8 lg:px-16 min-h-1/2 min-w-120 py-20 hover:scale-105 transition-all duration-300 cursor-pointer"
							style={{ maxWidth: "480px" }}
						>
							<div>{slider.icon}</div>
							<div>
								<p className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
									{slider.text}
								</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<Slider>
				{slider1.map((slider, idx) => (
					<div className="p-4 px-2" key={idx}>
						<div
							className="bg-white rounded-3xl flex flex-col overflow-hidden p-4 px-8 lg:px-16 min-h-1/2 min-w-120 py-20 hover:scale-105 transition-all duration-300 cursor-pointer"
							style={{ maxWidth: "480px" }}
						>
							<div>{slider.icon}</div>
							<div>
								<p className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
									{slider.text}
								</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}

export default Section4;
