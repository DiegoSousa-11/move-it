import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'
import styles from '../../styles/components/Home/Profile.module.css';
import Cookies from 'js-cookie';

export function Profile() {
    const routes = useRouter();
    const { level } = useContext(ChallengesContext);
    const { name, profileImage } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    function logOutAlert()
    {
        var alert = confirm("Tem certeza que deseja sair? Ao escolher \"sim\", todos os seus dados como nome, imagem e progresso serão apagados! ");

        if (alert)
        {
            deleteUserData();
        }

        else
            return; 
    }

    function deleteUserData() {
        Cookies.remove("userName");
        Cookies.remove("level");
        Cookies.remove("currentExperience");
        Cookies.remove("challengesCompleted");

        localStorage.removeItem("profileImage");

        routes.replace("./");
    }

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
            <Icon onClick={() => logOutAlert()} style={theme && {color: theme.text}} icon="feather:log-out" width="30"/>
        </div>
    );
}