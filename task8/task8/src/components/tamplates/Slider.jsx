function Slider({ children, className = "" }) {
	return (
		<div
			className={`w-full flex items-center gap-4 hide-scrollbar lg:px-26 flex-1 ${
				className && className
			}`}
			style={{ overflowX: "auto" }}
		>
			{children}
		</div>
	);
}

export default Slider;
