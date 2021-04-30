import React from 'react'
import { Logo } from './Logo'
import '../styles/components/menu.css'
import { SubMenu } from './SubMenu'

export const Menu = () => {
    return (
        <div className="Menu">
            <Logo />
            <SubMenu />
        </div>
    )
}