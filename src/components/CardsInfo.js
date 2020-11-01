import style from "./CardsInfo.module.css";
import React from "react";

export let CardsInfo = (props) => {
    return (
        <div className={style.card_title}>
            <h3>{props.nameBook}</h3>
            <p>{props.author}</p>
        </div>
    )
};