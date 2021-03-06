import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { checkFilling } from "../utils"
import { checkEducation } from "../utils"



export function Education() {

    const [education, setEducation] = useState('Среднее');
    const [institution, setInstitution] = useState('');
    const [startEducation, setStartEducation] = useState('2012');
    const [endEducation, setEndEducation] = useState('2015');
    const [russian, setRussian] = useState(false);
    const [english, setEnglish] = useState(false);
    const [german, setGerman] = useState(false);

    const handleChangeState = () => {
        sessionStorage.setItem('step2', JSON.stringify({
            education,
            institution,
            startEducation,
            endEducation,
            russian,
            english,
            german
        }))
    }

    const handleChangeInstitution = (e) => {
        let newValue = e.target.value;
        setInstitution(newValue);
    }

    return (
        <div className="PersonData">
            <h1 className="title">Образование</h1>
            <div className="container">
                <form className="form">

                    <div className="formSection" onChange={(e) => { setEducation(checkEducation(e.target.value)) }} value={education}>

                        <input className="radioInput" id="ed1" type="radio" name="education" value="secondary" defaultChecked />
                        <label className="label radioLabel" htmlFor="ed1">Среднее</label>

                        <input className="radioInput" id="ed2" type="radio" name="education" value="secondary_special" />
                        <label className="label radioLabel" htmlFor="ed2">Среднее специальное</label>

                        <input className="radioInput" id="ed3" type="radio" name="education" value="higher" />
                        <label className="label radioLabel" htmlFor="ed3">Высшее</label>
                    </div>

                    <div className="formSection">
                        <label className="label">Учебное заведение</label>
                        <input type="text" className="input" defaultValue={institution}
                            onChange={handleChangeInstitution} id='institution' placeholder='БГУ' />
                    </div>

                    <div className="formSection">
                        <label className="label">Год начала обучения</label>
                        <select className="input" value={startEducation} onChange={(e) => { setStartEducation(e.target.value) }}>
                            <option className="input options">2012</option>
                            <option className="input options">2013</option>
                            <option className="input options">2014</option>
                            <option className="input options">2015</option>
                            <option className="input options">2016</option>
                            <option className="input options">2017</option>
                            <option className="input options">2018</option>
                            <option className="input options">2019</option>
                            <option className="input options">2020</option>
                            <option className="input options">2021</option>
                        </select>
                    </div>

                    <div className="formSection">
                        <label className="label">Год окончания обучения</label>
                        <select className="input" value={endEducation} onChange={(e) => { setEndEducation(e.target.value) }}>
                            <option className="input options">2015</option>
                            <option className="input options">2016</option>
                            <option className="input options">2017</option>
                            <option className="input options">2018</option>
                            <option className="input options">2019</option>
                            <option className="input options">2020</option>
                            <option className="input options">2021</option>
                            <option className="input options">по настоящее время</option>
                        </select>
                    </div>

                    <div className="formSection">
                        <label className="label">Знание языков</label>
                        <div className="checkBoxGroup">
                            <div className="flex">
                                <input type="checkbox" className="inputCheckBox" checked={russian}
                                    onChange={(e) => { setRussian(e.target.checked) }} />
                                <label className="labelCheckBox">Русский</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className="inputCheckBox" checked={english}
                                    onChange={(e) => { setEnglish(e.target.checked) }} />
                                <label className="labelCheckBox">Английский</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" className="inputCheckBox" checked={german}
                                    onChange={(e) => { setGerman(e.target.checked) }} />
                                <label className="labelCheckBox">Немецкий</label>
                            </div>
                        </div>
                    </div>

                    <Link to={"/step3"}>
                        <div className="centerBut">
                            <button className={`${checkFilling([institution]) === true ? 'nextBut' : 'nextBut hide'}`}
                                onClick={handleChangeState}>Продолжить</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}