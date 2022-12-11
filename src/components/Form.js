import React from "react";
import { useGlobalContext } from "../context";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { WIKI_API } from "../API";
import Loading from "./Loading";

const Form = () => {
	const [{ searchTerm, isLoading }, dispatch] = useGlobalContext();

	async function fetchPages() {
		try {
			const resp = await fetch(WIKI_API + searchTerm);
			const { query } = await resp.json();
			const { pages } = query;
			dispatch({ type: "SET_ISLOADING", payload: false });
			dispatch({ type: "SET_RESULTS", payload: pages });
		} catch (error) {
			dispatch({ type: "SET_ISLOADING", payload: false });
			console.log(error);
		}
	}

	const clickHandler = (e) => {
		e.preventDefault();
		dispatch({ type: "SET_ISLOADING", payload: true });
		fetchPages();
	};

	const clear = () => {
		dispatch({ type: "SET_SEARCHTERM", payload: "" });
		dispatch({ type: "SET_RESULTS", payload: null });
	};

	return (
		<form className="form" onSubmit={clickHandler}>
			<button type="submit" title="search">
				<BiSearch className="search-icon" />
			</button>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) =>
					dispatch({
						type: "SET_SEARCHTERM",
						payload: e.target.value,
					})
				}
				placeholder="Search For Anything"
			/>
			<Loading isLoading={isLoading} />

			<button title="clear" type="reset">
				<ImCancelCircle className="cancel-icon" onClick={clear} />
			</button>
		</form>
	);
};
export default Form;
