import { createContext, useState } from "react";

export const Context = createContext();

export const GameContext = ({ children }) => {
    const [playerCount, setPlayerCount] = useState(2);
    const [scores, setScores] = useState([]);
    
            
	return (
		<Context.Provider
			value={{
				playerCount,
				setPlayerCount,
				scores,
				setScores
			}}
		>
			{children}
		</Context.Provider>
	);
};
