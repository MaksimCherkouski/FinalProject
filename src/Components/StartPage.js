import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


export function StartPage() {

    return (

        <div className="container ">
            <h1 className="title">Заполните анкеты для резюме</h1>
            <Link to={"/step1"}>
                <button className="nextBut">Начать</button>
            </Link>
        </div>
    )
}