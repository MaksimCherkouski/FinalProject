import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


export function StartPage() {

    return (

        <div className="container ">
            <h1 className="titleStart  ">Заполните анкету для резюме</h1>
            <Link to={"/step1"}>
                <div className="centerBut">
                    <button className="nextBut">Начать</button>
                </div>
            </Link>
        </div>
    )
}