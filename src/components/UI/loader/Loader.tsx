import styles from './loader.module.sass'

const Loader = () => {
    return (
        <div className={styles.div_loader}>
            <img className={styles.loader_img} src="./loader.gif" />
        </div>
    );
};

export default Loader;