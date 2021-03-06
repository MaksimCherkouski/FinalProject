import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { checkLanguage } from "../utils"




export function ResultPage() {
    const [secondName, setSecondName] = useState('');
    useEffect(() => {
        setSecondName(JSON.parse(sessionStorage.getItem('step1')).secondName)
    }, [])

    const [firstName, setFirstName] = useState('');
    useEffect(() => {
        setFirstName(JSON.parse(sessionStorage.getItem('step1')).firstName)
    }, [])

    const [patronymic, setPatronymic] = useState('');
    useEffect(() => {
        setPatronymic(JSON.parse(sessionStorage.getItem('step1')).patronymic)
    }, [])

    const [age, setAge] = useState('');
    useEffect(() => {
        setAge(JSON.parse(sessionStorage.getItem('step1')).age)
    }, [])

    const [city, setCity] = useState('');
    useEffect(() => {
        setCity(JSON.parse(sessionStorage.getItem('step1')).city)
    }, [])

    const [education, setEducation] = useState('');
    useEffect(() => {
        setEducation(JSON.parse(sessionStorage.getItem('step2')).education)
    }, [])

    const [institution, setInstitution] = useState('');
    useEffect(() => {
        setInstitution(JSON.parse(sessionStorage.getItem('step2')).institution)
    }, [])

    const [startEducation, setStartEducation] = useState('');
    useEffect(() => {
        setStartEducation(JSON.parse(sessionStorage.getItem('step2')).startEducation)
    }, [])

    const [endEducation, setEndEducation] = useState('');
    useEffect(() => {
        setEndEducation(JSON.parse(sessionStorage.getItem('step2')).endEducation)
    }, [])

    const [russian, setRussian] = useState('');
    useEffect(() => {
        setRussian(JSON.parse(sessionStorage.getItem('step2')).russian)
    }, [])

    const [english, setEnglish] = useState('');
    useEffect(() => {
        setEnglish(JSON.parse(sessionStorage.getItem('step2')).english)
    }, [])

    const [german, setGerman] = useState('');
    useEffect(() => {
        setGerman(JSON.parse(sessionStorage.getItem('step2')).german)
    }, [])


    const [phoneNumber, setPhoneNumber] = useState('');
    useEffect(() => {
        setPhoneNumber(JSON.parse(sessionStorage.getItem('step3')).phoneNumber)
    }, [])

    const [email, setEmail] = useState('');
    useEffect(() => {
        setEmail(JSON.parse(sessionStorage.getItem('step3')).email)
    }, [])


    var language = checkLanguage(russian, english, german)

    return (
        <div className="PersonData">
            <h1 className="title titlePage">???????? ????????????</h1>
            <div className="container ">

                <h2 className="title">???????????? ????????????</h2>
                <p className="page">??????????????: {secondName}</p>
                <p className="page">??????: {firstName}</p>
                <p className="page">????????????????: {patronymic}</p>
                <p className="page">??????????????: {age}</p>
                <p className="page">??????????: {city}</p>

                <h2 className="title">??????????????????????</h2>
                <p className="page">?????????????? ??????????????????????: {education}</p>
                <p className="page">?????????????? ??????????????????: {institution}</p>
                <p className="page">???????? ????????????????: ?? {startEducation} ???? {endEducation}</p>
                <p className="page">???????????? ????????????: {language}</p>

                <h2 className="title">????????????????</h2>
                <p className="page">??????. ??????????????: {phoneNumber}</p>
                <p className="page">??????????: {email}</p>
                <Link to={"/finish"}>
                    <div className="centerBut">
                        <button className="nextBut" >??????????????????</button>
                    </div>
                </Link>
            </div>
        </div >
    )
}