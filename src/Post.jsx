import { use } from "react"

export default function Post({loadPostPromise}){
    const post = use(loadPostPromise)
    return (
        <div style={{border: '3px solid yellow' }}>
            <h1>All Post: {post.length}</h1>
        </div>
    )
}