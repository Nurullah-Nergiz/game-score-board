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
			});
		});
		setScoreList([...scoreData]);
	}, [data]);
	return (
		<div>
			<div>Game round count {data.length}</div>
			<ul>
				{scoreList?.map((data, index) => {
					return (
						index + 1 <= playerCount && (
							<li key={Math.random().toString()}>
								Player {`${index + 1}  ${data}`}
							</li>
						)
					);
				})}
			</ul>
		</div>
	);
});
