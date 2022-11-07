import { useParams } from "react-router-dom";

const Productdetails = () => {
    const {id} = useParams();;
    return ( 
        <div className="mt-4 text-center">
            product id is - {id}
        </div>
     );
}
 
export default Productdetails;