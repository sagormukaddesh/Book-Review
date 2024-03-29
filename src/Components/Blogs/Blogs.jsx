import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const Blogs = ({ blog }) => {

    const { image, bookId, type, category, rating,  author, bookName,  } = blog;

    return (

        <Link to={`/blog/${bookId}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition border border-amber-200 rounded-lg hover:border-amber-400 hover:rounded-lg hover:scale-105">
            <img role="presentation" className="object-cover w-full rounded-t-lg h-96 dark:bg-gray-500 " src={image} />
            <div className="p-6 space-y-2">
                <p className="text-slate-600 font-bold ">Type: <span className="ml-4 text-green-500 font-bold"> {type}</span> </p>
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName} </h3>
                <p className="text-slate-600 font-bold ">By: <span className="ml-4 text-slate-500 font-bold ">By: {author}</span> </p>
                <div className="flex justify-between pr-2 font-bold">
                    <p> {category} </p>
                    <p className="flex items-center gap-2">{rating} <span><FcRating></FcRating> </span> </p>
                </div>
            </div>
        </Link>

    );
};

export default Blogs;