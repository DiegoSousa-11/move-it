import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from '../../styles/components/Home/LevelUpModal.module.css';

export function LevelUpModal() {
    const { theme } = useContext(ThemeContext);
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div style={ theme && {backgroundColor: theme.secondaryColor}} className={styles.container}>
                <header>{ level }</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}