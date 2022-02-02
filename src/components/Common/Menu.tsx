import { Icon } from '@iconify/react';
import { Switch } from '../Home/Switch';

import styles from '../../styles/components/Common/Menu.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useRouter } from 'next/router';

export function Menu({currentScreen}: {currentScreen: string}) {
  const { theme } = useContext(ThemeContext);
  const routes = useRouter(); 

  return (
      <div style={theme && {backgroundColor: theme.secondaryColor}} className={styles.container}>
        <img src="logo.svg" alt="" />
        <nav>
          <div onClick={() => routes.push("./")} className={`${styles.options} ${currentScreen == "HOME" && styles.active}`}>
            <div />
            <Icon icon="feather:home" width="32"/>
          </div>
          <div onClick={() => routes.push("./Profile")} className={`${styles.options} ${currentScreen == "PROFILE" && styles.active}`}>
            <div />
            <Icon icon="feather:user" width="32"/>
          </div>
        </nav>
        <Switch/>
      </div>
  )
}