import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TranslateForm from '../components/TranslateForm'
import express from 'express'
import cors from 'cors'

function Translate(props) {
    const [translatedArray, setTranslate] = useState({key: null, value: null});
    // const [toTranslates, setToTranslates] = useState([]);

    console.log(props);
    const { endpoint, api_key, title } = props;
    //const inputAndResultsMap = new Map();

    const app = express();

    app.use(cors);
    const axiosAuth = Axios.create({
        
        baseURL: process.env.REACT_APP_API_SERVER_PRODUCTION,
        headers: {
            "Access-Control-Allow-Origin": '*',
            "X-FunTranslations-Api-Secret": api_key
        }
    })
    const enterText = entered =>{

        if(!entered.text || /^s*$/.test(entered.text)){
            return
        }

        
        // const newToTranslate = [toTranslate, ...toTranslates];

        // setToTranslates(newToTranslate);

        axiosAuth.post(endpoint, {
            text: entered.text
        }).then(res => {

            // const newTranslates = [res.data.contents.translated, ...translatedArray]
            setTranslate({key: entered.text, value: res.data.contents.translated});
            
        })
    }

    return (
        
        <div className="trans">
            <h1>{title}</h1>
            <TranslateForm onSubmit={enterText} title={title}/>
            <div className="results-box">
                {translatedArray.key && <div className="entered-key">{translatedArray.key}</div>}
                {translatedArray.value && <div className="retrieved-value">{translatedArray.value}</div>}
            </div>
            <Link to="/">
                <button className="back-btn">
                    Back
                </button>
            </Link>
        </div>
        
    )
}

export default Translate
