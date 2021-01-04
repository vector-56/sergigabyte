import React from 'react';
import cl from './message.module.css'
import { NavLink } from 'react-router-dom'

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

function Message() {
    return (
        <div className={cl.message}>
            <div className={cl.dialogList}>
                <Dialog name="Andrey" id="1"></Dialog>
                <Dialog name="Mick" id="2"></Dialog>
                <Dialog name="Jay" id="3"></Dialog>
                <Dialog name="Dmitry" id="4"></Dialog>
                <Dialog name="Sergey" id="5"></Dialog>
                <Dialog name="Sasha" id="6"></Dialog>
                <Dialog name="Vladimir" id="7"></Dialog>
            </div>
            <div className={cl.dialogs}>
                <Messages message="Hi"></Messages>
                <Messages message="How are you?"></Messages>
                <Messages message="Thanks"></Messages>
                <Messages message="I'm fine!"></Messages>
                <Messages message="I'm good!"></Messages>
                <Messages message="I'm a dog!"></Messages>
                <Messages message="I'm fun!"></Messages>
            </div>
        </div>)
}

export default Message;