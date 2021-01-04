import React from 'react';
import cl from './message.module.css'
import {NavLink} from 'react-router-dom'

function Message() {
    return (
        <div className={cl.message}>
            <div className={cl.dialogList}>
                <div><NavLink exact to="/message/1">Andrey</NavLink></div>
                <div><NavLink exact to="/message/2">Victor</NavLink></div>
                <div><NavLink exact to="/message/3">Mick</NavLink></div>
                <div><NavLink exact to="/message/4">Jay</NavLink></div>
                <div><NavLink exact to="/message/5">Dmitry</NavLink></div>
                <div><NavLink exact to="/message/6">Sergey</NavLink></div>
                <div><NavLink exact to="/message/7">Sasha</NavLink></div>
                <div><NavLink exact to="/message/8">Vladimir</NavLink></div>
            </div>
            <div className={cl.dialogs}>
                <div>Hi</div>
                <div>How are you?</div>
                <div>Thanks</div>
                <div>I'm fine!</div>
                <div>I'm good!</div>
                <div>I'm a dog!</div>
                <div>I'm fun!</div>
            </div>
        </div>)
}

export default Message;