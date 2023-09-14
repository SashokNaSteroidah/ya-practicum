import React, {FC} from 'react';
import styles from "./menu.module.sass"
import {Link} from "react-router-dom";

const Menu: FC = () => {


    return (
        <aside className={styles.menu}>
            <nav>
                <Link to={'/'}>Фоточки</Link>
                <hr/>
                <Link to={'/about'}>Время историй</Link>
                <hr/>
                <Link>Исходники</Link>
                <hr/>
                <Link>Урок</Link>
            </nav>
        </aside>
    );
};

export default Menu;