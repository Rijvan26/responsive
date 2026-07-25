import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

const navOptions = [
	"Store",
	"Mac",
	"iPad",
	"iPhone",
	"Watch",
	"AirPods",
	"TV & Home",
	"Entertainment",
	"Accessories",
	"Support",
];

function Navbar() {
	return (
		<>
			<nav className="flex items-center justify-between lg:justify-evenly p-2 md:px-6 w-full max-w-280 mx-auto">
				{/* Logo */}
				<div className="shrink-0">
					<BsApple className="size-4" />
				</div>

				{/* Nav Options */}
				<div className="items-center justify-center gap-6 hidden lg:flex">
					{navOptions.map((navOption) => (
						<div key={navOption}>
							<a href="#" className="text-sm">
								{navOption}
							</a>
						</div>
					))}
				</div>

				{/* Action Menu */}
				<div className="flex items-center justify-between gap-2">
					<span>
						<BiSearch className="size-4" />
					</span>
					<span>
						<BiShoppingBag className="size-4" />
					</span>
					<span className="block lg:hidden">
						<IoMenu className="size-4" />
					</span>
				</div>
			</nav>
			<div className="w-full bg-zinc-50 p-4 flex justify-center items-center">
				<span className="text-sm md:text-base tracking-tighter">
					Get up to 12 months of No Cost EMI plus up to ₹8000.00 instant
					cashback on selected products with eligible cards.{" "}
					<a href="#" className="text-blue-600 underline underline-offset-1">
						See offers
					</a>
				</span>
			</div>
		</>
	);
}

export default Navbar;
