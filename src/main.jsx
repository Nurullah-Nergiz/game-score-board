import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameContext } from "./contexts/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GameContext>
		<App />
	</GameContext>
);
