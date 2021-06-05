import styles from '../styles/components/MainAsideInformationProgress.module.css'

export function MainAsideInformationProgress(){

    return(
        <div className={styles.containerContent}>
            <div className={styles.circleProgress}>
                <span>45%</span>
            </div>
            <div className={styles.dataCourseProgress}>
                <span className={styles.nameCourse}>Estrutura de dados básico, médio e avançado</span>
                <span className={styles.attendedClasses}>Você já concluiu 50 aulas de 120.</span>
            </div>
        </div>
    );
}