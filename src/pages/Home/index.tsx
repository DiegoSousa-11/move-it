import { ChallengeBox } from "../../components/Home/ChallengeBox";
import { CompletedChallenges } from "../../components/Home/CompletedChallenges";
import { Countdown } from "../../components/Home/Countdown";
import { ExperienceBar } from "../../components/Home/ExperienceBar";
import { Profile } from "../../components/Home/Profile";

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../../styles/pages/Home.module.css';
import { CountdownProvider } from "../../contexts/CountdownContext";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { Menu } from "../../components/Common/Menu";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Home(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div 
      style={theme && {backgroundColor: theme.primaryColor}} 
      className={styles.container}>
        <Menu currentScreen="HOME"/>
        <div className={styles.dashboard}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider> {/*Foi colocado aqui, pois não vai ser usado em todo o app somente em algumas partes em específico */}
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { 
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}