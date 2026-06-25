import { useNavigate } from "react-router-dom"
import styles from "./NotFound.module.css"
import dog from "assets/dogNotFound.png";
import MainButton from "components/MainButton";

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className={styles.bannerNotFound}>

            <h1 className={styles.title}>
                404
            </h1>

            <h2 className={styles.subTitle}>
                Ops! Página não encontrada.
            </h2>

            <p className={styles.paragraphNotFound}>
                Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.containerBtnDog}>

                <MainButton onClick={() => navigate(-1)} className={styles.buttonVoltar}>Voltar</MainButton>

                <img src={dog} alt="Cachorrinho" />

            </div>
        </div>
    )
}