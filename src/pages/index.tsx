import { Icon } from '@iconify/react';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/pages/InitialScreen.module.css';

export default function InitialScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
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

      <div onClick={() => setModalIsVisible(false)} aria-modal={modalIsVisible} className={styles.overlay}>
        <div className={styles.modal}>
          <p>Insira seu nome e uma foto para deixar seu perfil com a sua cara!</p>
          <div className={styles.profileImage}>
            <div>
                <Icon icon="fluent:camera-edit-20-regular" width="40" />
                <p>Clique aqui para inserir uma nova foto de perfil</p>
            </div>
            <img src="Profile.svg" alt="Avatar-User" />
          </div>
          <input type="text" placeholder='Insira seu nome' />
          <button>Logar</button>
        </div>
      </div>
    </div>
  );
}