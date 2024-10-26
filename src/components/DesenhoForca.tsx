import styles from "../styles/DesenhoForca.module.css"

const CABECA = (
    <div className={styles.cabeca}></div>
)
const CORPO = (
    <div className={styles.corpo}></div>
)

const BRACO_DIREITO = (
    <div className={styles.bracoDireito}></div>
)

const BRACO_ESQUERDO = (
    <div className={styles.bracoEsquerdo}></div>
)

const PERNA_DIREITA = (
    <div className={styles.pernaDireita}></div>
)

const PERNA_ESQUERDA = (
    <div className={styles.pernaEsquerda}></div>
)

const PARTES_CORPO = [CABECA, CORPO, BRACO_DIREITO, BRACO_ESQUERDO, PERNA_DIREITA, PERNA_ESQUERDA]

type DesenhoForcaProps = {
    numeroAcertos: number
}

export function DesenhoForca({numeroAcertos} : Readonly<DesenhoForcaProps>) {
    return (
        <div className={styles.posicao}>
            {PARTES_CORPO.slice(0, numeroAcertos)}
            <div className={styles.riscoPontaForca}></div>
            <div className={styles.riscoTopo}></div>
            <div className={styles.riscoPrincipal}></div>
            <div className={styles.riscoBase}></div>
        </div>
    )
}