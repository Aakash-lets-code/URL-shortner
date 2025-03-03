"use client";
import React from 'react'
import { useState } from 'react';

const shorten = () => {

    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generate, setGenerate] = useState(false);



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
                <button className='shadow-2xl px-3 py-1 rounded-lg bg-purple-600 font-bold text-white' >Generate</button>
            </div>

        </div>
    )
}

export default shorten