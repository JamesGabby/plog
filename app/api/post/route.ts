import { connectionToDB } from "@/utils/database"
import Post from "@/models/post"

export const GET = async () => {
    try {
        await connectionToDB()

        const posts = await Post.find({})

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 })
    }
}