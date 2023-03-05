import { memo, useContext, useEffect, useRef } from "react";
import Game from "./components/game";
import { Context } from "./contexts/store";
import Cookies from "js-cookie";
export default memo(() => {
	const data = useContext(Context);
	const count = useRef(0);

	useEffect(() => {
		const cookie = Cookies.get("data");
		if (cookie) {
			const { playerCount, scores } = JSON.parse(cookie);
			console.log(cookie);
			data.setPlayerCount(playerCount);
			data.setScores([...scores]);
		}
	}, []);

	return (
		<>
			{data?.playerCount !== 0 ? (
				<Game />
			) : (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						data.setPlayerCount(() => count.current.value);
						Cookies.set("data", JSON.stringify(data));
					}}
				>
					Player count &nbsp;
					<input type='number' autoFocus ref={count} />
				</form>
			)}
		</>
	);
});
