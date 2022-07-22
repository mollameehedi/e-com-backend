import {Switch,Route,Redirect}  from 'react-router-dom';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import Dashboard from './user/Dashboard';
import AdminRoute from './protectedRoutes/AdminRoute';
import AdminDashboard from './admin/AdminDashboard';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import ProductDetails from './home/ProductDetails';
import Cart from './order/Cart';
import ShippingAddress from './order/ShippingAddress';

const Main = () => {
    return (
    <div>
        <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/product/:id' exact component={ProductDetails}/>

                
                <PrivateRoute path='/user/dashboard'>
                        <Dashboard/>
                </PrivateRoute>
                <PrivateRoute exact path="/cart">
                    <Cart />
                </PrivateRoute>
                <PrivateRoute exact path="/shipping">
                    <ShippingAddress />
                </PrivateRoute>
        {/* admin router */}
                <AdminRoute path='/admin/dashboard'>
                    <AdminDashboard/>
                </AdminRoute>
                <AdminRoute path='/create/category'>
                    <CreateCategory/>
                </AdminRoute>
                <AdminRoute path='/create/product'>
                    <CreateProduct/>
                </AdminRoute>
                <Redirect to='/' />
        </Switch>
    </div>
    )
}

export default Main;