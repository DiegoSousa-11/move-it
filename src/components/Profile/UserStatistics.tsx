import { Icon } from '@iconify/react';
import styles from '../../styles/components/Profile/UserStatistics.module.css';

export function UserStatistics() {
    return (
        <div className={styles.container}>
            <section>
                <div>
                    <Icon icon="fluent:arrow-trending-lines-24-filled" height="40" />
                    <p>
                        Level<br/> atual
                    </p>
                </div>
                <h1>1</h1>
            </section>

            <section>
                <div>
                    <Icon icon="fluent:checkmark-12-filled" height="50" />
                    <p>
                        Desafios completos
                    </p>
                </div>
                <h1>1</h1>
            </section>

            <section>
                <div>
                    <Icon icon="fluent:arrow-trending-16-filled" height="50" />
                    <p>
                        Xp para o próximo level
                    </p>
                </div>
                <h1>200</h1>
            </section>
        </div>
    )
}