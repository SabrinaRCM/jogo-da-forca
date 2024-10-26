import styles from "../styles/PalavraForca.module.css"

type palavraForcaProps = {
    letrasAdivinhadas: string[]
    palavraParaAdivinhar: string
}

export function PalavraForca({letrasAdivinhadas, palavraParaAdivinhar}: Readonly<palavraForcaProps>) {
    return (
        <div className={styles.displayPalavra}>
            {palavraParaAdivinhar.split("").map((letra, index) => (
            <span className={styles.sublinhadoLetra} key={index}>
                <span style={{
                    visibility: letrasAdivinhadas.includes(letra) 
                    ? "visible" 
                    : "hidden"
                }}>{letra}</span>
            </span>
            
        ))}</div>
    )
}