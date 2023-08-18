'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const UserPost = ({ params }) => {
    const [post, setPost] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch(`/api/post/${params?.id}`)
            const data = await response.json()

            setPost(data)
        }

        if (params?.id) fetchPrompts()
    }, [])

    const handleEdit = () => {
		router.push(`/update-post?id=${post._id}`)
    }

    const handleDelete = async () => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

        if (hasConfirmed) {
            try {
                await fetch(`/api/post/${post._id.toString()}`, { method: 'DELETE' })

                setPost(post)
            } catch (error) {
                console.log(error)
            }
        }

        router.push(`/`)
    }

    return (
        <div className='p-20'>
            <h1 className='text-xl text-center pb-4'>{post.title}</h1>
            <p>{post.body}</p>
            <div className='mt-5 border-t border-gray-100 pt-3 flex justify-between'>
                <p className="font-inter text-sm green_gradient cursor-pointer pb-2" onClick={handleEdit}>
                    Edit
                </p>
                <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
                    Delete
                </p>
            </div>
        </div>
    )
}

export default UserPost