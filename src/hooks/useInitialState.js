import {useState} from 'react'
import initialState from '../initialState'

export const useInitialState = () => {
    const [state, setState] = useState(initialState)
    console.log(state)
    const handleClick = itemNew => {
        setState({
            ...state,
            item: itemNew
        })
    }
    return {
        handleClick
    };
};