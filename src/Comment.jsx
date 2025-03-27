export default function Comment({comment}){
    return(
        <div className="card">
            <h2><span style={{color: 'greenYellow', fontSize: '30px'}}>Title:</span> {comment.name}</h2>
            <h2><span style={{color: 'greenYellow', fontSize: '30px'}}>Email:</span> {comment.email}</h2>
            <h2><span style={{color: 'greenYellow', fontSize: '30px'}}>Comment:</span> {comment.body}</h2>
        </div>
    )
}