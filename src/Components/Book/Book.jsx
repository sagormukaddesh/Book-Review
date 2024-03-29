import { Link, useLoaderData, useParams } from "react-router-dom";
import { getBookReadDetails, saveBookReadDetails } from "../../utility/readLocalStorage";
import { getBookWishDetails, saveBookWishDetails } from "../../utility/wishListLocalStore";
import toast, { Toaster } from 'react-hot-toast';

const Book = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id)
    

    const handleAddRead = () => {
        const readData = getBookReadDetails()
        if (!readData.includes(idInt)) {
            saveBookReadDetails(idInt)
            toast.success('Successfully Added on the Read List')
        }
        else {
            toast.error("This Book Already in Read List")
        }

    }

    const handleAddWishList = () => {
        const readData = getBookReadDetails()
        const wishData = getBookWishDetails();
        if (!readData.includes(idInt) && !wishData.includes(idInt)) {
            console.log(readData);
            saveBookWishDetails(idInt);
            toast.success('Successfully Added on Wishlist!')
        }
        else if (wishData.includes(idInt)) {
            toast.error('Book Already in WishList')
        }
        else{
            toast.error('Already in the read List')
        }
    }


    const book = books.find(book => book.bookId === idInt)
    const { image, category, tags, totalPages, rating, review, publisher, bookName, yearOfPublishing } = book

    return (
        <div>

            <div className="hero my-10 max-w-5xl mx-auto bg-slate-200">               
             <div className="hero-content  flex-col lg:flex-row">
                    <img src={image} className="w-[100%] rounded-lg shadow-2xl" />
                  <div>
                         <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-3">By: {publisher}</p>
                        <p className="font-bold py-4">{category}</p>
                         <p><span className="font-bold">Review</span> {review.slice(0, 200)}</p>                         <div className="flex gap-4 my-3">
                            <h4 className="font-bold">Tags</h4>
                            <span className="flex gap-4">
                                {
                                    tags.map((tag, idx) => <li key={idx} className="list-none">#{tag} </li>)
                                }
                            </span>
                        </div>
                        <p className="font-bold mb-2"><span className="pr-6">Number Of Page:</span> <span>{totalPages} ;</span> </p>
                        <p className="font-bold mb-2"><span className="pr-6">Publisher:</span> <span>{publisher} ;</span> </p>
                        <p className="font-bold mb-2"><span className="pr-6">Year Of Publishing:</span> <span>{yearOfPublishing} ;</span> </p>
                        <p className="font-bold mb-2"><span className="pr-6">Rating:</span> <span>{rating} ;</span> </p>

                        <div className="flex gap-4">

                            <Link  onClick={handleAddRead}  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-amber-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Read</span>
                                <span className="relative invisible">Read</span>
                            </Link>

                            <Link  onClick={handleAddWishList} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-amber-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Wishlist</span>
                                <span className="relative invisible">Wishlist</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>

        </div>
    );
};

export default Book;

