'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@/components/Form'

const EditPost = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const postId = searchParams.get('id')
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        const getPostDetails = async () => {
            const response = await fetch(`/api/post/${postId}`)
            const data = await response.json()

            setPost({
                title: data.title,
                body: data.body
            })
        }

        if (postId) getPostDetails()
    }, [postId])

    const updatePost = async (event: MouseEvent) => {
        event.preventDefault()
        setSubmitting(true)

        if (!postId) return alert('post ID not found')

        try {
            const response = await fetch(`/api/post/${postId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: post.title,
                    body: post.body
                })
            })

            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form 
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePost}
        />
    )
}

export default EditPost