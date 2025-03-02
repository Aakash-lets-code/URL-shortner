"use client";
import React from 'react'
import { useState } from 'react';

const shorten = () => {

    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generate, setGenerate] = useState(false);

    const handlechange = (e) => {
    }

    return (
        <div className=' mx-auto max-w-lg' >

            <h1 className='py-5' >Genrate your short URLs</h1>

            <div className='' >
                <input className='p-4 py-2 focus:bg-purple-200 m-1' type='text' placeholder='Enter your long URL here' onChange={handlechange} />
                <input className='p-4 py-2 focus:bg-purple-200 m-1' type="text" placeholder='Enter your preferred short URL' />
                <button className='p-2 rounded-2xl bg-amber-800 text-white' >Generate</button>
            </div>

        </div>
    )
}

export default shorten