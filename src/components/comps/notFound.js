import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="row shadow-lg p-3 mb-5 bg-body rounded">
      <h1 className="display-2">Not Found</h1>
      <div className="alert alert-danger mr-3" role="alert">
        Sorry, the page that you are looking are not available!
      </div>
      <Link to="/">Back To HomePage</Link>
    </div>
  );
};

export default NotFound;
