import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[400px] mt-4 mb-12 rounded-lg" >
            <div className="hero-overlay bg-slate-200 rounded-lg"></div>
            <div className="hero-content text-center lg:text-left">
                <div className="max-w-5xl lg:flex justify-between items-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Books to freshen up your bookshelf</h1>
                        <Link to={'/listed'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-amber-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Listed Books</span>
                            <span className="relative invisible">Listed Books</span>
                        </Link>
                    </div>
                    <div>
                        <img className="w-72" src="https://i.ibb.co/dGbzbwh/theRya.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;