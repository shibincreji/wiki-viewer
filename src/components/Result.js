import { WIKI_PAGE } from "../API";

const Result = ({ pageid, extract, title }) => {
	return (
		<div className="result">
			<a href={WIKI_PAGE + pageid} target="_blank" rel="noreferrer">
				<h2>{title}</h2>
				<p>{extract}</p>
			</a>
		</div>
	);
};

export default Result;
