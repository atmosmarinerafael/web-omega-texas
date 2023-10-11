"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import cheerio from "cheerio";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarAndButtons, CalendarStyles } from "./styles";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import br from 'date-fns/locale/pt-BR';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BoxesGND from "../BoxesGND";

registerLocale('pt-BR', br)



export default function CalendarComp() {
    const [html, setHtml] = useState([]);
    const [startDate, setStartDate] = useState(undefined);
    // const [value, onChange] = useState(new Date());
    const [graphUrl, setGraphUrl] = useState();
    const [clicked, setClicked] = useState(undefined);


    useEffect(() => {
        const promise = axios.get("/api/proxy");

        promise.then(res => setHtml(res.data))

        promise.catch(err => console.log(err.reponse.data));
    }, [])

// Carregar o HTML com cheerio
const $ = cheerio.load(html);

// Selecionar todos os elementos <a> e extrair os URLs
const links = [];
$('a').each((index, element) => {
    const href = $(element).attr('href');
    links.push(href);
});

links.shift();

// para pegar a última data

if(!links[links.length-1] && !startDate) {
    return (<>Carregando...</>)
}

const regex = /2023(\d{2})/;


const findLastDate = links[links.length-1].match(regex);

// precisa somar +1 por causa do horario universal
const lastDate = parseInt(findLastDate[1]);

// console.log(lastDate)
// const date = lastDate;

//     let baseUrl = ""

//     if(date < 10) {
//         baseUrl ="http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_2023100"
//     } else {
//         baseUrl = "http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_202310"
//     }
function handleDate(date) {
    setStartDate(date)
    setClicked("");
}


    return (<CalendarStyles>
        {/* <Calendar minDate={new Date('2023-10-02')} maxDate={new Date(`2023-10-${lastDate}`)} selected={startDate} onChange={(date) => setStartDate(date)} locale="pt-BR" dateFormat="dd/MM/yyyy" /> */}
        <CalendarAndButtons>
            <DatePicker minDate={new Date('2023-10-02')} maxDate={new Date(`2023-10-${lastDate+1}`)} selected={startDate} onChange={(date) => handleDate(date)} locale="pt-BR" dateFormat="dd/MM/yyyy"/>
            {startDate ? <BoxesGND clicked={clicked} setClicked={setClicked} selectedDate={startDate} setGraphUrl={setGraphUrl}/> : <h2>Clique para selecionar uma data.</h2>}
        </CalendarAndButtons>
        {clicked || clicked === 0 ? <iframe src={graphUrl} width="90%" height="80%" ></iframe>: ""}
    
        
    </CalendarStyles>)
}