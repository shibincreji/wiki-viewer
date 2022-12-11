import { createContext, useContext, useReducer } from "react";

const appContext = createContext();

const ContextProvider = ({ children, initialState, reducer }) => {
	return (
		<appContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</appContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(appContext);
};

export { useGlobalContext, ContextProvider };
