import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Navbar from './components/Navbar';
import ProduSearch from './pages/ProdutSearch';
import ProdutList from './pages/ProdutList';
import Productdetails from './pages/ProductDetails';
const App = () => {
  return ( 
    <>
		<BrowserRouter>
			{/* <Navbar/> */}
			<Routes>
				<Route path='/' element={ <Navbar/>  }>
					<Route index element={ <Home/> } />
					<Route path='/about' element={<About/> }></Route>
					<Route path='/product' element={<Product/> }>
						<Route index element={<ProduSearch/>} />
						<Route path='list' element={<ProdutList/> } />
						<Route path=':id' element={<Productdetails/> } />
					</Route>
					<Route path='*' element={<div className='text-center mt-3'>Page not found</div>}></Route>
				</Route>

			</Routes>
		</BrowserRouter>
    </>
   );
}
 
export default App;