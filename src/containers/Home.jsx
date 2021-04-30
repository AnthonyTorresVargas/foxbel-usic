import React, { useState, useEffect, useContext } from 'react'
import { Menu } from '../components/Menu'
import { Content } from '../components/Content'
import { Reproductor } from '../components/Reproductor'
import '../styles/components/home.css'

import initialState from '../initialState'

export const Home = () => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const [query, setQuery] = useState('eminem')

    const [music, setMusic] = useState(initialState.data)

    const [firstElement, setFirstElement] = useState(initialState.data[0])

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const yourUrl = `https://api.deezer.com/search?q=${query}`;

    useEffect(() => {
        fetch(corsAnywhere + yourUrl, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data =>
                setMusic(data.data)
            )
    }, [query])

    const buttonReproducir = () => {
        const audio = document.getElementById("audio")
        audio.play()
    }

    const handleClick = (item) => {
        setFirstElement(item)
    }
    if (music.length === 0)
        return <h1>Loading...</h1>
    return (
        <div className="Page">
            <div className="Home">
                <Menu />
                <Content onChange={handleChange} onClickButton={buttonReproducir} onClick={handleClick} item={firstElement} music={music} />
            </div>
            <Reproductor item={firstElement} />
        </div>
    )
}