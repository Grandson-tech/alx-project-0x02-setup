import { PostProps } from '../../interfaces';

export default function PostCard({ id, title, body, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          Post #{id}
        </span>
        <span className="ml-2 inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          User {userId}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed line-clamp-3">
        {body}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Read More →
        </button>
      </div>
    </div>
  );
}

