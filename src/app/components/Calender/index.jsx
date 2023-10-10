"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import cheerio from "cheerio";

export default function Calendar() {
    const [html, setHtml] = useState("");
    const [month, setMonth] = useState("");

    useEffect(() => {
        const promise = axios.get("http://localhost:3000/api/proxy");

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

console.log(links);

    return (<>
        Calender
    </>)
}