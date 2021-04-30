import React from 'react'
import { Information } from './Information'
import '../styles/components/content.css'

import { Buscador } from './Buscador'

export const Content = ({ onChange, onClickButton, onClick, item, music }) => {
    return (
        <div className="Content">
            <Buscador onChange={onChange} />
            <Information onClickButton={onClickButton} onClick={onClick} item={item} music={music} />
        </div>
    )
}