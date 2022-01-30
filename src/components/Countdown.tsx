import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        percentTime,
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)

    /* padStart verifica se os minutos tem 2 caracteres, se não ele acresenta "0" no começo(start), 
    e o split devolve um array com os dois números separadamente */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}>
                    Ciclo encerrado
                    <img src="/icons/finished.svg" alt="play_arrow" className={styles.icon}/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}>
                            Abandonar ciclo
                            <img src="/icons/close.svg" alt="play_arrow" className={styles.icon}/>
                        </button>
                    ) : (
                    <button 
                        type="button" 
                        style={{borderRadius: 5}}
                        className={styles.countdownButton}
                        onClick={startCountdown}>
                        Iníciar um ciclo
                        <img src="/icons/play_arrow.svg" alt="play_arrow" className={styles.icon}/>
                    </button>
                    )}
                </>
            )}

            {isActive || hasFinished ?
                <div className={styles.timeBar}>
                    <div style={{width: `${percentTime}%`}} />
                </div>
                :
                <></>
            }
        </div>
    );
}