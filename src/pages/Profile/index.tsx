import Head from 'next/head';
import { useContext } from 'react';
import { Menu } from '../../components/Common/Menu';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from '../../styles/pages/Profile.module.css';
import { UserProfile } from '../../components/Profile/UserProfile';
import { UserStatistics } from '../../components/Profile/UserStatistics';

export default function Profile() {
    const { theme } = useContext(ThemeContext);

    return (
        <div 
        style={theme && {backgroundColor: theme.primaryColor}} 
        className={styles.container}>
            <Menu currentScreen="PROFILE"/>
            <div className={styles.dashboard}>
                <Head>
                    <title>Perfil | move.it</title>
                </Head>
                
                <UserProfile/>
                <UserStatistics/>
            </div>
        </div>
    )
}