import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineLibraryBooks } from "react-icons/md";


const Read = ({ book }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, yearOfPublishing, publisher, rating } = book
    return (
        <div className="hero  bg-stone-100 shadow-lg  rounded-lg justify-start">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl mb-2 font-bold">{bookName}</h1>
                    <p > <span className="font-bold">By:</span>  {author}</p>

                    <div className="flex md:gap-10  gap-2 items-center">
                        <span>Tags:</span>
                        {
                            tags.map((tag, index) => (
                                <div key={index} ><p className="bg-gray-200 p-1 px-5 rounded-xl">#{tag}</p></div>
                            ))
                        }

                        <div className="md:flex gap-4 items-center"><FaLocationDot></FaLocationDot> Year of Publishing: {yearOfPublishing}</div>
                    </div>
                    <div className="flex md:gap-10 gap-5 items-center mt-6">
                        <div className="flex gap-2 items-center"> <LiaUserFriendsSolid></LiaUserFriendsSolid>Publisher: {publisher}</div>
                        <div className="flex gap-2 items-center">  <MdOutlineLibraryBooks></MdOutlineLibraryBooks>Page : {totalPages} </div>
                    </div>

                    <hr className="border w-full mt-6" />
                    <div className="md:flex  md:gap-10  items-center mt-6">
                        <button className="btn btn-outline btn-secondary rounded-full">Category:{category}</button>
                        <button className="btn btn-outline btn-accent rounded-full">Rating:{rating}</button>
                        <Link to={`/details/${bookId}`}><button className="btn bg-[#23BE0A] text-white rounded-full">View Details</button></Link>


                    </div>


                </div>
            </div>
        </div>
    );
};

Read.propTypes = {
    book: PropTypes.object.isRequired
}
export default Read;