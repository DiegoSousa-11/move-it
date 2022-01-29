import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(.1 * 60); // 25 minutos em segundos
    const [isActive, setIsActive] = useState(false); //Mostra se o countdown está rodando(true) ou pausado(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); // Math arredonda para um número inteiro 
    const seconds = time % 60; // Pega o resto que não coube na divisão
    
    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout); //Cancela a excecução de um novo Timeout, depois de parado
        setIsActive(false);
        setHasFinished(false);
        setTime(.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1); //Diminui 1s
            }, 1000) //Executar função depois de 1s
        } else if(isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge(); 
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}