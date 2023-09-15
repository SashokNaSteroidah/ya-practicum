import React from 'react';
import styles from './videoGallery.module.sass'
import {useLoader} from "../../hooks/useLoader";
import Loader from "../UI/loader/Loader";

const VideoGallery = () => {

    const isLoading = useLoader()

    return (
        isLoading
            ? <Loader/>
            : <section className={styles.videoGallery}>
                <h1>Скринкаст</h1>
                <video controls={true} src="./00366_2.mp4"></video>
                <article>
                    <span className={styles.italic}>А вот и небольшой скринкаст на тему одной фишки CSS</span>
                </article>
            </section>

    );
};

export default VideoGallery;