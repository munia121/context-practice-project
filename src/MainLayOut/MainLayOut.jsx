
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayOut = () => {
    return (
        <div className='w-[1400px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;