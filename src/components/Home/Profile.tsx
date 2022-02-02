import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from '../../styles/components/Home/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/DiegoSousa-11.png" alt="Avatar-User" />
            <div>
                <strong style={theme && {color: theme.text}}>Diego de Sousa</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}