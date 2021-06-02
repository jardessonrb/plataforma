import styles from '../styles/pages/Home.module.css'
import { Player } from 'video-react';

export default function Home() {
  return (
    <div className={styles.containerContent}>
        <div className={styles.header}>
            <div className={styles.headerLogo}> 
                <h3>Logo</h3>
            </div>
            <div className={styles.headerTop}> 
                <div className={styles.headerTopInformations}>
                    <img src="./assets/notification.svg" alt="notificação" className={styles.icons}/>
                    <div className={styles.headerTopDataUser} >
                        <span>Nome do usuario</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.mainLateral}>
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
              <p>Conteudo lateral</p> 
            </div>
            <div className={styles.mainCenter}>
                <div className={styles.controlPreviouNext}>
                    <div className={styles.controlActionsPrevious}>
                        <img src="./assets/previous-media.svg" alt="previou" className={styles.icons}/>
                        <div className={styles.paginationMedia}>
                            <span>Aula anterior</span>
                            <span>Aula sobre listas encadeadas 01</span>
                        </div>
                    </div>
                    <div className={styles.controlActionsNext}>
                        <div className={styles.paginationMedia}>
                            <span>Proxima aula </span>
                            <span>Aula sobre listas encadeadas 03</span>
                        </div>
                        <img src="./assets/next-media.svg" alt="previou" className={styles.icons}/>
                    </div>
                </div>
                <div className={styles.containerMedia}>
                    <video controls>
                        <source src="https://www.youtube.com/watch?v=jIM87UqOq3g"
                                type="video/mp4"
                        />
                    </video>

                    {/* <Player
                        playsInline
                        poster=""
                        src="https://www.loom.com/share/ff96d0b8851545df8d659637f69ae8b5"
                    /> */}
                    <span>Aula sobre listas encadeadas 02</span>
                </div>
            </div>
        </div>
    </div>
  )
}
