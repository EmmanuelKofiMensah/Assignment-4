import NavigationItem from "./NavigationItem";
import "../styles/Dashboard.css";

const Navigation = () => {
  return (
    <div>
      <ul className="links">
        <NavigationItem name="PROFILE" />
        <NavigationItem name="COURSES" />
        <NavigationItem name="RESULTS" />
      </ul>
    </div>
  );
};

export default Navigation;
