import styles from '../../styles/components/Profile/UserProfile.module.css';

import { Icon } from '@iconify/react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext, useEffect, useState } from 'react';

export function UserProfile() {
    const { theme } = useContext(ThemeContext);
    const [isEditingName, setIsEditingName] = useState(false);

    useEffect(() => {
        if(isEditingName)
        {    
            var setpos = document.createRange();
            var set = window.getSelection();
            var element = document.getElementById("userName");
            setpos.setStart(element.childNodes[0], element.innerHTML.length);
            set.removeAllRanges();
            set.addRange(setpos);
            element.focus();
        }
    }, [isEditingName])

    return (
        <div className={styles.container}>
            <div className={styles.profileImage}>
                <div>
                    <Icon icon="fluent:camera-edit-20-regular" width="60" />
                    <p>Clique aqui para inserir uma nova foto de perfil</p>
                </div>
                <img src="https://github.com/DiegoSousa-11.png" alt="Avatar-User" />
            </div>
            <div style={theme && {color: theme.text}}>
                <strong 
                id="userName"
                contentEditable={isEditingName}
                suppressContentEditableWarning={true} 
                onBlur={() => isEditingName && setIsEditingName(false)}
                >Diego de Sousa
                </strong>

                <Icon onClick={() => setIsEditingName(true)} icon="fluent:edit-24-filled" />
            </div>
        </div>
    )
}