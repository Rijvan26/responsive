function Card({ children, bg }) {
	return (
		<div className="shrink-0 h-115 md:h-120 w-80 cursor-pointer shadow hover:scale-105 transition-all duration-200  rounded-3xl overflow-hidden mr-2">
			<div
				className={`bg-cover bg-center h-full w-full p-10 px-8`}
				style={{
					backgroundImage: `url(${bg})`,
				}}
			>
				{children}
			</div>
		</div>
	);
}

export default Card;
