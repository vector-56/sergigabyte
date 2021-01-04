import React from 'react';
import cl from './message.module.css'

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