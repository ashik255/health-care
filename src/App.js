import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './pages/login/Login/Login';
import Header from './pages/shared/Header/Header';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import FutterSection from './pages/shared/Futter/FutterSection';
import Details from './pages/home/details/Details';
import NotFound from './pages/home/NotFound/NotFound';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Register from './pages/login/Register/Register';
import NewsDetails from './pages/home/newsDetails/NewsDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
            <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route >
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/detail/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/newsdetail/:serviceId'>
              <NewsDetails></NewsDetails>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>

            </Route>
            {/* <PrivateRoute></PrivateRoute> */}
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <FutterSection></FutterSection>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
