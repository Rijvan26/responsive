import Card from "./tamplates/Card";
import Slider from "./tamplates/Slider";

const cardItems = [
	{
		image:
			"https://i.pinimg.com/736x/4d/c1/4a/4dc14afe3a99583dc4d3da247d2dd137.jpg",
		children: (
			<div>
				<p className="text-sm font-medium tracking-tight mb-2">
					APPLE SPECIALIST
				</p>
				<p className="text-xl font-bold leading-tight">
					Shop one on one with a Specialist. Online or in a store.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-video-202409_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrYnlpTHAvaU1TZWJjTXg3K2FoelBrYU9STS9wYXZTN1hicnBjZ2p3Y1lQVnZ4MW5ZMFEzd1dneEFIc0oxbVRnYzlrb3YwRE90eklmVkIwdHovcEFheWo4eEs2QjhSMGI5UVVaeUVzTGcrR0Y",
		children: (
			<div>
				<p className="capitalize text-xl font-bold mb-2">
					Shop with a Specialist over video.
				</p>
				<p className="text-sm font-medium">
					Choose your next device in a guided, one-way video session.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202505_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNWUxLMTZiajZkeTVDSUtOdXBXUUFybmVIRDNscnlaOWlpZS9JTVEvRVFXRnNtS0NkZnlUKzBRdlpRai9zMDR0cS85dkRxQVRuNHJmT0xsM1VjQlBOQnJrbUNYSlozTndGcHB6N1hEeU4wL1U",
		children: (
			<div>
				<p className="text-sm font-medium tracking-tight mb-2">
					TODAY AT APPLE
				</p>
				<p className="text-xl font-bold leading-tight">
					Explore Apple Intelligence
				</p>
				<p className="text-sm font-medium">
					Come try it for yourself in a free session at the Apple Store.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPLzRHU1VPb2FYSnFxa0Y2Si9mMUdRVGVIRDNscnlaOWlpZS9JTVEvRVFXRnNtS0NkZnlUKzBRdlpRai9zMDR0cXo2SGZscTZIVy91OUtRZEZQVkJWSjFqc3Q2bE9IU3c0VC9VWFhBNmcwM1c",
		children: (
			<div>
				<p className="text-sm font-medium tracking-tight mb-2">
					TODAY AT APPLE
				</p>
				<p className="text-xl font-bold leading-tight mb-2">
					Join a Free Sessions at your Apple Store
				</p>
				<p className="text-sm font-medium">
					Learn about the latest features and how to go further with your Apple
					devices.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbDVpMjYxUTBHY0YydmFtTWsvQzFCQW92SFl6cE5HTTBPdys2R0x5WnZENHpDbVV0bFd2c1JzMEQxWXJScnlTdGFjSjdnclAxUisrbnBVbW43SGlEUnpXb0JwaWhEMllVWDJyWms5Wmhmd3F3",
		children: (
			<div>
				<p className="text-sm font-medium tracking-tight mb-2">
					PERSONAL SETUP
				</p>
				<p className="text-xl font-bold leading-tight mb-2">
					Set up your new device with help from a specialist.
				</p>
				<p className="text-sm font-medium">
					Let us guide you through data transfer, the latest features, and more
					in an online, one-on-one session.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202108_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=UjZWNjB3VDZRK09HelFpSjJDWXROTU1GVnluSEZEN3Fla0dFUHpTQjhHYjcybWo3UjgwOFBCNmRBRDAzQUgyU3ZoZ3NDaDQzN0hkK1VPMDEwRXNQVDhtd3k4VkkwQ2l3cXZ6cEkycldOaXlpUG9oNWpCMW9yS05jWThjWnhCanQ",
		children: (
			<div>
				<p className="text-xl font-bold mb-2">
					Get expert service and sipport at the genius bar.
				</p>
			</div>
		),
	},
];

function Section3() {
	return (
		<section className="w-full max-w-330 mx-auto lg:px-6 p-2 px-4 md:pt-8 md:mt-12 mt-8 overflow-x-hidden min-h-screen flex items-center justify-center flex-col">
			<div className="lg:flex justify-between items-center w-full lg:px-26 mb-6">
				<div className="w-full">
					<h3 className="text-xl md:text-3xl font-semibold text-zinc-500">
						<span className="text-zinc-800">The latest.</span> Take a look at
						what's new, right now.
					</h3>
				</div>
			</div>

			{/* Cards */}
			<Slider>
				{cardItems.map((cardItem) => (
					<div key={cardItem.image}>
						<Card bg={cardItem.image}>{cardItem.children}</Card>
					</div>
				))}
			</Slider>
		</section>
	);
}

export default Section3;
