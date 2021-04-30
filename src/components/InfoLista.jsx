import React from 'react'
import { ItemLista } from './ItemLista'
import '../styles/components/infolista.css'

export const InfoLista = ({ onClick, music }) => {
    return (
        <>
            <h2>Resultados</h2>
            <div className="Lista">
                {
                    music.map(item => (
                        <ItemLista key={item.id} onClick={onClick} item={item} />
                    ))
                }
            </div>
        </>
    )
}