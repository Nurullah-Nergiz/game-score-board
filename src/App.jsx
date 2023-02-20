import { memo } from "react";
import Game from "./components/game";
import { GameContext } from "./contexts/store";

export default memo(() => {
	return (
		<>
			<GameContext>
				<Game />
			</GameContext>
		</>
	);
});
