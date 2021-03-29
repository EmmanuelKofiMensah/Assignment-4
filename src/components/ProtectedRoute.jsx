import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, path, component: Component }) => {
  if (isLoggedIn) {
    return <Route path={path} render={() => <Component />} />;
  } else {
    return <Redirect to="/login" />;
  }
};
export default ProtectedRoute;
