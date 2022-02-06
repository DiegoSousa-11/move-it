import Head from 'next/head';
import { useContext } from 'react';
import { Menu } from '../../components/Common/Menu';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from '../../styles/pages/Profile.module.css';
import { UserProfile } from '../../components/Profile/UserProfile';
import { UserStatistics } from '../../components/Profile/UserStatistics';
import { GetServerSideProps } from 'next';
import { UserProvider } from '../../contexts/UserContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

export default function Profile(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <UserProvider
        name={props.userName}>
            <ChallengesProvider 
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}>
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
            </ChallengesProvider>
        </UserProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { 
    const { level, currentExperience, challengesCompleted, userName, profileImage } = ctx.req.cookies;
    
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
        userName: String(userName),
        profileImage: profileImage ?? null
      }
    }
  }