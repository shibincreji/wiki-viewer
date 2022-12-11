import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context";
import { initialState, reducer } from "./reducer";

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider initialState={initialState} reducer={reducer}>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
