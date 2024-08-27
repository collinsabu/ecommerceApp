
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//import Layout from componets
import Layouts from './components/Layouts';


//import pages 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import SingleProduct from './pages/SingleProduct';
import Blog from './pages/Blog';
import Singleblog from './pages/Singleblog';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndCondictions from './pages/TermsAndCondictions';
import NotFound from './pages/NotFound';









// create the routes
  const routes = createBrowserRouter(
                   createRoutesFromElements(
                      <Route path='/' element={<Layouts/>}>
                        <Route index element={ <Home/> } />
                        <Route path='about' element={<About/>}/>
                        <Route path='contact' element={<Contact/>}/>
                        <Route path='ourstore' element={<OurStore/>}/>
                        <Route path='ourstore/:id' element={<SingleProduct/>}/>                        
                        <Route path='blog' element={<Blog/>}/>
                        <Route path='blog/:id' element={<Singleblog/>}/>
                        <Route path='cart' element={<Cart/>}/>
                        <Route path='checkout' element={<CheckOut/>}/>
                        <Route path='compare-product' element={<CompareProduct/>}/>
                        <Route path='wish-list' element={<Wishlist/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='forgot-password' element={<ForgotPassword/>}/>
                        <Route path='signup' element={<SignUp/>}/>
                        <Route path='resetpassword' element={<Resetpassword/>}/>
                        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
                        <Route path='refund-policy' element={<RefundPolicy/>}/>
                        <Route path='shipping-policy' element={<ShippingPolicy/>}/>
                        <Route path='terms-condition' element={<TermsAndCondictions/>}/>
                        <Route path='*' element={<NotFound/>}/>
                      </Route>
                   )
  )
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
