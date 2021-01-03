import React from 'react';
import cl from './myposts.module.css'
import NewPost from '../NewPost/newpost'
import Post from './../Post/post'

function MyPosts() {
    return (
        <div className={cl.myposts}>
            <div>My posts</div>
            <NewPost />
            <Post message="Хорошая мысль" author="Василий"/>
            <Post message="Поддерживаю" author="Акакий"/>
            <Post message="Чего же мы ждем" author="Феоктист"/>
            <Post message="Вперед" author="Лев"/>
        </div>
    )
}

export default MyPosts;