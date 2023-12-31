import { posts } from "../constants/posts";
import TopBottomHero from "./TopBottomHero";
import TopMostHero from "./TopMostHero";
const Hero = () => {
    const featuredPost = posts.filter(
        (post) => post.featured === true
    );
    const topPosts = featuredPost.slice(0, 2);
    const bottomPost = featuredPost.slice(2, 5);
    return (
        <section className="py-5 -z-50">
            <div className="wrapper">
                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0 md:gap-x-6 gap-5">
                    {topPosts.map((post, index) => (
                        <div
                            key={index}
                            className="md:px-0 md:col-span-2 lg:col-span-3 overflow-hidden rounded-sm shadow"
                        >
                            <TopMostHero post={post} />
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-6 mt-6 gap-5">
                    {bottomPost.map((post, index) => (
                        <div
                            key={index}
                            className="md:px-0 relative rounded-sm overflow-hidden shadow"
                        >
                            <TopBottomHero post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;