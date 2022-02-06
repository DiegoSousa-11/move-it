import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { UserProvider } from '../contexts/UserContext';
import { useRouter } from 'next/router';
import styles from '../styles/pages/InitialScreen.module.css';

export default function InitialScreen(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null) as any;

  const routes = useRouter();

  function saveUser() {
    Cookies.set('userName', name);
    
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      localStorage.setItem("profileImage", (reader.result).toString());
    })

    reader.readAsDataURL(profileImage);

    routes.replace("./Home");
  }

  return (
    <UserProvider 
    name={props.userName}>
      <div className={styles.container}>
        <Head>
          <title>Move.it</title>
        </Head>

        <section className={styles.logo}>
          <img src="Logo-Little.svg" alt="logo_menor" data-animate="logo_menor" />
          <img src="Logo-Big.svg" alt="logo_maior" data-animate="logo_maior"/>
          <img src="Logo-Little.svg" alt="logo_menor" data-animate="logo_menor"/>
        </section>

        <section className={styles.main}>
          <img src="logo_full.svg" alt="logo_full" />
          <h1>Bem vindo!</h1>
          <h2>Faça login para começar!</h2>
          <button onClick={() => setModalIsVisible(true)}>
            Fazer login
          </button>
        </section>

        <div 
        id="overlay" 
        onClick={event => (event.target as HTMLDivElement).id == "overlay" ? setModalIsVisible(false) : null} 
        aria-modal={modalIsVisible} 
        className={styles.overlay}>
          <div className={styles.modal}>
            <p>Insira seu nome e uma foto para deixar seu perfil com a sua cara!</p>
            <div className={styles.profileImage}>
              <label htmlFor="chooseImage">
                <div>
                  <input accept="image/*" type="file" id="chooseImage" hidden onChange={event => setProfileImage((event.target.files[0]))}/>
                  <Icon icon="fluent:camera-edit-20-regular" width="40" />
                  <p>Clique aqui para inserir uma nova foto de perfil</p>
                </div>
              </label>
              <img src={profileImage ? URL.createObjectURL(profileImage) : "Profile.svg"} alt="Avatar-User" />
            </div>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Insira seu nome' />
            <button onClick={() => saveUser()}>Logar</button>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { 
  const { userName, profileImage } = ctx.req.cookies;
  
  return {
    props: {
      userName: String(userName),
      profileImage: profileImage ?? null
    }
  }
}