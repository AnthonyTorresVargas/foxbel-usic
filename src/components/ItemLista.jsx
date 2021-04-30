import React from 'react'
import '../styles/components/itemlista.css'
import playIcon from '../assets/play-icon.png'



export const ItemLista = ({ onClick, item }) => {

    return (
        <div className="itemLista" onClick={() => onClick(item)}>
            {/* <button className="button item" > */}
            <img className="itemLista-item__img" src={item.album.cover} alt="" />
            <div className="itemLista-item__details">
                <em>{item.title}</em>
                <p>{item.artist.name}</p>
            </div>

            {/* </button> */}

        </div>
    )
}