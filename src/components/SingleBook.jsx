/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleBook = ({data}) => {
    // eslint-disable-next-line no-unused-vars
    const {id,image,bookName,author,review,totalPages,rating ,category, tags, publisher,yearOfPublishing} = data;
    console.log(data)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-6 ">
                    <img  src={image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{bookName}</h2>
                    <p className="font-bold">By: {publisher}</p>
                    <p>{review.slice(0,100)}</p>
                    <hr />
                    <div className="flex justify-between flex-grow">
                        <p>Ratings: {rating}</p>
                        <p>Page {totalPages}</p>
                    </div>
                    <div className="card-actions ">
                        <Link to={`detailsBook/${id}`}><button className="btn bg-rose-300">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;