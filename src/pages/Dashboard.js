import { Link } from "react-router-dom";
const Dashboard = ({ user }) => {
  return (
    <div className="section">
      <h3>Dashboard page</h3>
      <p>Welcome {user?.name} !</p>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Dashboard;
