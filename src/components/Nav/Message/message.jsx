import React from 'react';
import cl from './message.module.css'
import { NavLink } from 'react-router-dom'

let MessageArray = [
    { message: 'Hi', id: 1 },
    { message: 'Aye', id: 2 },
    { message: 'Hey', id: 3 },
    { message: 'Hello', id: 4 },
    { message: 'Ahoj', id: 5 },
    { message: 'Yo', id: 6 },
    { message: 'Kavabanga!', id: 7 },
    { message: 'Bum', id: 8 }
]

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

function Messages(props) {
    return (
        <div className={cl.dialogs}>
            <div>{props.message}</div>
        </div>
    )
}

let MessageElements = MessageArray.map(m => (<Messages message={m.message} />));

let DialogElements = DialogsArray.map(d => (<Dialog name={d.name} id={d.id} />))

function Message() {
    return (
        <div className={cl.message}>
            <div className={cl.dialogList}>
                {DialogElements}
            </div>
            <div className={cl.dialogs}>
                {MessageElements}
            </div>
        </div>)
}

export default Message;