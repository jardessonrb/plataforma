import styles from '../styles/pages/Home.module.css'
import { BsBell, BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';
import { FolderFileMedia } from '../components/FolderFileMedia';
import { MainAsideInformationProgress } from '../components/MainAsideInformationProgress';

export default function Home() {
  return (
    <div className={styles.containerContent}>
        <div className={styles.header}>
            <div className={styles.headerLogo}> 
                <h3>Logo</h3>
            </div>
            <div className={styles.headerTop}> 
                <div className={styles.headerTopInformations}>
                    <div className={styles.notification}>
                        <BsBell className={styles.icons}/>
                        <span>3</span>
                    </div>
                    <div className={styles.headerTopDataUser} >
                        <span>Nome do usuario</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.mainLateral}>
                <div className={styles.mainAside}>
                    <MainAsideInformationProgress />
                </div>
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
                <FolderFileMedia />
            </div>
            <div className={styles.mainCenter}>
                <div className={styles.controlPreviouNext}>
                    <div className={styles.controlActionsPrevious}>
                        <BsBoxArrowInLeft className={styles.icons}/>
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
                        <BsBoxArrowInRight className={styles.icons}/>
                    </div>
                </div>
                <div className={styles.containerMedia}>
                    <video controls>
                        <source 
                            src="mp4-listas-encadeadas.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <span>Aula sobre listas encadeadas 02</span>
                </div>
            </div>
        </div>
    </div>
  )
}
