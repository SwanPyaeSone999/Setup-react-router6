import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return ( 
        <div className="mt-5 text-center">
            <Link to='/product' className="btn btn-primary">
                Product Search
            </Link>
            <Link to='/product/list' className="btn btn-primary ms-2">
                Product List
            </Link>
            <Link to='/product/1' className="btn btn-primary ms-2">
                Product Details
            </Link>
            <Outlet></Outlet>
        </div>
     );
}
 
export default Product;