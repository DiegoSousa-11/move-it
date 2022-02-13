interface ICountdown {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    percentTime: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

export type { ICountdown }