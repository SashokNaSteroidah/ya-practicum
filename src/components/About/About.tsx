import styles from './about.module.sass'
import {useLoader} from "../../hooks/useLoader";
import Loader from "../UI/loader/Loader";
import {FC} from "react";

const About: FC = () => {

    const isLoading = useLoader()

    return (
        isLoading
            ? <Loader/>
            : <section className={styles.about_container}>
                <h1>Время интересных историй</h1>
                <article>
                    <p>
                        Я начал заниматься разработкой еще в 9 классе, тогда это было похоже на то, что я просто писал
                        рандомные теги в html
                    </p>
                    <p>
                        С того времени прошло уже довольно много (около 5 лет), но по настоящего меня заинтерисовало
                        программирование только сейчас
                    </p>
                    <p>
                        Впервые потрогал реакт. Понял, что разработка не такая простая, как мне раньше казалось
                    </p>
                    <p className={styles.italian}>Удивился, что разработка - это не просто передать html'ку php разрабу и
                        ждать пока произойдет чудо)</p>
                    <p>
                        Как бы у меня не было много дел, которые могут мешать мне продвигаться в разработке, но я стараюсь
                        выделять хоть чуток времени в день
                    </p>
                    <p className={styles.italian}>
                        Даже порой документацию бывает полезно, пока едешь в метро)
                    </p>
                </article>
                <span className={styles.italian}>
                И если что-то не получается, то нужно продолжать стараться, чтобы рано или поздно получилось все
            </span>
            </section>
    );
};

export default About;