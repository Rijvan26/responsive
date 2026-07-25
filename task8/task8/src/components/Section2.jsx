import Card from "./tamplates/Card";
import Slider from "./tamplates/Slider";

const cardItems = [
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkajF3MG5PcHVmRWhQRExwVUtFQkcwWW1BelFXU2p4MWRtenZxUWJQMFBjZHYvU3JjZHd1MTRSd0VqZnNnTGdmZm5iK1pDOUhGUndCdU1wTE1NVU4wUlFNV252bk94RGJYcUs5ZUY5bW9yM09R",
		children: (
			<div className="text-zinc-100">
				<h4 className="text-2xl font-bold">iPhone 16 Pro</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNDdRY0poQjB6M0F1TG44QVh4cEttUVJLTzV3ZllpTmIwUXhuRFZUQWVLOWprMTFvNEM2eG1yOHVjc2VHR05XMEFJdVNKU3UyQ2UrUlYrSGVNRmZ1cTM",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">Mac Book Air</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXS21MblVINU94UkJ1dVd0ZFZReHpQNUp4SThTYklxTWU2d3hqeTF4dktKcVRyV0V0R0laTXFOYW9QRER2T1NmMTFldExzQVlkdmJLcDJINVJ6REVsSVR4TVAyMnRiazNWaWJGQkNyUSs4K3Y",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">iPad Air</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-offer-featured-202505_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5UWt3NHc3dStlS1AxQU12Y29qK3NjQkF0d0pzT3BnczlqWUJnUVdUcnhRYXZnVTMvOENXLzc3UUI4eVl5UHdaYmNmSGN3NTUxbDRHZDZXK1V3b1o4a1FiS0NQek14SnphamJScThSUU1BSklGQlRRRytmTHd2bTlDU2RZMUtqVTRR",
		children: (
			<div>
				<p className="text-xs font-semibold tracking-tight text-orange-700">
					LIMITED-TIME OFFER
				</p>
				<p className="text-base mt-2 font-bold">
					Save on Mac and iPad for college, choose AirPods or an eligible
					accessory.
				</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409_FMT_WHH?wid=658&hei=900&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vcVBRU1l6NWZ4bGNiRk9SbVJMSE5KaGJiQm5IUm5NVFEwaDBLS0k4K09xemE1eG5Fd2NwV0VQUmdyZWJCVnpUaldzdWpkcm9jZ05YWFNHZEgxUHQzWXU2UnlGQnVTQ1djbHRyRk9QS0l6MWM",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">Apple Watch Series 10</h4>
				<p className="text-lg font-bold inline">Thinstant classic</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCVzhMQTV0a1dnc1NsMnJsVjZjVGRyVzYvZENqa1lMOXJJOWVmcGwvSUExanI2TGhYaGhMVkJpQ2RGWWVURTZNbXptd1RNSkI3Tk55TUFnNUhjV0tyMVM",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">iPhone 16e</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-202503_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQWhScDhIYWgzTHhXRFpyMUwxQjB3aVlETkJaS1BIVjJiTytwQnMvUTl4Mi85S3R4M0M3WGhIQVNOK3lBdUI5K1FKWGhlVW1EdGlya0E4R2dJZzRBemJ4N0gwQ1l5S1h1a1Erem0veUNhRW8",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">iPad</h4>
				<p className="text-lg font-bold">Lovable. Drawable. Magical.</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-mac-studio-202503_FMT_WHH?wid=658&hei=900&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyNzBsYVo5OEpFczRXQzQyZkdhNGhSK0pKRHJhMndzcmU1bXNERTBzbkpFRlQ4SWpVUlFzQ1g0TVdidVdUOXZpT0FxYi9OZSszSzhrMXYreWkvWm03elo4Vlcza2hIcHB4dXUvSE9NNEs3d3k",
		children: (
			<div className="text-zinc-800">
				<h4 className="text-2xl font-bold">Mac Studio</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTzBZbG1KSFRCNEs3N1J2VHI2VE83elpXQjhsTGZjMmFmZjJYY3czTVh0aXZ4MW5ZMFEzd1dneEFIc0oxbVRnYzdrNkxqcEdrM2x6OUZ3Z2JnTllhUU1aQk9tcWZZamNRRHgvalcrRW1ZSVg",
		children: (
			<div className="text-zinc-100">
				<h4 className="text-2xl font-bold">iPhone 16</h4>
				<p className="text-lg font-bold bg-linear-to-r from-indigo-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent inline">
					Apple Intelligence
				</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbHdYN09OOVhGMkJZZWFPTlJDYlZ0V1U0ejZoOWtTVEYxUXQ0c1dNU2trQ3ZnVTMvOENXLzc3UUI4eVl5UHdaYmRlVUN5anBMYXArdTZxQXVZNFlaRkdZV0ZKL3pzUzFZcVpzYXFDSitDb2lmbW94YnYxc1YvNXZ4emJGL0IxNFp3",
		children: (
			<div className="text-zinc-100">
				<h4 className="text-2xl font-bold">Apple Watch Ultra 2</h4>
				<p className="text-base font-semibold">New finish. Never quit.</p>
				<p>From $999 or $41.62/mo. for 24 mo.</p>
			</div>
		),
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-bands-202503_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09va1BWaWtDc3JqbmtIWDhTOVFud0xCSTdRY0poQjB6M0F1TG44QVh4cEttUVJLTzV3ZllpTmIwUXhuRFZUQWVLOWprMTFvNEM2eG1yOHVjc2VHR05XMEFMcmV0VmJ0OWIycXZ5dzV3bVRLamI",
		children: (
			<div>
				<p className="text-sm font-medium tracking-tight">Apple Watch Bands</p>
				<p className="text-2xl font-bold">Show your true colors</p>
			</div>
		),
	},
];

function Section2() {
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

export default Section2;
