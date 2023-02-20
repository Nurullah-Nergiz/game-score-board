import { memo, useContext, useEffect, useRef, useState } from "react";
import { Context } from "../contexts/store";
import { Score } from "./score";

export default memo(() => {
	const data = useContext(Context);
	const inputRef = useRef([]);
	const [inputLoopCount, setInputLoopCount] = useState([]);

	useEffect(() => {
		for (let index = 0; index < data.playerCount; index++) {
			setInputLoopCount((item) => [...item, index]);
		}
		console.log(inputRef);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const score = [];
		Object.values(inputRef).map((el, i) => {
			// score.push(typeof Number(el.value));
			typeof Number(el.value) === "number" && score.push(Number(el.value));
		});

		data.setScores((item) => {
			const filteredData = score.filter((item) => !isNaN(item));
			console.log(item);
			return [...item, filteredData];
		});
	};

	return (
		<>
			<form className='game' onSubmit={handleSubmit}>
				<button onClick={handleSubmit}>save</button>
				{inputLoopCount.map((index) => {
					return (
						<div className='row' key={Math.random() + 10}>
							<input
								type='number'
								ref={(el) => (inputRef[index] = el)}
							/>
						</div>
					);
				})}
			</form>
			<Score data={data.scores} />
		</>
	);
});
