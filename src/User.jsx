import { use } from "react"

export default function User({UserData}){

    const user = use(UserData)
    
    
    return(
        <div>
            <h1>Users: {user.length}</h1>
        </div>
    )
}