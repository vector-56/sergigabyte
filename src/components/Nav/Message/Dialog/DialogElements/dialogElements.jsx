import React from 'react';
import Dialog from '../Dialog/dialog';


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

let DialogElements = DialogsArray.map(d => (<Dialog name={d.name} id={d.id} />))

export default DialogElements;