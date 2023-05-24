import React from "react";
import { IoPlanet } from "react-icons/io5";

const Square = (props) => {
    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player){
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "O");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    }

    return (
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ?  <IoPlanet />: props.squareValue}
        </div>
    )
}

export default Square;