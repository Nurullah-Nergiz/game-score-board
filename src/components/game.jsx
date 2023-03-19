import { memo, useContext, useEffect, useRef, useState } from "react";
import { Context } from "../contexts/store";
import { Score } from "./score";
import Cookies from "js-cookie";

export default memo(() => {
	const data = useContext(Context);
	const inputRef = useRef([]);
	const [inputLoopCount, setInputLoopCount] = useState([]);

	useEffect(() => {
		for (let index = 0; index < data.playerCount; index++) {
			setInputLoopCount((item) => [...item, index]);
		}
		console.log(inputLoopCount, inputRef);
	}, [data.playerCount]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const score = [];
		Object.values(inputRef).map((el, i) => {
			// score.push(typeof Number(el.value));
			typeof Number(el.value) === "number" && score.push(Number(el.valueAsNumber));
			el.value = "";
			i === 0 && el.focus();
		});

		data.setScores((item) => {
			const filteredData = score.filter((item) => !isNaN(item));
			return [...item, filteredData];
		});
		Cookies.set("data", JSON.stringify(data));
	};

	const handleRemove = (e) => {
		console.log('remove');
		data.setPlayerCount(0);
		data.setScores([]);
		Cookies.set("data",'');
	};

	return (
		<>
			<form className='game' onSubmit={handleSubmit}>
				{inputLoopCount.map((index) => {
					return (
						<div className='row' key={index + 1}>
							Player {index+1} &nbsp;
							<input
								type='number'
								ref={(el) => (inputRef[index] = el)}
								required
							/>
						</div>
					);
				})}
				<button onClick={handleSubmit}>save</button>
				<button onClick={handleRemove}>reset</button>
			</form>
			<Score data={data.scores} playerCount={data.playerCount} />
		</>
	);
});
