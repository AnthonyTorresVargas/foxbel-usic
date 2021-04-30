import React from 'react'
import '../styles/components/submenu.css'

export const SubMenu = () => {
    const items = [{ title: 'Recientes' }, { title: 'Artistas' }, { title: 'Albums' }, { title: 'Canciones' }, { title: 'Estaciones' }]
    const playlist = [{ title: 'Metal' }, { title: 'Para bailar' }, { title: 'Rock 90s' }, { title: 'Baladas' }, { title: 'Caporal' }]

    return (
        <div>
            <h3 className="title">Mi Libreria</h3>
            <div className="subtitle" style={{ height: '200px' }}>
                {items.map(item => (
                    <ul key={item.title}>
                        {item.title}
                    </ul>))
                }
            </div>
            <h3 className="title" >Playlist</h3>
            <div className="subtitle">
                {playlist.map(item => (
                    <ul key={item.title}>
                        {item.title}
                    </ul>))
                }
            </div>
        </div>
    )
}