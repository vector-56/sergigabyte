import React from 'react';
import cl from './wrapper.module.css'
import MyPosts from './Posts/MyPosts/myposts'
import AvaDesc from './AvaDesc/AvaDesc'


function Wrapper() {
    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper}><img src="https://w-dog.ru/wallpapers/9/16/533509633223902/priroda-nebo-oblaka-ozero-gory-pejzazh-derevya.jpg"/></div>
            <AvaDesc />
            <MyPosts />
        </div>
    )
}

export default Wrapper;