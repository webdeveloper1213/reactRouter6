import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="section">
      <h2>404 Error</h2>
      <h3>Something went wrong</h3>
      <Link to="/" className="btn">
        Go back home
      </Link>
    </div>
  );
};
export default Error;
