import React from "react";
import style from "./Cards.module.css"
import {CardsInfo} from "./CardsInfo"
import {Link} from "react-router-dom";

let Cards = (props) => {
    return (
        <div className={style.card}>
            <div className={style.card_image}>
                <img className={style.photo_books} src={props.photo} alt="bad connection..."/>
                <a href={props.bookInPdf} target="_blank" download>
                    <div>
                        <button className={style.btn_download}>Download</button>
                    </div>
                </a>
                <div>
                    <Link to='/preview' target='_blank'>
                        <div className={style.btn_preview}>
                            <img width="25px" height="25px"
                                 src="https://www.flaticon.com/svg/static/icons/svg/3342/3342300.svg" alt=""/>
                        </div>
                    </Link>
                </div>
            </div>
            <CardsInfo author={props.author} nameBook={props.nameBook}/>
        </div>
    )
};
export default Cards;