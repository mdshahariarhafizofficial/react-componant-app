import { use } from "react"

export default function Comments({loadComments}){
    const comment = use(loadComments);

    return(
    <div style={{border: '3px solid tomato', marginBottom: '30px' }}>
        <h1>All Comments: {comment.length}</h1>
    </div>
    )
}