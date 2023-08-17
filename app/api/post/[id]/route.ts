import { connectionToDB } from "@/utils/database"
import Post from "@/models/post"

export const GET = async (request, { params }) => {
    try {
        await connectionToDB()

        const post = await Post.findById(params.id)

        if (!post) return new Response("Post not found", { status: 404 })

        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch Post", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { title, body } = await request.json()

    try {
        await connectionToDB()

        const existingPost = await Post.findById(params.id)

        if (!existingPost) return new Response("Post not found", { status: 404 })

        existingPost.title = title
        existingPost.body = body

        await existingPost.save()

        return new Response(JSON.stringify(existingPost), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch Post", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectionToDB()

        await Post.findByIdAndRemove(params.id)

        return new Response("Post deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete Post", { status: 500 })
    }
}