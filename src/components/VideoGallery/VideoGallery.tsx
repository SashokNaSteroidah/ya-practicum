import {FC} from 'react';
import {useLoader} from "../../hooks/useLoader";
import styles from './videoGallery.module.sass'
import Loader from "../UI/loader/Loader";

const VideoGallery:FC = () => {

    const isLoading = useLoader()

    return (
        isLoading
            ? <Loader/>
            : <section className={styles.videoGallery}>
                <h1>Скринкаст</h1>
                <iframe width="800" height="500" src="https://www.youtube.com/embed/I6qUdUEBQ5A" title="Фишки CSS"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                </iframe>
                <article>
                    <span className={styles.italic}>А вот и небольшой скринкаст на тему одной фишки CSS</span>
                </article>
            </section>

    );
};

export default VideoGallery;