import React from "react";
import style from "./Cards.module.css"
import {CardsInfo} from "./CardsInfo"

let Cards = (props) => {
    return (
        <div className={style.card}>
            <div className={style.card_image}>
                <img src={props.photo} alt="clean-code"/>
            </div>
            <CardsInfo author={props.author} nameBook={props.nameBook}/>
        </div>
    )
};

export default Cards;