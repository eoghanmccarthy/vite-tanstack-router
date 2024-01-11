import axios from 'axios'

type PostType = {
    id: string
    title: string
    body: string
}

class NotFoundError extends Error {}

export const fetchPosts = async () => {
    await new Promise((r) => setTimeout(r, 300))
    return axios
        .get<PostType[]>('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.data.slice(0, 10))
}

export const fetchPost = async (postId: string) => {
    await new Promise((r) => setTimeout(r, 300))
    const post = await axios
        .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .catch((err) => {
            if (err.response.status === 404) {
                throw new NotFoundError(`Post with id "${postId}" not found!`)
            }
            throw err
        })
        .then((r) => r.data)

    return post
}
