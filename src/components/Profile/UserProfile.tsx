import styles from '../../styles/components/Profile/UserProfile.module.css';

import { Icon } from '@iconify/react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export function UserProfile() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <img src="https://github.com/DiegoSousa-11.png" alt="Avatar-User" />
            <div style={theme && {color: theme.text}}>
                <strong>Diego de Sousa</strong>
                <Icon icon="fluent:edit-24-filled" />
            </div>
        </div>
    )
}