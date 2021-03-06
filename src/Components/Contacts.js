import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { checkFilling } from "../utils"

export function Contacts() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeState = () => {
        sessionStorage.setItem('step3', JSON.stringify({
            phoneNumber,
            email
        }))

    }
    const handleChangePhoneNumber = (e) => {
        let newValue = e.target.value;
        setPhoneNumber(newValue);
    }

    const handleChangeEmail = (e) => {
        let newValue = e.target.value;
        setEmail(newValue);

    }

    return (
        <div className="PersonData">
            <h1 className="title">Контакты</h1>
            <div className="container">
                <form className="form">


                    <div className="formSection">
                        <label className="label">Телефон</label>
                        <input type="text" className="input" defaultValue={phoneNumber}
                            onChange={handleChangePhoneNumber} placeholder='+375(25) 111 11 11' />
                    </div>

                    <div className="formSection">
                        <label className="label">Email</label>
                        <input type="email" className="input" defaultValue={email}
                            onChange={handleChangeEmail} placeholder='Email@mail.ru' />
                    </div>




                    <Link to={"/resultPage"}>
                        <div className="centerBut">
                            <button className={`${checkFilling([phoneNumber, email]) === true ? 'nextBut' : 'nextBut hide'}`}
                                onClick={handleChangeState}>Продолжить</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}