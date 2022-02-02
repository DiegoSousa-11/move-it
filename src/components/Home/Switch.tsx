import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from '../../styles/components/Home/Switch.module.css';

export function Switch() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const { switchTheme, theme } = useContext(ThemeContext);

    function changeTheme() {
        switchTheme();
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <div style={theme && {backgroundColor: theme.textSecondary}} onClick={() => changeTheme()} className={styles.container}>
            <span>🌜</span>
            <span>🌞</span>

            <div aria-checked={isDarkTheme} />
        </div>
    )
}