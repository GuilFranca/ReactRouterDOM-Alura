import styles from './MainButton.module.css';

export default function MainButton({ children, className, onClick }) {

    return (
        <button onClick={onClick} className={`${!className ? styles.mainButton : className}`}>{children}</button>
    )
}