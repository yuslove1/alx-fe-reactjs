import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const { id } = useParams()
    return (
        <div>
            <h3>This is post {id}</h3>
            <p>Welcome to the dynamic routing trial using useParams method this is post 
                 {id} passing through the url.
            </p>
        </div>
    )
}

export default BlogPost
