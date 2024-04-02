/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { bookContext } from "../components/ContextComponent";
import SingleBook from "../components/SingleBook";


const MorePages = () => {
    const {morePages} = useContext(bookContext)
    console.log(morePages)

    return (
        <div className="grid grid-cols-3 gap-20 mt-20">
            {
                morePages.map((data) => <SingleBook data={data}></SingleBook>)
            }
        </div>
    );
};

export default MorePages;