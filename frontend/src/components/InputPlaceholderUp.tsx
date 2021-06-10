import styles from '../styles/components/InputPlaceholderUp.module.css';

type ParamsComponent = {
    label: string;
    type: string;
}

export default function InputPlaceholderUp({label, type}: ParamsComponent){

    return(
        <div className={styles.containerContent}>
            <label className={styles.labelCustomInput}>
                <input className={styles.inputCustomInput} type={type}  placeholder=" "/>
                <p className={styles.pCustomInput}>{label}</p>
            </label>
        </div>
    );
}