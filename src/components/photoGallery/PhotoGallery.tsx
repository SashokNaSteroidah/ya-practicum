import React from "react";
import styles from './photoGallery.module.sass'

const PhotoGallery = () => {
    return (
        <section className={styles.photoGallery}>
            <h1>Привет, я Никита</h1>
            <article>
                <div>
                    <p>Вот так я выгляжу сейчас</p>
                    <img src="./6ilNujgpNu0.jpg" alt=""/>
                </div>
                <div>
                    <img src="./VpwfskWet5I.jpg" alt=""/>
                    <p>А вот так в 9 классе</p>
                </div>
            </article>
            <span>Согласен, жизнь меня помотала... я стал размытым...</span>
        </section>
    );
};


export default PhotoGallery;