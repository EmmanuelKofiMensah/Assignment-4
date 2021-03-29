// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./pages/LoginPage";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute path="/dashboard" component={Dashboard} isLoggedIn />
          <Route path="/resetpassword" component={ResetPassword} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
