import React from 'react';
import styles from './sourceCode.module.sass'
import {useLoader} from "../../hooks/useLoader";
import Loader from "../UI/loader/Loader";

const SourceCode = () => {

    const isLoading = useLoader()

    return (
        isLoading
            ? <Loader/>
            : <section className={styles.SourceCode}>
                <h1>Исходные коды проекта</h1>
                <article>
                    <a target='_blank' href='https://github.com/SashokNaSteroidah/ya-practicum'
                       className={styles.buttonStyle}>Исходный код</a>
                </article>
            </section>
    );
};

export default SourceCode;