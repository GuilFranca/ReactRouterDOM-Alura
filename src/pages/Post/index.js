import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import CardPost from "components/CardPost";

export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NotFound />
    }

    const filteredPosts = posts
        .filter(post => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id) // Ordena de forma decrescente
        .slice(0, 4); // Seleciona somente 4 posts

    return (
        // Forma que eu fiz
        // <>
        //     <Banner />
        //     <ModelPost
        //         fotoCapa={`/assets/posts/${post.id}/capa.png`}
        //         titulo={post.titulo}
        //     >
        //         <div className="post-markdown-container">
        //             <ReactMarkdown>
        //                 {post.texto}
        //             </ReactMarkdown>
        //         </div>

        //     </ModelPost>
        // </>

        // Forma que o curso ensina
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <ModelPost
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                        filteredPosts={filteredPosts}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className="otherPostsTitle">Outros posts que você pode gostar:</h2>

                        <ul className="otherPostsContainer">
                            {filteredPosts.map((post) => (
                                <li key={post.id}>
                                    <CardPost post={post} />
                                </li>
                            ))}
                        </ul>

                    </ModelPost>
                } />
            </Route>
        </Routes>
    )
}