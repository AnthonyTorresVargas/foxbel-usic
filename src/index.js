import React from 'react';
import ReactDOM from 'react-dom';
import DataContext from './context/DataContext'

import App from './routes/App';

ReactDOM.render(
    <React.StrictMode>
        <DataContext.Provider value={[]} >
            <App />
        </DataContext.Provider>
        
    </React.StrictMode>
, 

document.getElementById('app'));
