import { useState } from 'react';
import { VscFolder, VscFolderOpened } from 'react-icons/vsc';
import styles from '../styles/components/FolderFileMedia.module.css';
import { CheckFileMedia } from './CheckFileMedia';


export function FolderFileMedia(){ 
    const [hidden, setHidden] = useState(false);
    const [isIconFolderOpen, setIsIconFolderOpen] = useState(false);

    function updateVisibilityContainer(){
        setHidden(!hidden);
        setIsIconFolderOpen(!isIconFolderOpen);
    }
    
    return (
        <div className={styles.containerContent} >
            <div className={styles.headerFolderFileMedia} onClick={updateVisibilityContainer}>
                {isIconFolderOpen ? (<VscFolderOpened className={styles.icons}/>) : (<VscFolder className={styles.icons} />)}
                <div className={styles.informationModule}>
                    <span className={styles.nivelModule}>Nivel 1</span>
                    <span className={styles.nameModule}>Estruturas de dados básicas</span>
                </div>
                <span className={styles.progressModule}>3 / 6</span>
            </div>
            <div className={(hidden == true ? styles.mainFileVisible : styles.mainFileInvisible)}>
                <CheckFileMedia data={{isVisualized: true, nameClassRoom: "aula sobre listas encadeadas 1 com alguns exemplos praticos"}}/>
                <CheckFileMedia data={{isVisualized: true, nameClassRoom: "aula sobre listas encadeadas 2"}}/>
                <CheckFileMedia data={{isVisualized: true, nameClassRoom: "aula sobre listas encadeadas 3"}}/>
                <CheckFileMedia data={{isVisualized: false, nameClassRoom: "aula sobre listas encadeadas 4"}}/>
                <CheckFileMedia data={{isVisualized: false, nameClassRoom: "aula sobre listas encadeadas 5"}}/>
                <CheckFileMedia data={{isVisualized: false, nameClassRoom: "aula sobre listas encadeadas 6"}}/>
            </div>
        </div>
    );
}