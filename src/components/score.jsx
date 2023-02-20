import { memo, useEffect, useMemo, useState } from "react";

export const Score = memo(({ data, playerCount }) => {
	const [scoreList, setScoreList] = useState([]);
	const scoreData = [];

	useEffect(() => {
		for (let i = 0; i < playerCount; i++) {
			scoreData[i] = 0;
		}
	}, []);

	useMemo(() => {
		data.map((item) => {
			item.map((score, index) => {
				scoreData[index] = isNaN(Number(scoreData[index]))
					? Number(score)
					: Number(scoreData[index]) + Number(score);
				console.log(
					isNaN(Number(scoreData[index])),
					typeof scoreData[index],
					score,
				);
			});
		});
		setScoreList([...scoreData]);
	}, [data]);
	return (
		<div>
			{scoreList?.map((data, index) => {
				return (
					<div key={Math.random() * 100}>
						player {index + 1}&nbsp;
						{data}
					</div>
				);
			})}
		</div>
	);
});
