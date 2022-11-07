import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <nav className='bg-dark justify-content-center d-flex  p-3'>
            <Link to='/' className='nav-link text-white'>Home</Link>
            <Link to='/about' className='nav-link text-white'>About </Link>
            <Link to='/product' className='nav-link text-white'>Products</Link>
        </nav>
        <Outlet></Outlet>
        </>
     );
}
 
export default Navbar;