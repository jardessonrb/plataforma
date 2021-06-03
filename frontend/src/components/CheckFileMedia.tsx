import styles from '../styles/components/CheckFileMedia.module.css';
import { FiCheckCircle } from 'react-icons/fi';
import { BsCircle } from 'react-icons/bs';

type DataFileMedia = {
    isVisualized: boolean;
    nameClassRoom: string;
}

export function CheckFileMedia(props: any){
    return (
        <div className={styles.containerContent}>
            <div className={styles.content}>
                {props.data.isVisualized ? (<FiCheckCircle className={styles.iconsCheck}/>) : (<BsCircle className={styles.iconCircle}/>)}
                <span className={styles.spanNameClassRoom}>
                    {props.data.nameClassRoom}
                </span>
            </div>
        </div>
    );
}