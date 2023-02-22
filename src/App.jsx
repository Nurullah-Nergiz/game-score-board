import { memo, useContext, useEffect, useRef } from "react";
import Game from "./components/game";
import { Context } from "./contexts/store";
import Cookies from "js-cookie";
export default memo(() => {
	const data = useContext(Context);
	const count = useRef(0);

	useEffect(() => {
		let cookie  = Cookies.get('data');

		if (cookie) {
			cookie = JSON.parse(cookie);
			data.setPlayerCount(cookie.playerCount);
			data.setScores([...cookie.scores]);
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
						Cookies.set('data',JSON.stringify(data))
					}}
				>
					Player count
					<input type='number' autoFocus ref={count} />
				</form>
			)}
		</>
	);
});
