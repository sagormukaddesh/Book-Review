import { Link, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import Blogs from "../../Components/Blogs/Blogs";
import Banner from "../../Components/Banner/Banner";


const Home = () => {

    const blogs = useLoaderData();
    const { bookId } = blogs[0];


    return (

        <div>
            <div>
                <Banner></Banner>
            </div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <h2 className="text-4xl font-bold text-center mb-4">Books</h2>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link to={`/blog/${bookId}`} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border transition border-amber-200 rounded-lg hover:border-amber-400 hover:rounded-lg hover:scale-105 dark:bg-gray-50">
                        <img src={blogs[0].image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <p className="text-slate-600 font-bold ">Type: <span className="ml-4 text-green-500 font-bold"> {blogs[0].type}</span> </p>
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].bookName}</h3>
                            <span className="text-xs dark:text-gray-600">Publish Date: {blogs[0].yearOfPublishing} </span>
                            <p className="text-slate-600 font-bold ">By: <span className="ml-4 text-slate-500 font-bold "> {blogs[0].author}</span> </p>
                            <div className="flex justify-between pr-2 font-bold">
                                <p> {blogs[0].category} </p>
                                <p className="flex items-center gap-2">{blogs[0].rating} <span><FcRating></FcRating> </span> </p>
                            </div>
                            <p > <span className="font-bold">Review: </span> <span>{blogs[0].review} </span></p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.slice(1, 6).map((blog, idx) => <Blogs key={idx} blog={blog} ></Blogs>)
                        }

                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                    </div>
                </div>
            </section>
        </div>



    );
};

export default Home;