import React from "react";
import { WIKI_RANDOM } from "../API";

const Footer = () => {
	return (
		<footer>
			<p>
				<a href={WIKI_RANDOM} target="_blank" rel="noreferrer">
					Read a random Article
				</a>
			</p>
		</footer>
	);
};

export default Footer;
