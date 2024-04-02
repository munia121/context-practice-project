import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { bookContext } from "./ContextComponent";

const NavBar = () => {
    const { user, logOut } = useContext(bookContext)

    const navLink = <>
        <NavLink className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/'}><li><button className="btn">All Books</button></li></NavLink>
        <NavLink className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/topBook'}><li> <button className="btn">Top Book</button> </li></NavLink>

    </>

    const handleLogOut = () =>{
        logOut()
        .then(result=>console.log(result.user))
        .catch(error=>console.error(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-10">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    {
                        user ? <>
                            <p>{user.email}</p>
                            <button onClick={handleLogOut} className="btn">sign out</button>
                        </> :
                            <>
                                <Link to={'/register'}> <button className="btn bg-red-300">Register</button> </Link>
                            </>
                    }
                    <Link to={'/login'}> <button className="btn bg-red-300">Login</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;