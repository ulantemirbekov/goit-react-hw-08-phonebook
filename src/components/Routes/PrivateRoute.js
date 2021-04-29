import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authRedux/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthorized = useSelector(authSelectors.getIsLoggedIn);
  return (

    <Route
      {...routeProps}
      render={props =>
        isAuthorized ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  )
};

export default PrivateRoute