import { useState } from 'react';
import InputPlaceholderUp from '../components/InputPlaceholderUp';
import styles from '../styles/pages/Login.module.css';

export default function Login(){
    const [typeInput, togglerTypeInput] = useState("password");

    function togglerType(){
        typeInput == "password" ? togglerTypeInput("text") : togglerTypeInput("password");
    }

    return(
        <div className={styles.containerContent}>
            <div className={styles.contentLogin}>
                <div className={styles.loginHeader}>
                    <div>
                        <img src="" alt="Logo" />
                    </div>
                </div>
                <div className={styles.loginMain}>
                    <InputPlaceholderUp label="Seu e-mail" type="text"/>
                    <InputPlaceholderUp label="Sua senha" type={typeInput}/>
                    <div className={styles.areaPasswordActions}>
                        <div>
                            <input type="checkbox" onClick={togglerType}/>
                            <span>Mostrar minha senha</span>
                        </div>
                        <a href="#">Hi, esqueci minha senha !</a>
                    </div>
                    <button className={styles.button}>Entrar</button>
                </div>
            </div>
        </div>
    );
}