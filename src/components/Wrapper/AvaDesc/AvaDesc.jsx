import React from 'react';
import cl from './AvaDesc.module.css'

function AvaDesc() {
    return (
        <div className={cl.wrapper}>
            <div className={cl.avatar}><img src="https://im0-tub-ru.yandex.net/i?id=820974138143913eabfc801e15540e17&n=13"/></div>
            <div className={cl.description}>description</div>
        </div>
    )
}

export default AvaDesc;