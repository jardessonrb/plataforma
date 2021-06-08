import styles from '../styles/components/CheckFileMedia.module.css';
import { FiCheckCircle } from 'react-icons/fi';
import { BsCircle } from 'react-icons/bs';

type DataFileMedia = {
    isVisualized: boolean;
    nameClassRoom: string;
}

const CheckFileMedia: React.FC<DataFileMedia> = ({isVisualized, nameClassRoom}) => {
    return (
        <div className={styles.containerContent}>
            <div className={styles.content}>
                {isVisualized ? (<FiCheckCircle className={styles.iconsCheck}/>) : (<BsCircle className={styles.iconCircle}/>)}
                <span className={styles.spanNameClassRoom}>
                    {nameClassRoom}
                </span>
            </div>
        </div>
    );
}

export default CheckFileMedia;