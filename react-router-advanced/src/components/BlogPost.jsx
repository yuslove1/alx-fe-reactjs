import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const { postId } = useParams()
    return (
        <div>
            <h3>This is post {postId}</h3>
            <p>Welcome to the dynamic routing trial using useParams method this is post 
                {postId} passing through the url
            </p>
        </div>
    )
}

export default BlogPost
