import React from 'react';
import cl from './message.module.css'
import { NavLink } from 'react-router-dom'

let DialogsArray = [
    { name: 'Andrey', id: 1 },
    { name: 'Andrey', id: 2 },
    { name: 'Mick', id: 3 },
    { name: 'Dmitry', id: 4 },
    { name: 'Sergey', id: 5 },
    { name: 'Sasha', id: 6 },
    { name: 'Jay', id: 7 },
    { name: 'Vladimir', id: 8 }
]

function Dialog(props) {
    return (
        <div><NavLink to={"/message/" + props.id}>{props.name}</NavLink></div>
    )
}

let DialogElements = DialogsArray.map(d => (<Dialog name={d.name} id={d.id} />))

export default Dialog;
export default DialogElements;