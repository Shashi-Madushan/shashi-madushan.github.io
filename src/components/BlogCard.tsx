interface BlogCardProps {
    title: string;
    description: string;
    readMoreLink: string;
    imageUrl: string;
}

const BlogCard = ({title, description, readMoreLink, imageUrl}: BlogCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">
          {description}
        </p>
        <a 
          href={readMoreLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default BlogCard