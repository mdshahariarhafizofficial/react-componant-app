import { use } from "react"
import Comment from "./Comment";
export default function Comments({loadComments}){
    const allComment = use(loadComments);

    return(
    <div style={{border: '3px solid tomato', marginBottom: '30px', padding: '30px' }}>
        <h1>All Comments: {allComment.length}</h1>
        {/* {
            allComment.map( comment => <Comment key={comment.id} comment = {comment}></Comment> )
        } */}
    </div>
    )
}