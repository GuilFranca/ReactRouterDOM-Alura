import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NotFound />
    }

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
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    </ModelPost>
                } />
            </Route>
        </Routes>
    )
}