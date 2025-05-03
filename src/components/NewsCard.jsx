import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card border border-base-200 rounded-md shadow-sm bg-white p-5 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-md">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3 leading-snug">{title}</h2>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-52 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-700">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <span className="text-orange-500 font-medium cursor-pointer"> Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-t-base-300">
        <div className="flex items-center gap-1 text-orange-400">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          <span className="ml-2 text-black text-sm font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
