import style from "./CardsInfo.module.css";
import React from "react";

export let CardsInfo = (props) => {
    return (
        <div className={style.card_title}>
            <h1>{props.author}</h1>
            <p>{props.nameBook}</p>
        </div>
    )
};