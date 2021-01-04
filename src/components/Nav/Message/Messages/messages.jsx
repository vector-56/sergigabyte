import React from 'react';
import cl from './message.module.css'

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

function Messages(props) {
    return (
        <div className={cl.dialogs}>
            <div>{props.message}</div>
        </div>
    )
}

let MessageElements = MessageArray.map(m => (<Messages message={m.message} />));

export default Messages;
export default MessageElements;