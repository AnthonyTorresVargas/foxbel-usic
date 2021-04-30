import React from 'react'
import '../styles/components/buscador.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserAlt } from 'react-icons/fa';

export const Buscador = ({ onChange }) => {
    return (
        <div className="header">
            <input onChange={onChange} className="form-control buscador" type="search" placeholder="Buscar" />
            <div>
                <FaUserAlt color="#E86060" />
                <label>Anthony T.</label>
            </div>
        </div>

    )
}