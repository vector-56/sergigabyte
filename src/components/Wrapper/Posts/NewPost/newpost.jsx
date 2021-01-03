import React from 'react';
import cl from './newpost.module.css'

function NewPost() {
    return (
            <div className={cl.newPost}>
                <textarea></textarea>
                <button>Запостить</button>
            </div>
    )
}

export default NewPost;