import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "../../index.css";
const BlogDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/blogs/" + id;
  const { data, isLoading, isError } = useFetch(url);
  const history = useHistory();

  console.log(data, isLoading, isError);
  const deleteHandler = ()=>{
    fetch(url,{
      method:'DELETE'
    }).then(()=>{
      history.push("/");
    })
  }

  return (
    <div className="row">
      {isError && <p>{isError} </p>}
      {isLoading && (
        <div className="justify-content-center">
          <div className="spinner-border text-info m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
        </div>
      )}
      {data && (
        <article className="row m-4 px-4">
          <div className=" row card shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <h2 className="card-title blog-title text-danger">
                {data.title}
              </h2>
              <h6 className="card-subtitle mb-3 text-muted blog-author">
                Written By: {data.author}
              </h6>
              <p className="card-text blog-details">{data.body}</p>
            </div>
          </div>
          <div className="row">     
          <div className="col-6">
          <button onClick={deleteHandler} className="btn btn-danger btn-sm">Delete</button>
          </div>     
          <div className="col-6"><Link to="/">Back To HomePage</Link></div>
          
          </div>

        </article>
      )}
    </div>
  );
};

export default BlogDetails;
