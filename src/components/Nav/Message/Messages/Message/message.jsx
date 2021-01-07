import React from 'react';
import cl from './message.module.css'
import DialogElements from './../../DialogElements/dialogElements'
import MessageElements from '../MessageElements/messageElement'

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