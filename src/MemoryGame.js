import React, { useEffect, useState } from "react"
import GameOver from "./components/GameOver"
import GameBoard from "./components/GameBoard"
import game from "./game/game"


export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false) // Iniciando como falso para não ser mostrado
    const [cards,setCards] =useState([])

    useEffect(()=>{
        setCards(game.createCardsFromTechs())
    },[])

    function restart(){
        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function onHandleFlip(card){
        if (game.setCard(card.id)) {
            if (game.secondCard) {
                if (game.checkMatch()) {
                    game.clearCards()
                   if(game.checkGameOver()){
                    setGameOver(true)
                   }
                } else {
                   setTimeout(() => {
                        game.unflipCards()
                        setCards([...game.cards])
                    }, 1000)
    
                }
            }
        }
        setCards([...game.cards])
    }

    

    return(
         <div>
             <GameBoard onHandleFlip = {onHandleFlip} cards={cards}></GameBoard>
            <GameOver show ={gameOver} handleRestart= {restart} ></GameOver>
         </div>)
}