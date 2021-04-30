import React from 'react'
import '../styles/components/reproductor.css'

export const Reproductor = ({ item }) => {
    return (
        <div className="Reproductor">
            <img src={item.album.cover} alt="" />
            <div className="infoReproductor">
                <p>{item.title}</p>
                <p>{item.artist.name} - {item.album.title}</p>
            </div>
            <audio id="audio"
                autoplay='true'
                controls
                src={item.preview}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    )
}