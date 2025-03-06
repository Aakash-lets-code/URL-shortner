"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

const shorten = () => {

    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setGenerated] = useState("");

    const genrate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/genrate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));


    }



    return (
        <div className=' mx-auto max-w-lg flex flex-col my-16 p-4 rounded-lg bg-purple-300' >

            <h1 className='py-3 font-bold text-2xl text-center' >Genrate your short URLs</h1>

            <div className='flex flex-col gap-3 ' >
                <input
                    type='text'
                    className='p-4 py-2 bg-white rounded-lg   '
                    placeholder='Enter your long URL here'
                    value={url}
                    onChange={e => { seturl(e.target.value) }}
                />
                <input
                    type="text"
                    className='p-4 py-2 bg-white rounded-lg  '
                    placeholder='Enter your preferred short URL'
                    value={shorturl}
                    onChange={e => { setshorturl(e.target.value) }}
                />
                {/* <button className='p-2 rounded-2xl bg-amber-800 text-white' >Generate</button> */}
                <button onClick={genrate} className='shadow-2xl px-3 py-1 rounded-lg bg-purple-600 font-bold text-white' >Generate</button>

                 <code className='w-full font-bold bg-purple-200 text-black text-center py-2 rounded-lg' >

                   Your link is : <Link target="_blank" href={generated} >{generated}</Link> 

                </code>

            </div>

        </div>
    )
}

export default shorten