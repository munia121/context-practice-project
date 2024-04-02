import { useContext } from "react";
import { bookContext } from "./ContextComponent";
import { useParams } from "react-router-dom";



const DetailsBook = () => {

    const{ userData } = useContext(bookContext)
     const {id} = useParams()
   
    const data = userData.find(book => book.id == id )
    console.log(data)
   

    return (
        <div>
            <h1>books id: {data.id}</h1>
            <img className="w-[500px]" src={data.image} alt="" />
        </div>
    );
};

export default DetailsBook;