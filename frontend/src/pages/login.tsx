import { FormEvent, useState } from 'react';
import Link from 'next/link';
import InputPlaceholderUp from '../components/InputPlaceholderUp';
import styles from '../styles/pages/Login.module.css';
import api from '../service/api';
import { validationLogin } from  '../service/validations';

export default function Login() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleIsShowingPassword() {
    setIsShowingPassword(!isShowingPassword);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const { status, message } = validationLogin({email, password});

    if(status == "error"){
      alert(message);
      return;
    }

    const data = {
      email_student: email,
      password_student: password
    }

    const result = await api.get("login", {
      params: {
      email_student: email,
      password_student: password
    }}).then(response => {
      console.log(response.data);
    })

  }

  return (
    <div className={styles.containerContent}>
      <div className={styles.contentLogin}>
        <div className={styles.loginHeader}>
          <div>
            <img src="" alt="Logo" />
          </div>
        </div>
        <form onSubmit={submit} className={styles.loginMain}>
            <InputPlaceholderUp
              label="Seu e-mail"
              type="text"
              value={email}
              onChange={(event) => {setEmail(event.target.value)}}
            />
            <InputPlaceholderUp
              label="Sua senha"
              type={isShowingPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {setPassword(event.target.value)}}
            />
            <div className={styles.areaPasswordActions}>
              <div>
                <input type="checkbox" onClick={toggleIsShowingPassword} />
                <span>Mostrar minha senha</span>
              </div>
              <Link href="/password/redefine" passHref>
                Esqueci minha senha !
              </Link>
            </div>
            <button type="submit" className={styles.button}>Entrar</button>
          </form>
      </div>
    </div>
  );
}
