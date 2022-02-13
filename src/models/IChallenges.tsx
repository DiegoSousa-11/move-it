import { ReactNode } from "react";

interface IChallenges {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface IChallengesData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: IChallenges;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void; 
    closeLevelUpModal: () => void;
}

interface IChallengesProvider { //Tipagem pelo type Script
    children: ReactNode //ReactNode é para todos componentes react
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export type { IChallenges, IChallengesData, IChallengesProvider }