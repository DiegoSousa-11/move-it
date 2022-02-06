import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile/UserStatistics.module.css';

export function UserStatistics() {
    const { level, challengesCompleted, experienceToNextLevel, currentExperience } = useContext(ChallengesContext);

    return (
        <div className={styles.container}>
            <section>
                <div>
                    <Icon icon="fluent:arrow-trending-lines-24-filled" height="40" />
                    <p>
                        Level<br/> atual
                    </p>
                </div>
                <h1>{level}</h1>
            </section>

            <section>
                <div>
                    <Icon icon="fluent:checkmark-12-filled" height="50" />
                    <p>
                        Desafios<br/> completos
                    </p>
                </div>
                <h1>{challengesCompleted}</h1>
            </section>

            <section>
                <div>
                    <Icon icon="fluent:arrow-trending-16-filled" height="50" />
                    <p>
                        Xp para o próximo level
                    </p>
                </div>
                <h1>{experienceToNextLevel - currentExperience}xp</h1>
            </section>
        </div>
    )
}