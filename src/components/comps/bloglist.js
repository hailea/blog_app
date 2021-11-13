import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const data = blogs.map((blog, index) => {
    
    return (
      <div className="card text-center border-success m-2" key={index}>
          
        <div className="card-body">
          <h3 className="card-title text-danger">{blog.title}</h3>
          {/* <p className="card-text">{blog.body}</p> */}
          <p> <em>Author: {blog.author}</em></p>
          <Link to={`blogs/${blog.id}`}>read more</Link>        
        </div>
      </div>
    );
  });
  return <div><h1>{title}</h1>{data}</div>;
};

export default BlogList;
