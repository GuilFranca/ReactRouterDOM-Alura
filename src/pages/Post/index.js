import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import "./Post.css";

export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <h1>Post não encontrado...</h1>
    } 

    return (
        <ModelPost
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>

        </ModelPost>
    )
}