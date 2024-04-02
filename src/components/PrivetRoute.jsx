/* eslint-disable react/prop-types */
import { useContext } from "react";
import { bookContext } from "./ContextComponent";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(bookContext)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivetRoute;