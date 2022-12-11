export const initialState = {
	searchTerm: "",
	results: null,
	pages: [],
	isLoading: false,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_SEARCHTERM":
			return { ...state, searchTerm: action.payload };
		case "SET_RESULTS":
			return { ...state, results: action.payload };
		case "SET_PAGES":
			return { ...state, pages: action.payload };
		case "SET_ISLOADING":
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
