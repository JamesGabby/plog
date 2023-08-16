import { connectionToDB } from "@/utils/database"
import Post from "@/models/post"

export const POST = async (request) => {
    const { title, body } = await request.json()

    try {
        await connectionToDB()

        const newPost = new Post({ 
            title, 
            body
        })

        await newPost.save()

        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new post", { status: 500 })
    }
}