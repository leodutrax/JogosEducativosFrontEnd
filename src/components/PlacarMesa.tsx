import type { PlacarMesaProps } from "../types/components/exemplo-props.types"

function PlacarMesa({maoJogador, maoDealer}:PlacarMesaProps) {
  
  return (
    <section className="placar-mesa">
      <p>Jogador: {maoJogador}</p>
      <p>Dealer: {maoDealer}</p>
    </section>
  )
}

export default PlacarMesa