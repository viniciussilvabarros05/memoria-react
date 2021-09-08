import React from "react"
import CardElement from "./CardElement"


export default function GameBoard(props) {
    return (
        <div id="GameBoard">
            {props.cards.map((card, index) =>
                <CardElement onHandleFlip= {props.onHandleFlip} key={index} card={card}></CardElement>
            )}
        </div>
    )
}