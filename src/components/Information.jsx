import React, { useState } from 'react'
import '../styles/components/information.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { VideoDetail } from './VideoDetail'
import { InfoLista } from './InfoLista'
// import { FaUserAlt } from 'react-icons/fa';

export const Information = ({ onClickButton, onClick, item, music }) => {

    return (
        <div className="video">
            <VideoDetail onClickButton={onClickButton} pintar={item} />
            <InfoLista onClick={onClick} music={music} />
        </div>

    )
}