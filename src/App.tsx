import { useCallback, useEffect, useState } from "react"
import palavras from "./assets/listaPalavras.json"
import styles from "./styles/App.module.css"
import { DesenhoForca } from "./components/DesenhoForca"
import { PalavraForca } from "./components/PalavraForca"
import { Teclado } from "./components/Teclado"

function App() {
  
  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState(novaPalavra)
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([])

  const letrasIncorretas = letrasAdivinhadas.filter(letra => !palavraParaAdivinhar.includes(letra))

  const perdeu = letrasIncorretas.length >= 6
  const ganhou = palavraParaAdivinhar.split("").every(letra => letrasAdivinhadas.includes(letra))

  const addLetraAdivinhada = useCallback((letra: string) => {
    if (letrasAdivinhadas.includes(letra) || perdeu || ganhou) return
    setLetrasAdivinhadas(letrasAtuais => [...letrasAtuais, letra])
  }, [letrasAdivinhadas, perdeu, ganhou])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addLetraAdivinhada(key)
    }
    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [letrasAdivinhadas])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setLetrasAdivinhadas([])
      setPalavraParaAdivinhar(novaPalavra())
    }
    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [letrasAdivinhadas])

  return (
    <div className={styles.mainDisplay}>
      <div className={styles.textoResultado}>
        {ganhou && "Vencedor! - Recarregue a página para jogar novamente"}
        {perdeu && "Boa tentativa! - Recarregue a página para jogar novamente"}
      </div>
      <DesenhoForca 
        numeroAcertos={letrasIncorretas.length} 
      />
      <PalavraForca
        revelarPalavra={perdeu}
        letrasAdivinhadas={letrasAdivinhadas} 
        palavraParaAdivinhar={palavraParaAdivinhar} 
      />
      <div className={styles.teclado}>
        <Teclado
          disabled={ganhou || perdeu}
          letrasAtivas={letrasAdivinhadas.filter(letra => palavraParaAdivinhar.includes(letra))}
          letrasInativas={letrasIncorretas}
          addLetraAdivinhada={addLetraAdivinhada}
        />
      </div>

    </div>
  )
}

function novaPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)]
}

export default App
