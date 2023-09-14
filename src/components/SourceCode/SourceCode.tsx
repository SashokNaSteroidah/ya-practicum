import React from 'react';
import styles from './sourceCode.module.sass'

const SourceCode = () => {
    return (
        <section className={styles.SourceCode}>
            <h1>Исходные коды проекта</h1>
            <article>
                <button className={styles.buttonStyle}>Исходный код</button>
                <button className={styles.buttonStyle}>Сайт-портфолио</button>
            </article>
        </section>
    );
};

export default SourceCode;