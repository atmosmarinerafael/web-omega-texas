"use client"

import { useEffect, useState } from "react";
import * as cheerio from "cheerio";
import axios from "axios";

export default function Month() {
    const [html, setHtml] = useState([])

    useEffect(() => {
        const promise = axios.get("http://localhost:3000/api/proxy");

        promise.then(res => setHtml(res.data))

        promise.catch(err => console.log(err.reponse.data));
    }, [])

    

// Carregar o HTML com cheerio
const $ = cheerio.load(html);

// Selecionar todos os elementos <a> e extrair os URLs
const months = [];
$('a').each((index, element) => {
    const href = $(element).attr('href');
    months.push(href);
});

months.shift();



console.log(months);


    return(<>Month</>)
}