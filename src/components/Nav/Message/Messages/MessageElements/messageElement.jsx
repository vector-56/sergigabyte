import React from 'react';
import Messages from '../messages'

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

let MessageElements = MessageArray.map(m => (<Messages message={m.message} />));

export default MessageElements;