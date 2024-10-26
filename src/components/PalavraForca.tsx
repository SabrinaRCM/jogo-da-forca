import styles from "../styles/PalavraForca.module.css"

type palavraForcaProps = {
    letrasAdivinhadas: string[]
    palavraParaAdivinhar: string
    revelarPalavra?: boolean
}

export function PalavraForca({letrasAdivinhadas, palavraParaAdivinhar, revelarPalavra = false}: Readonly<palavraForcaProps>) {
    return (
        <div className={styles.displayPalavra}>
            {palavraParaAdivinhar.split("").map((letra, index) => (
            <span className={styles.sublinhadoLetra} key={index}>
                <span style={{
                    visibility: letrasAdivinhadas.includes(letra) || revelarPalavra 
                    ? "visible" 
                    : "hidden",
                    color: !letrasAdivinhadas.includes(letra) && revelarPalavra ? "red" : "black"
                }}>{letra}</span>
            </span>
            
        ))}</div>
    )
}