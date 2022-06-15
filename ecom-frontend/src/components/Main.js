import {Switch,Route,Redirect}  from 'react-router-dom';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import Dashboard from './user/Dashboard';
import AdminRoute from './protectedRoutes/AdminRoute';
import AdminDashboard from './admin/AdminDashboard';

const Main = () => {
    return (
    <div>
        <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <PrivateRoute path='/user/dashboard'>
                        <Dashboard/>
                </PrivateRoute>
                <AdminRoute path='/admin/dashboard'>
                    <AdminDashboard/>
                </AdminRoute>
                <Redirect to='/' />
        </Switch>
    </div>
    )
}

export default Main;