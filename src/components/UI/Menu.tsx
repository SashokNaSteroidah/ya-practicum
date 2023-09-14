import React from 'react';
import styles from "./menu.module.sass"

const Menu:FC = () => {


    return (
        <aside className={styles.menu}>
            <ul>
                <li >Фоточки</li>
                <hr/>
                <li>Время историй</li>
                <hr/>
                <li>Исходники</li>
                <hr/>
                <li>Урок</li>
            </ul>
        </aside>
    );
};

export default Menu;