/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { bookContext } from "../components/ContextComponent";
import SingleBook from "../components/SingleBook";


const AllBooks = () => {
    const {userData} = useContext(bookContext)
    console.log(userData)
    

    return (
        <div className="grid grid-cols-3 gap-20 mt-20">
            {
                userData.map((data) => <SingleBook data={data}></SingleBook>)
            }
        </div>
    );
};

export default AllBooks;