
import { useParams , Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setPosts(data))
}, [id]);

  return (
    <div>
        <button onClick={goBack}>Go Back</button>
        {/*bad approach */}
        <button onClick={goHome}>Go Home</button>
        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
            )}
    </div>
  )
}

export { Singlepage }
