import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import styles from '../../styles/components/Home/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { name, profileImage } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return(
        <div className={styles.profileContainer}>
            <img src={profileImage} alt="Avatar-User" />
            <div>
                <strong style={theme && {color: theme.text}}>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}