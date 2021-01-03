import React from 'react';
import cl from './post.module.css'

function Post(props) {
    return (
            <div className={cl.post}>
                <div><img src="https://i02.fotocdn.net/s116/1dd9b6cbafee0f32/user_l/2651526817.jpg"/></div>
                <div className={cl.message}>
                    {props.message}, {props.author}
                </div>
            </div>
    )
}

export default Post;