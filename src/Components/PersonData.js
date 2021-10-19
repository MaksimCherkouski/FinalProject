import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { checkFilling } from "../utils"



export function PersonData() {

    const [secondName, setSecondName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [age, setAge] = useState('18');
    const [city, setCity] = useState('');


    const handleChangeState = () => {


        sessionStorage.setItem('step1', JSON.stringify({ secondName, firstName, patronymic, age, city }))


    }

    const handleChangeSecondName = (e) => {
        let newValue = e.target.value;
        setSecondName(newValue);

    }

    const handleChangeFirstName = (e) => {
        let newValue = e.target.value;
        setFirstName(newValue);

    }

    const handleChangeCity = (e) => {
        let newValue = e.target.value;
        setCity(newValue);

    }



    return (
        <div className="PersonData">
            <h1 className="title">Личные данные</h1>
            <div className="container">
                <form className="form">

                    <div className="formSection">
                        <label className="label">Фамилия</label>
                        <input type="text" className="input" defaultValue={secondName}
                            onChange={handleChangeSecondName} placeholder='Иванов' />
                    </div>

                    <div className="formSection">
                        <label className="label">Имя</label>
                        <input type="text" className="input" defaultValue={firstName}
                            onChange={handleChangeFirstName} placeholder='Иван' />
                    </div>

                    <div className="formSection">
                        <label className="label">Отчество</label>
                        <input type="text" className="input" defaultValue={patronymic}
                            onChange={(e) => setPatronymic(e.target.value)} placeholder='Иванович' />
                    </div>

                    <div className="formSection">
                        <label className="label">Возраст</label>
                        <div className="date">
                            <p className="input age">{age}</p>
                            <input type="range" className="input" min="18" max="60" defaultValue={age}
                                onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>

                    <div className="formSection">
                        <label className="label">Город</label>
                        <input type="text" className="input" defaultValue={city}
                            onChange={handleChangeCity} placeholder='Минск' />
                    </div>

                    <Link to={"/step2"}>
                        <div className="centerBut">
                            <button className={`${checkFilling([secondName, firstName, city]) === true ? 'nextBut' : 'nextBut hide'}`}
                                onClick={handleChangeState}>Продолжить</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}