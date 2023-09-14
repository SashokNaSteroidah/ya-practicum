import React from 'react';
import styles from './videoGallery.module.sass'

const VideoGallery = () => {
    return (
        <section className={styles.videoGallery}>
            <h1>Скринкаст</h1>
            <article>
                <span>А вот и небольшой скринкаст на тему одной фишки CSS</span>
            </article>
        </section>
    );
};

export default VideoGallery;