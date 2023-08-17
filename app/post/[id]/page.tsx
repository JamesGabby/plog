'use client'

import { useState, useEffect } from 'react'

const UserPost = ({ params }) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch(`/api/post/${params?.id}`)
            const data = await response.json()

            setPost(data)
        }

        if (params?.id) fetchPrompts()
    }, [])

    return (
        <div className='p-20'>
            <h1 className='text-xl text-center pb-4'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default UserPost