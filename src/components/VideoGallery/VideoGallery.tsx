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
                <video controls={true} src="http://s91026w9.beget.tech/video_screencast.mp4" />
                <article>
                    <span className={styles.italic}>А вот и небольшой скринкаст на тему одной фишки CSS</span>
                </article>
            </section>

    );
};

export default VideoGallery;