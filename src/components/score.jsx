import { memo, useMemo, useState } from "react";

export const Score = memo(({ data }) => {
	const [scoreList, setScoreList] = useState([]);
	useMemo(() => {
		const scoreData = [];
		data.map((item) => {
			item.map((score, index) => {
				scoreData[index] = isNaN(Number(scoreData[index]))
					? 0
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
			{scoreList?.map((data) => {
				return <div key={Math.random() * 100}>{data}</div>;
			})}
		</div>
	);
});
