import React from "react";
import style from "./Cards.module.css"
import {CardsInfo} from "./CardsInfo"
import {Link} from "react-router-dom";

let Cards = (props) => {
    return (
        <div className={style.card + " " + style.container}>
            <Link to={props.bookInPdf} target="_blank" download>
                <div className={style.card_image}>
                    <img src={props.photo} alt="bad connection..."/>
                    <button>Download</button>
                </div>
            </Link>
            <CardsInfo author={props.author} nameBook={props.nameBook}/>
        </div>
    )
};
export default Cards;