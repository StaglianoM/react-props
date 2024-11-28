import PostCard from '../PostCard/PostCard'
import style from './Main.module.css'
import posts from '../../data/posts';

/* stampo solo i post published */
export default function Main() {
    const publishedPosts = posts.filter(post => post.published);

    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <h1 className={style.section_title}>Il mio blog</h1>
                </div>
                <div className="container">
                    <div className="row">

                        {publishedPosts.map(post => (
                            <div key={post.id} className="col-3">
                                <PostCard
                                    title={post.title}
                                    tags={post.tags}
                                    image={post.image}
                                    content={post.content}
                                />
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}