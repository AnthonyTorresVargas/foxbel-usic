import React from 'react'
import '../styles/components/videodetail.css'

export const VideoDetail = ({ onClickButton, pintar, onClick }) => {

    return (
        <div className="contenedor">
            <img className="foto" src={pintar.album.cover} alt="" />
            <div className="detalle">
                <>
                    <h2>{pintar.artist.name} {pintar.album.title} {pintar.title}</h2>
                    <h4>Lo mejor de {pintar.artist.name}</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corporis laudantium quos. Illo consequatur quibusdam ea veniam. Voluptas, libero iusto.</h5>
                </>
                <div className="buttons">
                    <button type="button" onClick={onClickButton} style={{ background: '#E86060', color: 'white' }}>Reproducir</button>
                    <button type="button" style={{ background: 'transparent', color: '#E86060' }}>Seguir</button>
                </div>
            </div>
        </div>

    )
}