import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="section">
      <h2>Products</h2>
      <Outlet />
    </div>
  );
};
export default Home;
