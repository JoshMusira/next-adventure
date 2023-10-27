import Image from "next/image";

const TopBottomHero = ({ post }) => {
    return (
        <div className="relative overflow-hidden w-full">
            <div className="absolute h-full w-full bg-black/20" />
            <div className="absolute p-5 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-2 px-1">
                            {post.title}
                        </h2>
                        <span className="text-gray-50 bg-sky-400 rounded-md px-2">
                            {post.tags}
                        </span>
                    </div>
                    <div className="text-white font-bold text-sm flex flex-col gap-1">
                        <span>{post.publishDate}</span>
                    </div>
                </div>
            </div>
            <Image
                src={post.image_url}
                alt="blog picture"
                className="w-full h-full object-cover"
                height={400}
                width={400}
            />
        </div>
    )
}

export default TopBottomHero