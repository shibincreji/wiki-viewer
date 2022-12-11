const Loading = ({ isLoading }) => {
	return (
		<div className={isLoading ? "active loading" : "loading"}>
			<div className="circle one"></div>
			<div className="circle two"></div>
			<div className="circle three"></div>
		</div>
	);
};

export default Loading;
